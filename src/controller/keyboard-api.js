const HID = require('node-hid');

// export
const canConnect = (device) => {
    try {
      new KeyboardAPI(device);
      return true;
    } catch (e) {
      console.error('Skipped ', device, e);
      return false;
    }
}

function eqArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((val, idx) => arr2[idx] === val);
}
const shiftTo16Bit = ([hi, lo]) => (hi << 8) | lo
const shiftFrom16Bit = (value) => [value >> 8, value & 255]
const shiftBufferTo16Bit = (buffer) => {
    let shiftedBuffer = [];
    for (let i = 0; i < buffer.length; i += 2) {
        shiftedBuffer.push(shiftTo16Bit([buffer[i], buffer[i + 1]]));
    }
    return shiftedBuffer;
};
const shiftBufferFrom16Bit = (buffer) => buffer.map(shiftFrom16Bit).flatMap(value => value);


const COMMAND_START = 0x00; // This is really a HID Report ID
const GET_PROTOCOL_VERSION = 0x01;
const GET_KEYBOARD_VALUE = 0x02;
const SET_KEYBOARD_VALUE = 0x03;
const DYNAMIC_KEYMAP_GET_KEYCODE = 0x04;
const DYNAMIC_KEYMAP_SET_KEYCODE = 0x05;
const DYNAMIC_KEYMAP_CLEAR_ALL = 0x06;
const LIGHT_CONFIG_SET_VALUE = 0x07;
const LIGHT_CONFIG_GET_VALUE = 0x08;
const LIGHT_CONFIG_SAVE = 0x09;
const EEPROM_RESET = 0x0a;
const BOOTLOADER_JUMP = 0x0b;
const DYNAMIC_KEYMAP_MACRO_GET_COUNT = 0x0c;
const DYNAMIC_KEYMAP_MACRO_GET_BUFFER_SIZE = 0x0d;
const DYNAMIC_KEYMAP_MACRO_GET_BUFFER = 0x0e;
const DYNAMIC_KEYMAP_MACRO_SET_BUFFER = 0x0f;
const DYNAMIC_KEYMAP_MACRO_RESET = 0x10;
const DYNAMIC_KEYMAP_GET_LAYER_COUNT = 0x11;
const DYNAMIC_KEYMAP_GET_BUFFER = 0x12;
const DYNAMIC_KEYMAP_SET_BUFFER = 0x13;

const UPTIME = 0x01 //
const LAYOUT_OPTIONS = 0x02
const SWITCH_MATRIX_STATE = 0x03
// QMK BACKLIGHT
const BACKLIGHT_BRIGHTNESS = 0x09
const BACKLIGHT_EFFECT = 0x0A
// QMK RGBLIGHT
const RGBLIGHT_BRIGHTNESS = 0x80
const RGBLIGHT_EFFECT = 0x81
const RGBLIGHT_EFFECT_SPEED = 0x82
const RGBLIGHT_COLOR = 0x83

// QMK not support
const LIGHT_CUSTOM_COLOR = 0x17


// version
const PROTOCOL_BETA = 8
const PROTOCOL_ALPHA = 7

device_cache = {}

// export
class KeyboardAPI {
    // {productId: 0xFFFF,vendorId: 0xFFFF,interface: 0xFFFF,
    // usage: 0xFF,usagePage: 0xFF,path: ''};
    isFlushing = false
    commandQueue = []
    constructor(device) {
        const path = device.path
        this.kbAddr = device.path;
        if (!device_cache[path]) {
            device_cache[path] = { device, hid: new HID.HID(path) };
        } else {
            device_cache[path] = { ...device_cache[path], device };
        }
        // console.log(device_cache)
    }

    getDevice() {
        return device_cache[this.kbAddr].device;
    }
    getMatrix() {
        const device = this.getDevice();
        return getMatrixLayoutFromDevice(device);
    }

    async flushQueue() {
        if (this.isFlushing === true) {
            return;
        }
        this.isFlushing = true;
        while (this.commandQueue.length !== 0) {
            const { res, args } = this.commandQueue.shift();
            // This allows us to queue promises in between hid commands, useful for timeouts
            if (typeof args === 'function') {
                await args();
                res();
            } else {
                const ans = await this._hidCommand(...args);
                res(ans);
            }
        }
        this.isFlushing = false;
    }

    async hidCommand(command, bytes) {
        return new Promise((res, rej) => {
            this.commandQueue.push({ res, args: [this.kbAddr, command, bytes] });
            if (!this.isFlushing) {
                this.flushQueue();
            }
        });
    }
    refresh(kbAddr) {
        this.kbAddr = kbAddr;
        device_cache[kbAddr] = { ...device_cache[kbAddr], hid: new HID.HID(kbAddr) };
    }
    getHID() {
        return device_cache[this.kbAddr].hid;
    }
    async getByteBuffer(kbAddr) {
        return new Promise((res, rej) => {
            this.getHID().read((err, data) => {
                res(data);
            });
        });
    }
    async _hidCommand(kbAddr, command, bytes) {
        const commandBytes = [...[COMMAND_START, command], ...bytes];
        const paddedArray = new Array(33).fill(0);
        commandBytes.forEach((val, idx) => (paddedArray[idx] = val));
        try {
            this.getHID().write(paddedArray);
        } catch (ex) {
            console.log('Retrying...');
            this.refresh(kbAddr);
            this.getHID().write(paddedArray);
        }
        const buffer = await this.getByteBuffer(kbAddr);
        const bufferCommandBytes = buffer.slice(0, commandBytes.length - 1);
        // get命令长度都是3，只用检查头部2个就行
        // 而set命令返回值和输入值一样
        if (!eqArr(commandBytes.slice(1), bufferCommandBytes)) {
            console.error('Command:', commandBytes, ' Resp:', buffer);
            throw 'Receiving incorrect response for command';
        }
        return buffer;
    }

    async getProtocolVersion() {
        const [_, hi, lo] = await this.hidCommand(GET_PROTOCOL_VERSION, []);
        return (hi << 8) | lo;
    }
    async getLayerCount() {
        const version = await this.getProtocolVersion();
        if (version >= PROTOCOL_BETA) {
            const [_, hi] = await this.hidCommand(DYNAMIC_KEYMAP_GET_LAYER_COUNT, []);
            return hi;
        } else if (version === PROTOCOL_ALPHA) {
            return 4;
        }
    }

    async getKey(layer, row, col) {
        const buffer = await this.hidCommand(DYNAMIC_KEYMAP_GET_KEYCODE, [
            layer,
            row,
            col
        ]);
        return (buffer[4] << 8) | buffer[5];
    }
    async setKey(layer, row, column, val) {
        const key = parseInt(val);
        const hi = (key & 0xff00) >> 8;
        const lo = key & 0xff;
        const res = await this.hidCommand(
            DYNAMIC_KEYMAP_SET_KEYCODE,
            [layer, row, column, hi, lo].map(val => parseInt(val))
        );
        return (res[4] << 8) | res[5];
    }
    async getBrightness() {
        const bytes = [BACKLIGHT_BRIGHTNESS];
        const [, , brightness] = await this.hidCommand(
            LIGHT_CONFIG_GET_VALUE,
            bytes
        );
        return brightness;
    }
    async setBrightness(brightness) {
        const bytes = [BACKLIGHT_BRIGHTNESS, brightness];
        await this.hidCommand(LIGHT_CONFIG_SET_VALUE, bytes);
    }
    async getRGBMode() {
        const bytes = [RGBLIGHT_EFFECT];
        const [, , val] = await this.hidCommand(LIGHT_CONFIG_GET_VALUE, bytes);
        return val;
    }
    async setRGBMode(effect) {
        const bytes = [RGBLIGHT_EFFECT, effect];
        await this.hidCommand(LIGHT_CONFIG_SET_VALUE, bytes);
    }
    async getKeyboardValue(command, resultLength = 1) {
        const bytes = [command];
        const val = await this.hidCommand(GET_KEYBOARD_VALUE, bytes)
        return val.slice(2, 2 + resultLength)
    }
    async setKeyboardValue(command, ...rest) {
        const bytes = [command, ...rest];
        await this.hidCommand(SET_KEYBOARD_VALUE, bytes)
    }
    async getBacklightValue(command, resultLength = 1) {
        const bytes = [command];
        const val = await this.hidCommand(LIGHT_CONFIG_GET_VALUE, bytes)
        return val.slice(2, 2 + resultLength)
    }
    async setBacklightValue(command, ...rest) {
        const bytes = [command, ...rest];
        await this.hidCommand(LIGHT_CONFIG_SET_VALUE, bytes)
    }
    async getColor() {
        const bytes = [RGBLIGHT_COLOR];
        const [, , hue, sat] = await this.hidCommand(
            LIGHT_CONFIG_GET_VALUE,
            bytes
        );
        return { hue, sat };
    }
    async setColor(hue, sat) {
        const bytes = [
            RGBLIGHT_COLOR,
            hue,
            sat
        ];
        await this.hidCommand(LIGHT_CONFIG_SET_VALUE, bytes);
    }
    async getCustomColor(colorNumber) {
        const bytes = [LIGHT_CUSTOM_COLOR, colorNumber];
        const [, , , hue, sat] = await this.hidCommand(
            LIGHT_CONFIG_GET_VALUE,
            bytes
        );
        return { hue, sat };
    }
    async setCustomColor(colorNumber, hue, sat) {
        const bytes = [LIGHT_CUSTOM_COLOR, colorNumber, hue, sat];
        await this.hidCommand(LIGHT_CONFIG_SET_VALUE, bytes);
    }

    async getMacroCount() {
        const [, count] = await this.hidCommand(DYNAMIC_KEYMAP_MACRO_GET_COUNT, []);
        return count
    }
    async getMacroBufferSize() {
        const [, hi, lo] = await this.hidCommand(DYNAMIC_KEYMAP_MACRO_GET_BUFFER_SIZE, []);
        return shiftTo16Bit([hi, lo])
    }
    async getMacroBytes() {
        const macroBufferSize = await this.getMacroBufferSize();
        const size = 28;
        let bytes = [];
        for (let offset = 0; offset < macroBufferSize; offset += size) {
            const [, , , , ...buffer] =
                await this.hidCommand(DYNAMIC_KEYMAP_MACRO_GET_BUFFER, [...shiftFrom16Bit(offset), size]);
            bytes.push(...buffer)
        }
        return bytes
    }
    async setMacroBytes(data) {
        const macroBufferSize = await this.getMacroBufferSize()
        const size = data.length;
        if (size > macroBufferSize) throw new Error(`Macro size($ {
                                  size
                              }) exceeds buffer size($ {
                                macroBufferSize
                              })`);
        const lastOffset = macroBufferSize - 1
        const lastOffsetBytes = shiftFrom16Bit(lastOffset);
        await this.resetMacros();
        try {
            await this.hidCommand(DYNAMIC_KEYMAP_MACRO_SET_BUFFER, [...shiftFrom16Bit(lastOffset), 1, 255]);
            const bufferSize = 28;
            for (let offset = 0; offset < data.length; offset += bufferSize) {
                const buffer = data.slice(offset, offset + bufferSize);
                await this.hidCommand(DYNAMIC_KEYMAP_MACRO_SET_BUFFER, [...shiftFrom16Bit(offset), buffer.length, ...buffer])
            }
        } finally {
            await this.hidCommand(DYNAMIC_KEYMAP_MACRO_SET_BUFFER, [...lastOffsetBytes, 1, 0])
        }
    }
    async resetMacros() {
        await this.hidCommand(DYNAMIC_KEYMAP_MACRO_RESET)
    }

    async timeout(time) {
        return new Promise((res, rej) => {
            commandQueue.push({
                res,
                args: () => new Promise((r, j) => setTimeout(() => r() || res(), time))
            });
            if (!this.isFlushing) {
                this.flushQueue();
            }
        });
    }

    async getKeymapBuffer(offset, size) {
        //size must be <=14
        if (size > 28) {
            throw 'Max data length is 28.';
        }
        const res = await this.hidCommand(DYNAMIC_KEYMAP_GET_BUFFER, [
            ...shiftFrom16Bit(offset),
            size
        ]);
        return [...res].slice(4, size + 4);
    }
    keymapBufferToKeycodes(buffer) {
        const keycodes = Array.from(buffer).reduce(
            (pre, now, idx) =>
                idx % 2 === 0
                    ? [...pre, (now || 0) << 8]
                    : [...pre.slice(0, -1), pre[pre.length - 1] + (now || 0)],
            []
        );
        return keycodes;
    }

    async readRawMatrix(matrix, layer) {
        const version = await this.getProtocolVersion();
        if (version >= PROTOCOL_BETA) {
            return this.fastReadRawMatrix(matrix, layer);
        }
        //  else if (version === PROTOCOL_ALPHA) {
        // return this.slowReadRawMatrix(matrix, layer);
        // }
    }

    async fastReadRawMatrix({ rows, cols }, layer) {
        const length = rows * cols;
        const MAX_KEYCODES_PARTIAL = 14;
        const bufferList = new Array < number > (
            Math.ceil(length / MAX_KEYCODES_PARTIAL)
        ).fill(0);
        const { res: promiseRes } = bufferList.reduce(
            ({ res, remaining }) =>
                remaining < MAX_KEYCODES_PARTIAL
                    ? {
                        res: [
                            ...res,
                            this.getKeymapBuffer(
                                layer * length * 2 + 2 * (length - remaining),
                                remaining * 2
                            )
                        ],
                        remaining: 0
                    }
                    : {
                        res: [
                            ...res,
                            this.getKeymapBuffer(
                                layer * length * 2 + 2 * (length - remaining),
                                MAX_KEYCODES_PARTIAL * 2
                            )
                        ],
                        remaining: remaining - MAX_KEYCODES_PARTIAL
                    },
            { res: [], remaining: length }
        );
        const yieldedRes = await Promise.all(promiseRes);
        return yieldedRes.flatMap(shiftBufferTo16Bit);
    }

    async saveLighting() {
        await this.hidCommand(LIGHT_CONFIG_SAVE);
    }
    async resetEEPROM() {
        const bytes = [];
        await this.hidCommand(EEPROM_RESET);
    }
    async jumpToBootloader() {
        await this.hidCommand(BOOTLOADER_JUMP);
    }
}

export { canConnect, KeyboardAPI }

// module.exports = {canConnect, KeyboardAPI}