const HID = require('node-hid');
const ElectronStore = require('electron-store');
// const { KeyboardAPI, canConnect } = require('./keyboard-api');
import { KeyboardAPI, canConnect } from './keyboard-api';
const IS_OSX = require('os').platform() === 'darwin';
// const fetch = require('node-fetch')
var DEVICE_META_MAP = {
}

// [0xAA96AAC2] : {
//     name: 'Z Alice YR',
//     layout: ["0,0"],
//     lights: false
// }
const THEMES = {
    PBT_HEAVY_INDUSTRY: {
        alpha: {
            c: '#f7f2ea',
            t: '#000000'
        },
        mod: {
            c: '#C2C7CA',
            t: '#000000'
        },
        accent: {
            c: '#FFC700',
            t: '#000000'
        }
    },
    OLIVIA: {
        alpha: {
            c: '#f0f0f0',
            t: '#363434'
        },
        mod: {
            c: '#363434',
            t: '#E8C4B8'
        },
        accent: {
            c: '#E8C4B8',
            t: '#363434'
        }
    },
    OLIVIA_DARK: {
        alpha: {
            c: '#363434',
            t: '#E8C4B8'
        },
        mod: {
            c: '#363434',
            t: '#E8C4B8'
        },
        accent: {
            c: '#E8C4B8',
            t: '#363434'
        }
    }
}
// getKeyboardFromDevice({productId:0xaa96, vendorId:0xaac2})

class KeyboardDevice {
    selectedDevice;
    // remoteBaseURL = 'https://www.caniusevia.com';
    devicesURL = new URL('https://gitee.com/jiaxin96/the-vib/raw/master/keyboards.v2.json');
    remoteDefaultData = {
        generatedAt: -1,
        definitions: {},
        theme: THEMES.OLIVIA_DARK
    };
    deviceStore = new ElectronStore({
        defaults: {
            remoteData: this.remoteDefaultData,
            settings: {
                allowKeyboardKeyRemapping: false,
                showDesignTab: false,
                disableFastRemap: false,
                disableHardwareAcceleration: false
            }
        }
    });
    lastJSON = this.deviceStore.get('remoteData');

    // DEVICE_META_MAP;

    isValidInterface(device) {
        return IS_OSX ? this.isValidInterfaceOSX(device) : this.isValidInterfaceNonOSX(device);
      }
      
    isValidInterfaceNonOSX(device) {
        const VALID_INTERFACE_IDS = [0x0001];
        return VALID_INTERFACE_IDS.includes(device.interface);
    }
      
    isValidInterfaceOSX(device) {
        const VALID_USAGE_IDS = [0x61];
        const VALID_USAGE_PAGE_IDS = [0xff60];
        return (
            VALID_USAGE_IDS.includes(device.usage) && VALID_USAGE_PAGE_IDS.includes(device.usagePage)
        );
    }

    getKeyboardFromDevice({productId,vendorId}) {
        const vendorProductId = parseInt(vendorId, 16) * 65536 + parseInt(productId,16);
        console.log(productId, vendorId, vendorProductId)
        // return COMPILED_DEVICE_META_MAP[vendorProductId];
    }
    async syncStore() {
        try {
            const response = await fetch(this.devicesURL.href,{
                headers:{
                    "Content-Type": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Credentials": "true"
                }
              });
            const json = await response.json();
            if (json.generatedAt !== this.lastJSON.generatedAt) {
                this.lastJSON = json;
                this.deviceStore.set('remoteData', json);
            }
        } catch (e) {
            console.warn(e);
        }
        if (JSON.stringify(this.lastJSON.definitions) === '{}') {
            DEVICE_META_MAP = {}
        } else {
            DEVICE_META_MAP = Object.entries(this.lastJSON.definitions)
            .reduce((p,c)=>({...p,[c[1].vendorProductId]:c[1]}),{})
        }
        return this.lastJSON.remoteData;
    }
    insertDeviceDefinition(devDef) {
        DEVICE_META_MAP[devDef.vendorProductId] = devDef
    }
    canConnect = (device) => {
        try {
          new KeyboardAPI(device);
          return true;
        } catch (e) {
          console.error('Skipped ', device, e);
          return false;
        }
    }
    getKeyboards() {
        const usbDevices = this.scanDevices();
        return usbDevices.filter((device) => {
          const validVendorProduct = this.isValidVendorProduct(device);
          const validInterface = this.isValidInterface(device);
          // attempt connection
          return validVendorProduct && validInterface && this.canConnect(device);
        });
    }
    scanDevices() {
        const devices = HID.devices();
        return devices;
    }
    isValidVendorProduct(device) {
        // JS bitwise operations is only 32-bit so we lose numbers if we shift too high
        const vendorProductId = (device.vendorId * 65536) + device.productId;

        return DEVICE_META_MAP[vendorProductId] !== undefined;
    }
}

export { KeyboardDevice }
