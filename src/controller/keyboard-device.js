const HID = require('node-hid');
const Store = require('electron-store');
const { KeyboardAPI, canConnect } = require('./keyboard-api');
const IS_OSX = require('os').platform() === 'darwin';
const fetch = require('node-fetch')
// a = require('./keyboard-api')
// canConnect = a.canConnect
// KeyboardAPI = a.KeyboardAPI

function scanDevices() {
    const devices = HID.devices();
    return devices;
}

function isValidVendorProduct(device) {
    // JS bitwise operations is only 32-bit so we lose numbers if we shift too high
    const vendorProductId = (device.vendorId * 65536) + device.productId;
    const DEVICE_META_MAP = {
        [0xAA96AAC2] : {
            name: 'Z Alice YR',
            layout: ["0,0"],
            lights: false
        }
    }
    return DEVICE_META_MAP[vendorProductId] !== undefined;
}
function isValidInterface(device) {
    return IS_OSX ? isValidInterfaceOSX(device) : isValidInterfaceNonOSX(device);
  }
  
function isValidInterfaceNonOSX(device) {
    const VALID_INTERFACE_IDS = [0x0001];
    return VALID_INTERFACE_IDS.includes(device.interface);
}
  
function isValidInterfaceOSX(device) {
    const VALID_USAGE_IDS = [0x61];
    const VALID_USAGE_PAGE_IDS = [0xff60];
    return (
        VALID_USAGE_IDS.includes(device.usage) && VALID_USAGE_PAGE_IDS.includes(device.usagePage)
    );
}

function getKeyboards() {
    const usbDevices = scanDevices();
    return usbDevices.filter((device) => {
      const validVendorProduct = isValidVendorProduct(device);
      const validInterface = isValidInterface(device);
      // attempt connection
      return validVendorProduct && validInterface && canConnect(device);
    });
}

var kb = getKeyboards()


/*
    c = new URL("keyboards.v2.json", "https://www.caniusevia.com"),
    i = new a({
        defaults: {
            remoteData: {
                generatedAt: -1,
                definitions: {},
                theme: Object(o.getTheme)()
            },
            settings: {
                allowKeyboardKeyRemapping: !1,
                showDesignTab: !1,
                disableFastRemap: !1,
                disableHardwareAcceleration: !1
            }
        }
    });
    let K = i.get("remoteData");
    function s() {
        return r(this, void 0, void 0, (function * () {
            try {
                const e = yield fetch(c.href),
                t = yield e.json();
                t.generatedAt !== K.generatedAt && (K = t, i.set("remoteData", t))
            } catch(e) {
                console.warn(e)
            }
            return K.remoteData
        }))
    }
*/
function getKeyboardFromDevice({productId,vendorId}) {
    const vendorProductId = vendorId * 65536 + productId;
    // return COMPILED_DEVICE_META_MAP[vendorProductId];
    permittedJsonBase = new URL("keyboards.v2.json", "https://www.caniusevia.com")
    var remoteJson = new Store({
        defaults: {
            remoteData: {
                generatedAt: -1,
                definitions: {}
            }
        }
    })
    let localData = remoteJson.get("remoteData");
    fetch(permittedJsonBase.href).then(res => res.json()).then(json => console.log(json))
    // function s() {
    //     return r(this, void 0, void 0, (function * () {
    //         try {
    //             const permittedJsonUrl = yield fetch(permittedJsonBase.href),
    //             remoteJsonData = yield permittedJsonUrl.json();
    //             remoteJsonData.generatedAt !== localData.generatedAt && (localData = remoteJsonData, i.set("remoteData", remoteJsonData))
    //         } catch(e) {
    //             console.warn(e)
    //         }
    //         return localData.remoteData
    //     }))
    // }
}
getKeyboardFromDevice({productId:0xaa96, vendorId:0xaac2})