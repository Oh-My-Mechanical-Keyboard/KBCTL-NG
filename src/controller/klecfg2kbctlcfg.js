import kle_parser from "./kle-parser.js"
// var kle_parser = require("./kle-parser.js");
// const fs = require('fs')
// const path = require('path')

// //1.读取data.json文件
// let dir = path.join(__dirname, '../renderer/components/KeyboardLayout/kle-jsons/z65ble/65.json')
// let arr = fs.readFileSync(dir, 'utf8')
// kleJson = JSON.parse(arr)
var __flat = (arr, deep=1) => {
  if (deep > 0)
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? __flat(cur, deep - 1) : cur), [])
  return arr.slice()
}
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};

function getVendorProductId(_a) {
  var productId = _a.productId, vendorId = _a.vendorId;
  var parsedVendorId = parseInt(vendorId, 16);
  var parsedProductId = parseInt(productId, 16);
  return parsedVendorId * 65536 + parsedProductId;
}
function validateLayouts(layouts) {
  var _a = layouts.labels, labels = _a === void 0 ? [] : _a, keymap = layouts.keymap;
  var viaLayout = kle_parser.kleLayoutToVIALayout(keymap);
  var missingLabels = labels.filter(function (_, idx) {
      return viaLayout.optionKeys[idx] === undefined ||
          viaLayout.optionKeys[idx][0] === undefined;
  });
  if (missingLabels.length > 0) {
      throw new Error("The KLE is missing the group keys for: " + missingLabels.join(','));
  }
  return viaLayout;
}
function validateKeyBounds(matrix, layouts) {
  var rows = matrix.rows, cols = matrix.cols;
  var optionKeys = __flat(Object.values(layouts.optionKeys)).map(function (group) {
      return Object.values(group).flat();
  });
  var oobKeys = layouts.keys
      .concat(optionKeys)
      .filter(function (_a) {
      var row = _a.row, col = _a.col;
      return row >= rows || col >= cols;
  });
  if (oobKeys.length !== 0) {
      throw new Error("The following keys reference a row or column outside of dimension defined in the matrix property: " + oobKeys
          .map(function (_a) {
          var row = _a.row, col = _a.col;
          return "(" + row + "," + col + ")";
      })
          .join(','));
  }
}
function keyboardDefinition2KBCTLDefinition(definition) {
  var name = definition.name;
  var customFeatures = definition.customFeatures;
  var customMenus = definition.customMenus;
  var customKeycodes = definition.customKeycodes;
  var lighting = definition.lighting;
  var matrix = definition.matrix;
  var layouts = definition.layouts;
  validateLayouts(layouts);
  var keymap = layouts.keymap, partialLayout = __rest(layouts, ["keymap"]);
  var viaLayouts = __assign(__assign({}, partialLayout), kle_parser.kleLayoutToVIALayout(layouts.keymap));
  validateKeyBounds(matrix, viaLayouts);
  return {
      name: name,
      lighting: lighting,
      layouts: viaLayouts,
      matrix: matrix,
      customFeatures: customFeatures,
      customKeycodes: customKeycodes,
      customMenus: customMenus,
      vendorProductId: getVendorProductId(definition)
  };
}

export default {
  keyboardDefinition2KBCTLDefinition
}

// const viaJson = keyboardDefinition2KBCTLDefinition(kleJson)

// console.log(JSON.stringify(viaJson))