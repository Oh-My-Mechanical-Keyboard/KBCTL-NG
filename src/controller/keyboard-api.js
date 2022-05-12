const HID = require('node-hid');
const IS_OSX = require('os').platform() === 'darwin';
// var Device = {
//     productId: 0xFFFF,
//     vendorId: 0xFFFF,
//     interface: 0xFFFF,
//     usage: 0xFF,
//     usagePage: 0xFF,
//     path: ''
//   };

class KeyboardAPI {
    // {productId: 0xFFFF,vendorId: 0xFFFF,interface: 0xFFFF,
    // usage: 0xFF,usagePage: 0xFF,path: ''};
    constructor(device) {
        this.kbAddr = device.path;
        this.cache = {device, hid: new HID.HID(device.path)};
        console.log(this.cache)
    }
}

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
const canConnect = (device) => {
    try {
      new KeyboardAPI(device);
      return true;
    } catch (e) {
      console.error('Skipped ', device, e);
      return false;
    }
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
console.log(kb)
// var kb = new KeyboardAPI({path:"rr/rrr/231"})