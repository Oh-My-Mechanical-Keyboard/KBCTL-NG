// import viaJson from ".\renderer\components\KeyboardLayout\kle-jsons\z65ble\info-via.json"
viaJson = {
  "name": "R65BLE_Y&R",
  "vendorId": "0xAA96",
  "productId": "0xAA03",
  "lighting": {
    "extends": "none",
    "keycodes": "qmk"
  },
  "matrix": { "rows": 5, "cols": 15 },
  "layouts": {
    "keymap": [
      {
        "name": "via"
      },
      [
        "0,0",
        "0,1",
        "0,2",
        "0,3",
        "0,4",
        "0,5",
        "0,6",
        "0,7",
        "0,8",
        "0,9",
        "0,10",
        "0,11",
        "0,12",
        {
          "w": 2
        },
        "0,13",
        {
          "x": 1
        },
        "0,14"
      ],
      [
        {
          "y": -0.75,
          "x": 15.25,
          "w": 0.75,
          "h": 0.75
        },
        "4,3",
        {
          "x": 1,
          "w": 0.75,
          "h": 0.75
        },
        "4,4"
      ],
      [
        {
          "y": -0.25,
          "w": 1.5
        },
        "1,0",
        "1,1",
        "1,2",
        "1,3",
        "1,4",
        "1,5",
        "1,6",
        "1,7",
        "1,8",
        "1,9",
        "1,10",
        "1,11",
        "1,12",
        {
          "w": 1.5
        },
        "1,13"
      ],
      [
        {
          "w": 1.75
        },
        "2,0",
        "2,1",
        "2,2",
        "2,3",
        "2,4",
        "2,5",
        "2,6",
        "2,7",
        "2,8",
        "2,9",
        "2,10",
        "2,11",
        {
          "w": 2.25
        },
        "2,12"
      ],
      [
        {
          "w": 2.25
        },
        "3,0",
        "3,1",
        "3,2",
        "3,3",
        "3,4",
        "3,5",
        "3,6",
        "3,7",
        "3,8",
        "3,9",
        "3,10",
        {
          "w": 1.75
        },
        "3,11"
      ],
      [
        {
          "y": -0.75,
          "x": 14.25
        },
        "3,12"
      ],
      [
        {
          "y": -0.25,
          "w": 1.25
        },
        "4,0",
        {
          "w": 1.25
        },
        "4,1",
        {
          "w": 1.25
        },
        "4,2",
        {
          "w": 6.25
        },
        "4,5",
        "4,8",
        "4,9",
        "4,10"
      ],
      [
        {
          "y": -0.75,
          "x": 13.25
        },
        "4,11",
        "4,12",
        "4,13"
      ]
    ]
  }
}

function kleLayoutToVIALayout(keymap) {
  var r, t = keymap.filter((function (keymap) {
    return Array.isArray(keymap)
  })).reduce((function (preRow, curRow) {
    var t = curRow.reduce((function (preKey, curKey) {
      var t, preCursor = preKey.cursor,
        cursorX = preCursor.x,
        cursorY = preCursor.y,
        l = preKey.res,
        c = preKey.c,
        u = preKey.h,
        d = preKey.t,
        p = preKey.r,
        h = preKey.d,
        m = preKey.rx,
        v = preKey.ry,
        y = preKey.w,
        g = preKey.y2,
        _ = preKey.x2,
        b = preKey.w2,
        j = preKey.h2,
        E = preKey.colorCount;
      if ("string" != typeof curKey) {
        var w = {
          colorCount: E,
          c: c,
          t: d,
          h: u,
          r: p,
          rx: m,
          ry: v,
          res: l,
          d: h,
          w: y,
          cursor: {
            x: n,
            y: i
          }
        };
        return w = ["y2", "x2", "w2", "h2", "r", "rx", "ry", "h", "w"].reduce((function (keymap, t) {
          var a;
          return "number" == typeof r[t] ? o(o({},
            keymap), ((a = {})[t] = r[t], a)) : keymap
        }), w),
          "boolean" == typeof r.d && (w = o(o({},
            w), {
            d: r.d
          })),
          "number" != typeof r.ry && "number" != typeof r.rx || (w = o(o({},
            w), {
            cursor: o(o({},
              w.cursor), {
              y: w.ry
            })
          })),
          "number" == typeof r.y && (w = o(o({},
            w), {
            cursor: o(o({},
              w.cursor), {
              y: w.cursor.y + r.y
            })
          })),
          "number" == typeof r.x && (w = o(o({},
            w), {
            cursor: o(o({},
              w.cursor), {
              x: n + r.x
            })
          })),
          "string" == typeof r.c && (w = o(o({},
            w), {
            c: r.c
          })),
          "string" == typeof r.t && (w = o(o({},
            w), {
            t: r.t
          })),
          w
      }
      // current key use the same cursor with preKey
      if ("string" == typeof curKey) {
        var P = c + ":" + d,
          S = r.split("\n"),
          x = h ? [0, 0] : f(S[0]),
          O = x[0],
          I = x[1],
          A = f(S[3] || "-1,0"),
          R = A[0],
          k = A[1];
        return {
          h: 1,
          w: 1,
          r: p,
          rx: m,
          ry: v,
          c: c,
          d: !1,
          colorCount: o(o({},
            E), ((t = {})[P] = void 0 === E[P] ? 1 : E[P] + 1, t)),
          t: d,
          cursor: {
            x: n + y,
            y: i
          },
          res: s(l, [{
            c: c,
            t: d,
            row: O,
            col: I,
            x: n + m,
            y: i,
            r: p,
            rx: m,
            ry: v,
            d: h,
            h: u,
            w: y,
            w2: b,
            y2: g,
            x2: _,
            h2: j,
            group: {
              key: R,
              option: k
            }
          }])
        }
      }
      return {
        c: c,
        t: d,
        h: u,
        d: h,
        r: p,
        w: y,
        rx: m,
        ry: v,
        res: l,
        colorCount: E,
        cursor: {
          x: n,
          y: i
        }
      }
    }), o(o({},
      e.prevRow), {
      cursor: e.cursor,
      colorCount: e.colorCount,
      h: 1,
      w: 1,
      d: !1,
      res: []
    }));
    return {
      cursor: {
        x: 0,
        y: t.cursor.y + 1
      },
      colorCount: t.colorCount,
      prevRow: {
        c: t.c,
        t: t.t,
        r: t.r,
        rx: t.rx,
        ry: t.ry
      },
      res: s(e.res, [t.res])
    }
  }), {
    cursor: {
      x: 0,
      y: 0
    },
    prevRow: {
      c: "#cccccc",
      t: "#000000",
      r: 0,
      rx: 0,
      ry: 0
    },
    res: [],
    colorCount: {}
  }),
    a = t.colorCount,
    n = t.res,
    u = Object.keys(a);
  if (u.sort((function (e, r) {
    return a[r] - a[e]
  })), u.length > 3) throw new Error("Please correct layout, too many colors:\n" + i.inspect(a, !1, null, !0));
  var p = ((r = {})[u[0]] = l.KeyColorType.Alpha, r[u[1]] = l.KeyColorType.Mod, r[u[2]] = l.KeyColorType.Accent, r),
    v = n.flat(),
    y = c(v),
    g = y.map(d),
    _ = Math.min.apply(Math, g.map((function (e) {
      return e.xStart
    }))),
    b = Math.min.apply(Math, g.map((function (e) {
      return e.yStart
    }))),
    j = Math.max.apply(Math, g.map((function (e) {
      return e.xEnd
    }))) - _,
    E = Math.max.apply(Math, g.map((function (e) {
      return e.yEnd
    }))) - b,
    w = y.filter((function (e) {
      return - 1 === e.group.key && !e.d
    })).map((function (e) {
      return m(e, {
        x: _,
        y: b
      },
        p)
    }));
  return {
    width: j,
    height: E,
    optionKeys: h(v, {
      x: _,
      y: b
    },
      p),
    keys: w
  }
}

function getDeviceID(raw) {
  return 65536 * parseInt(raw.vendorID, 16) + parseInt(raw.productID, 16)
}

function formatViaKleJson(raw) {
  if (!raw.hasOwnProperty("name") &&
    !raw.hasOwnProperty("vendorID") &&
    !raw.hasOwnProperty("productID") &&
    !raw.hasOwnProperty("matrix") &&
    !raw.hasOwnProperty("layouts")) {
    console.log("error.invalidViaKleJson")
  }

  kb_name = raw.name
  kb_fea = raw.customFeatures
  kb_code = raw.customKeycodes
  kb_lighting = raw.lighting
  kb_matrix = raw.matrix
  kb_layouts = raw.layouts

  kb_keymap = kb_layouts.keymap





}

formatViaKleJson(viaJson)