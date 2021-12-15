export function get_all_keycode (p_carry) {
  var basic = [{
      label: 'Basic',
      keycodes: [{
        name: '',
        describe: '',
        code: 'KC_NO',
        byte: 0
      },
      {
        name: '▽',
        describe: '',
        code: 'KC_TRNS',
        byte: 1
      },
      {
        name: 'A',
        describe: '',
        code: 'KC_A',
        byte: 4
      },
      {
        name: 'B',
        describe: '',
        code: 'KC_B',
        byte: 5
      },
      {
        name: 'C',
        describe: '',
        code: 'KC_C',
        byte: 6
      },
      {
        name: 'D',
        describe: '',
        code: 'KC_D',
        byte: 7
      },
      {
        name: 'E',
        describe: '',
        code: 'KC_E',
        byte: 8
      },
      {
        name: 'F',
        describe: '',
        code: 'KC_F',
        byte: 9
      },
      {
        name: 'G',
        describe: '',
        code: 'KC_G',
        byte: 10
      },
      {
        name: 'H',
        describe: '',
        code: 'KC_H',
        byte: 11
      },
      {
        name: 'I',
        describe: '',
        code: 'KC_I',
        byte: 12
      },
      {
        name: 'J',
        describe: '',
        code: 'KC_J',
        byte: 13
      },
      {
        name: 'K',
        describe: '',
        code: 'KC_K',
        byte: 14
      },
      {
        name: 'L',
        describe: '',
        code: 'KC_L',
        byte: 15
      },
      {
        name: 'M',
        describe: '',
        code: 'KC_M',
        byte: 16
      },
      {
        name: 'N',
        describe: '',
        code: 'KC_N',
        byte: 17
      },
      {
        name: 'O',
        describe: '',
        code: 'KC_O',
        byte: 18
      },
      {
        name: 'P',
        describe: '',
        code: 'KC_P',
        byte: 19
      },
      {
        name: 'Q',
        describe: '',
        code: 'KC_Q',
        byte: 20
      },
      {
        name: 'R',
        describe: '',
        code: 'KC_R',
        byte: 21
      },
      {
        name: 'S',
        describe: '',
        code: 'KC_S',
        byte: 22
      },
      {
        name: 'T',
        describe: '',
        code: 'KC_T',
        byte: 23
      },
      {
        name: 'U',
        describe: '',
        code: 'KC_U',
        byte: 24
      },
      {
        name: 'V',
        describe: '',
        code: 'KC_V',
        byte: 25
      },
      {
        name: 'W',
        describe: '',
        code: 'KC_W',
        byte: 26
      },
      {
        name: 'X',
        describe: '',
        code: 'KC_X',
        byte: 27
      },
      {
        name: 'Y',
        describe: '',
        code: 'KC_Y',
        byte: 28
      },
      {
        name: 'Z',
        describe: '',
        code: 'KC_Z',
        byte: 29
      },
      {
        name: '!<br/>1',
        describe: '',
        code: 'KC_1',
        byte: 30
      },
      {
        name: '@<br/>2',
        describe: '',
        code: 'KC_2',
        byte: 31
      },
      {
        name: '#<br/>3',
        describe: '',
        code: 'KC_3',
        byte: 32
      },
      {
        name: '$<br/>4',
        describe: '',
        code: 'KC_4',
        byte: 33
      },
      {
        name: '%<br/>5',
        describe: '',
        code: 'KC_5',
        byte: 34
      },
      {
        name: '^<br/>6',
        describe: '',
        code: 'KC_6',
        byte: 35
      },
      {
        name: '&<br/>7',
        describe: '',
        code: 'KC_7',
        byte: 36
      },
      {
        name: '*<br/>8',
        describe: '',
        code: 'KC_8',
        byte: 37
      },
      {
        name: '(<br/>9',
        describe: '',
        code: 'KC_9',
        byte: 38
      },
      {
        name: ')<br/>0',
        describe: '',
        code: 'KC_0',
        byte: 39
      },
      {
        name: 'Enter',
        describe: '',
        code: 'KC_ENT',
        byte: 40
      },
      {
        name: 'Esc',
        describe: '',
        code: 'KC_ESC',
        byte: 41
      },
      {
        name: 'Back Space',
        describe: '',
        code: 'KC_BSPC',
        byte: 42
      },
      {
        name: 'Tab',
        describe: '',
        code: 'KC_TAB',
        byte: 43
      },
      {
        name: 'Space',
        describe: '',
        code: 'KC_SPC',
        byte: 44
      },
      {
        name: '_<br/>-',
        describe: '',
        code: 'KC_MINS',
        byte: 45
      },
      {
        name: '+<br/>=',
        describe: '',
        code: 'KC_EQL',
        byte: 46
      },
      {
        name: '{<br/>[',
        describe: '',
        code: 'KC_LBRC',
        byte: 47
      },
      {
        name: '}<br/>]',
        describe: '',
        code: 'KC_RBRC',
        byte: 48
      },
      {
        name: '|<br/>\\',
        describe: '',
        code: 'KC_BSLS',
        byte: 49
      },
      {
        name: ':<br/>;',
        describe: '',
        code: 'KC_SCLN',
        byte: 51
      },
      {
        name: "\"<br/>'",
        describe: '',
        code: 'KC_QUOT',
        byte: 52
      },
      {
        name: '~<br/>`',
        describe: '',
        code: 'KC_GRV',
        byte: 53
      },
      {
        name: '<<br/>,',
        describe: '',
        code: 'KC_COMM',
        byte: 54
      },
      {
        name: '><br/>.',
        describe: '',
        code: 'KC_DOT',
        byte: 55
      },
      {
        name: '?<br/>/',
        describe: '',
        code: 'KC_SLSH',
        byte: 56
      },
      {
        name: 'Caps Lock',
        describe: '',
        code: 'KC_CAPS',
        byte: 57
      },
      {
        name: 'F1',
        describe: '',
        code: 'KC_F1',
        byte: 58
      },
      {
        name: 'F2',
        describe: '',
        code: 'KC_F2',
        byte: 59
      },
      {
        name: 'F3',
        describe: '',
        code: 'KC_F3',
        byte: 60
      },
      {
        name: 'F4',
        describe: '',
        code: 'KC_F4',
        byte: 61
      },
      {
        name: 'F5',
        describe: '',
        code: 'KC_F5',
        byte: 62
      },
      {
        name: 'F6',
        describe: '',
        code: 'KC_F6',
        byte: 63
      },
      {
        name: 'F7',
        describe: '',
        code: 'KC_F7',
        byte: 64
      },
      {
        name: 'F8',
        describe: '',
        code: 'KC_F8',
        byte: 65
      },
      {
        name: 'F9',
        describe: '',
        code: 'KC_F9',
        byte: 66
      },
      {
        name: 'F10',
        describe: '',
        code: 'KC_F10',
        byte: 67
      },
      {
        name: 'F11',
        describe: '',
        code: 'KC_F11',
        byte: 68
      },
      {
        name: 'F12',
        describe: '',
        code: 'KC_F12',
        byte: 69
      },
      {
        name: 'Print<br/>Screen',
        short: 'Print<br/>Scrn',
        describe: '',
        code: 'KC_PSCR',
        byte: 70
      },
      {
        name: 'Scroll<br/>Lock',
        describe: '',
        code: 'KC_SLCK',
        byte: 71
      },
      {
        name: 'Pause',
        describe: '',
        code: 'KC_PAUS',
        byte: 72
      },
      {
        name: 'Insert',
        describe: '',
        code: 'KC_INS',
        byte: 73
      },
      {
        name: 'Home',
        describe: '',
        code: 'KC_HOME',
        byte: 74
      },
      {
        name: 'Page<br/>Up',
        describe: '',
        code: 'KC_PGUP',
        byte: 75
      },
      {
        name: 'Del',
        describe: '',
        code: 'KC_DEL',
        byte: 76
      },
      {
        name: 'End',
        describe: '',
        code: 'KC_END',
        byte: 77
      },
      {
        name: 'Page<br/>Down',
        describe: '',
        code: 'KC_PGDN',
        byte: 78
      },
      {
        name: '→',
        describe: '',
        code: 'KC_RGHT',
        byte: 79
      },
      {
        name: '←',
        describe: '',
        code: 'KC_LEFT',
        byte: 80
      },
      {
        name: '↓',
        describe: '',
        code: 'KC_DOWN',
        byte: 81
      },
      {
        name: '↑',
        describe: '',
        code: 'KC_UP',
        byte: 82
      },
      {
        name: 'Num<br/>Lock',
        describe: '',
        code: 'KC_NLCK',
        byte: 83
      },
      {
        name: '/',
        describe: '',
        code: 'KC_PSLS',
        byte: 84
      },
      {
        name: '*',
        describe: '',
        code: 'KC_PAST',
        byte: 85
      },
      {
        name: '-',
        describe: '',
        code: 'KC_PMNS',
        byte: 86
      },
      {
        name: '+',
        describe: '',
        code: 'KC_PPLS',
        byte: 87
      },
      {
        name: 'Numpad Enter',
        short: 'Num<br/>Enter',
        describe: '',
        code: 'KC_PENT',
        byte: 88
      },
      {
        name: '1',
        describe: '',
        code: 'KC_P1',
        byte: 89
      },
      {
        name: '2',
        describe: '',
        code: 'KC_P2',
        byte: 90
      },
      {
        name: '3',
        describe: '',
        code: 'KC_P3',
        byte: 91
      },
      {
        name: '4',
        describe: '',
        code: 'KC_P4',
        byte: 92
      },
      {
        name: '5',
        describe: '',
        code: 'KC_P5',
        byte: 93
      },
      {
        name: '6',
        describe: '',
        code: 'KC_P6',
        byte: 94
      },
      {
        name: '7',
        describe: '',
        code: 'KC_P7',
        byte: 95
      },
      {
        name: '8',
        describe: '',
        code: 'KC_P8',
        byte: 96
      },
      {
        name: '9',
        describe: '',
        code: 'KC_P9',
        byte: 97
      },
      {
        name: '0',
        describe: '',
        code: 'KC_P0',
        byte: 98
      },
      {
        name: '.',
        describe: '',
        code: 'KC_PDOT',
        byte: 99
      },
      {
        name: 'App',
        describe: '',
        code: 'KC_APP',
        byte: 101
      },
      {
        name: 'Left Ctrl',
        describe: '',
        code: 'KC_LCTL',
        byte: 224
      },
      {
        name: 'Left Shift',
        describe: '',
        code: 'KC_LSFT',
        byte: 225
      },
      {
        name: 'Left Alt',
        describe: '',
        code: 'KC_LALT',
        byte: 226
      },
      {
        name: 'Left Win',
        describe: '',
        code: 'KC_LGUI',
        byte: 227
      },
      {
        name: 'Right Ctrl',
        describe: '',
        code: 'KC_RCTL',
        byte: 228
      },
      {
        name: 'Right Shift',
        describe: '',
        code: 'KC_RSFT',
        byte: 229
      },
      {
        name: 'Right Alt',
        describe: '',
        code: 'KC_RALT',
        byte: 230
      },
      {
        name: 'Right Win',
        describe: '',
        code: 'KC_RGUI',
        byte: 231
      }
      ]
    },
    {
      label: 'Media',
      keycodes: [{
        name: 'Mute',
        describe: '',
        code: 'KC_MUTE',
        byte: 168
      },
      {
        name: 'Vol+',
        describe: '',
        code: 'KC_VOLU',
        byte: 169
      },
      {
        name: 'Vol-',
        describe: '',
        code: 'KC_VOLD',
        byte: 170
      },
      {
        name: 'Next',
        describe: '',
        code: 'KC_MNXT',
        byte: 171
      },
      {
        name: 'Prev',
        describe: '',
        code: 'KC_MPRV',
        byte: 172
      },
      {
        name: 'Media<br/>Stop',
        describe: '',
        code: 'KC_MSTP',
        byte: 173
      },
      {
        name: 'Play',
        describe: '',
        code: 'KC_MPLY',
        byte: 174
      },
      {
        name: 'Select',
        describe: '',
        code: 'KC_MSEL',
        byte: 175
      },
      {
        name: 'Eject',
        describe: '',
        code: 'KC_EJCT',
        byte: 176
      },
      {
        name: 'Next<br/>Track',
        describe: '',
        code: 'KC_MFFD',
        byte: 187
      },
      {
        name: 'Prev<br/>Track',
        describe: '',
        code: 'KC_MRWD',
        byte: 188
      }
      ]
    },
    {
      label: 'Layer',
      keycodes: [{
        name: 'Fn1<br/>(Fn3)',
        describe: '',
        code: 'FN_MO13',
        byte: 24336
      },
      {
        name: 'Fn2<br/>(Fn3)',
        describe: '',
        code: 'FN_MO23',
        byte: 24337
      },
      {
        name: 'Space<br/>Fn1',
        describe: '',
        code: 'SPC_FN1',
        byte: 16684
      },
      {
        name: 'Space<br/>Fn2',
        describe: '',
        code: 'SPC_FN2',
        byte: 16940
      },
      {
        name: 'Space<br/>Fn3',
        describe: '',
        code: 'SPC_FN3',
        byte: 17196
      },
      {
        name: 'TO(0)',
        describe: '',
        code: 'TO(0)',
        byte: 20496
      },
      {
        name: 'TO(1)',
        describe: '',
        code: 'TO(1)',
        byte: 20497
      },
      {
        name: 'TO(2)',
        describe: '',
        code: 'TO(2)',
        byte: 20498
      },
      {
        name: 'TO(3)',
        describe: '',
        code: 'TO(3)',
        byte: 20499
      },
      {
        name: 'TO(4)',
        describe: '',
        code: 'TO(4)',
        byte: 20500
      },
      {
        name: 'TO(5)',
        describe: '',
        code: 'TO(5)',
        byte: 20501
      },
      {
        name: 'TO(6)',
        describe: '',
        code: 'TO(6)',
        byte: 20502
      },
      {
        name: 'TO(7)',
        describe: '',
        code: 'TO(7)',
        byte: 20503
      },
      {
        name: 'MO(0)',
        describe: '',
        code: 'MO(0)',
        byte: 20736
      },
      {
        name: 'MO(1)',
        describe: '',
        code: 'MO(1)',
        byte: 20737
      },
      {
        name: 'MO(2)',
        describe: '',
        code: 'MO(2)',
        byte: 20738
      },
      {
        name: 'MO(3)',
        describe: '',
        code: 'MO(3)',
        byte: 20739
      },
      {
        name: 'MO(4)',
        describe: '',
        code: 'MO(4)',
        byte: 20740
      },
      {
        name: 'MO(5)',
        describe: '',
        code: 'MO(5)',
        byte: 20741
      },
      {
        name: 'MO(6)',
        describe: '',
        code: 'MO(6)',
        byte: 20742
      },
      {
        name: 'MO(7)',
        describe: '',
        code: 'MO(7)',
        byte: 20743
      },
      {
        name: 'TG(0)',
        describe: '',
        code: 'TG(0)',
        byte: 21248
      },
      {
        name: 'TG(1)',
        describe: '',
        code: 'TG(1)',
        byte: 21249
      },
      {
        name: 'TG(2)',
        describe: '',
        code: 'TG(2)',
        byte: 21250
      },
      {
        name: 'TG(3)',
        describe: '',
        code: 'TG(3)',
        byte: 21251
      },
      {
        name: 'TG(4)',
        describe: '',
        code: 'TG(4)',
        byte: 21252
      },
      {
        name: 'TG(5)',
        describe: '',
        code: 'TG(5)',
        byte: 21253
      },
      {
        name: 'TG(6)',
        describe: '',
        code: 'TG(6)',
        byte: 21254
      },
      {
        name: 'TG(7)',
        describe: '',
        code: 'TG(7)',
        byte: 21255
      },
      {
        name: 'OSL(0)',
        describe: '',
        code: 'OSL(0)',
        byte: 21504
      },
      {
        name: 'OSL(1)',
        describe: '',
        code: 'OSL(1)',
        byte: 21505
      },
      {
        name: 'OSL(2)',
        describe: '',
        code: 'OSL(2)',
        byte: 21506
      },
      {
        name: 'OSL(3)',
        describe: '',
        code: 'OSL(3)',
        byte: 21507
      },
      {
        name: 'OSL(4)',
        describe: '',
        code: 'OSL(4)',
        byte: 21508
      },
      {
        name: 'OSL(5)',
        describe: '',
        code: 'OSL(5)',
        byte: 21509
      },
      {
        name: 'OSL(6)',
        describe: '',
        code: 'OSL(6)',
        byte: 21510
      },
      {
        name: 'OSL(7)',
        describe: '',
        code: 'OSL(7)',
        byte: 21511
      },
      {
        name: 'TT(0)',
        describe: '',
        code: 'TT(0)',
        byte: 22528
      },
      {
        name: 'TT(1)',
        describe: '',
        code: 'TT(1)',
        byte: 22529
      },
      {
        name: 'TT(2)',
        describe: '',
        code: 'TT(2)',
        byte: 22530
      },
      {
        name: 'TT(3)',
        describe: '',
        code: 'TT(3)',
        byte: 22531
      },
      {
        name: 'TT(4)',
        describe: '',
        code: 'TT(4)',
        byte: 22532
      },
      {
        name: 'TT(5)',
        describe: '',
        code: 'TT(5)',
        byte: 22533
      },
      {
        name: 'TT(6)',
        describe: '',
        code: 'TT(6)',
        byte: 22534
      },
      {
        name: 'TT(7)',
        describe: '',
        code: 'TT(7)',
        byte: 22535
      }
      ]
    },
    {
      label: 'Light',
      keycodes: [{
        name: 'BL<br/>Togg',
        describe: '',
        code: 'BL_TOGG',
        byte: 23743
      },
      {
        name: 'BL On',
        describe: '',
        code: 'BL_ON',
        byte: 23739
      },
      {
        name: 'BL Off',
        describe: '',
        code: 'BL_OFF',
        byte: 23740
      },
      {
        name: 'BL -',
        describe: '',
        code: 'BL_DEC',
        byte: 23741
      },
      {
        name: 'BL +',
        describe: '',
        code: 'BL_INC',
        byte: 23742
      },
      {
        name: 'BL<br/>Cycle',
        describe: '',
        code: 'BL_STEP',
        byte: 23744
      },
      {
        name: 'BR<br/>Togg',
        describe: '',
        code: 'BL_BRTG',
        byte: 23745
      },
      {
        name: 'RGB<br/>Togg',
        describe: '',
        code: 'RGB_TOG',
        byte: 23746
      },
      {
        name: 'RGB<br/>Mode-',
        short: 'RGB<br/>MD-',
        describe: '',
        code: 'RGB_RMOD',
        byte: 23748
      },
      {
        name: 'RGB<br/>Mode+',
        short: 'RGB<br/>MD+',
        describe: '',
        code: 'RGB_MOD',
        byte: 23747
      },
      {
        name: 'Hue -',
        describe: '',
        code: 'RGB_HUD',
        byte: 23750
      },
      {
        name: 'Hue +',
        describe: '',
        code: 'RGB_HUI',
        byte: 23749
      },
      {
        name: 'Sat -',
        describe: '',
        code: 'RGB_SAD',
        byte: 23752
      },
      {
        name: 'Sat +',
        describe: '',
        code: 'RGB_SAI',
        byte: 23751
      },
      {
        name: 'Bright -',
        describe: '',
        code: 'RGB_VAD',
        byte: 23754
      },
      {
        name: 'Bright +',
        describe: '',
        code: 'RGB_VAI',
        byte: 23753
      },
      {
        name: 'Effect Speed -',
        short: 'Effect<br/>SP -',
        describe: '',
        code: 'RGB_SPD',
        byte: 23756
      },
      {
        name: 'Effect Speed +',
        short: 'Effect<br/>SP +',
        describe: '',
        code: 'RGB_SPI',
        byte: 23755
      },
      {
        name: 'RGB Mode P',
        short: 'RGB P',
        describe: '',
        code: 'RGB_M_P',
        byte: 23757
      },
      {
        name: 'RGB Mode B',
        short: 'RGB B',
        describe: '',
        code: 'RGB_M_B',
        byte: 23758
      },
      {
        name: 'RGB Mode R',
        short: 'RGB R',
        describe: '',
        code: 'RGB_M_R',
        byte: 23759
      },
      {
        name: 'RGB Mode SW',
        short: 'RGB SW',
        describe: '',
        code: 'RGB_M_SW',
        byte: 23760
      },
      {
        name: 'RGB Mode SN',
        short: 'RGB SN',
        describe: '',
        code: 'RGB_M_SN',
        byte: 23761
      },
      {
        name: 'RGB Mode K',
        short: 'RGB K',
        describe: '',
        code: 'RGB_M_K',
        byte: 23762
      },
      {
        name: 'RGB Mode X',
        short: 'RGB X',
        describe: '',
        code: 'RGB_M_X',
        byte: 23763
      },
      {
        name: 'RGB Mode G',
        short: 'RGB G',
        describe: '',
        code: 'RGB_M_G',
        byte: 23764
      }
      ]
    },
    {
      label: 'Macro',
      keycodes: [{
        name: 'MA0',
        describe: '',
        code: 'MACRO00',
        byte: 24338
      },
      {
        name: 'MA1',
        describe: '',
        code: 'MACRO01',
        byte: 24339
      },
      {
        name: 'MA2',
        describe: '',
        code: 'MACRO02',
        byte: 24340
      },
      {
        name: 'MA3',
        describe: '',
        code: 'MACRO01',
        byte: 24341
      },
      {
        name: 'MA4',
        describe: '',
        code: 'MACRO01',
        byte: 24342
      },
      {
        name: 'MA5',
        describe: '',
        code: 'MACRO01',
        byte: 24343
      },
      {
        name: 'MA6',
        describe: '',
        code: 'MACRO01',
        byte: 24344
      },
      {
        name: 'MA7',
        describe: '',
        code: 'MACRO01',
        byte: 24345
      },
      {
        name: 'MA8',
        describe: '',
        code: 'MACRO01',
        byte: 24346
      },
      {
        name: 'MA9',
        describe: '',
        code: 'MACRO01',
        byte: 24347
      },
      {
        name: 'MA10',
        describe: '',
        code: 'MACRO01',
        byte: 24348
      },
      {
        name: 'MA11',
        describe: '',
        code: 'MACRO01',
        byte: 24349
      },
      {
        name: 'MA12',
        describe: '',
        code: 'MACRO01',
        byte: 24350
      },
      {
        name: 'MA13',
        describe: '',
        code: 'MACRO01',
        byte: 24351
      },
      {
        name: 'MA14',
        describe: '',
        code: 'MACRO01',
        byte: 24352
      },
      {
        name: 'MA15',
        describe: '',
        code: 'MACRO01',
        byte: 24353
      }
      ]
    },
    {
      label: 'Hyper',
      keycodes: [{
        name: '=',
        describe: '',
        code: 'KC_PEQL',
        byte: 103
      },
      {
        name: ',',
        describe: '',
        code: 'KC_PCMM',
        byte: 133
      },
      {
        name: '~',
        describe: '',
        code: 'KC_TILD',
        byte: 565
      },
      {
        name: '!',
        describe: '',
        code: 'KC_EXLM',
        byte: 542
      },
      {
        name: '@',
        describe: '',
        code: 'KC_AT',
        byte: 543
      },
      {
        name: '#',
        describe: '',
        code: 'KC_HASH',
        byte: 544
      },
      {
        name: '$',
        describe: '',
        code: 'KC_DLR',
        byte: 545
      },
      {
        name: '%',
        describe: '',
        code: 'KC_PERC',
        byte: 546
      },
      {
        name: '^',
        describe: '',
        code: 'KC_CIRC',
        byte: 547
      },
      {
        name: '&',
        describe: '',
        code: 'KC_AMPR',
        byte: 548
      },
      {
        name: '*',
        describe: '',
        code: 'KC_ASTR',
        byte: 549
      },
      {
        name: '(',
        describe: '',
        code: 'KC_LPRN',
        byte: 550
      },
      {
        name: ')',
        describe: '',
        code: 'KC_RPRN',
        byte: 551
      },
      {
        name: '_',
        describe: '',
        code: 'KC_UNDS',
        byte: 557
      },
      {
        name: '+',
        describe: '',
        code: 'KC_PLUS',
        byte: 558
      },
      {
        name: '{',
        describe: '',
        code: 'KC_LCBR',
        byte: 559
      },
      {
        name: '}',
        describe: '',
        code: 'KC_RCBR',
        byte: 560
      },
      {
        name: '<',
        describe: '',
        code: 'KC_LT',
        byte: 566
      },
      {
        name: '>',
        describe: '',
        code: 'KC_GT',
        byte: 567
      },
      {
        name: ':',
        describe: '',
        code: 'KC_COLN',
        byte: 563
      },
      {
        name: '|',
        describe: '',
        code: 'KC_PIPE',
        byte: 561
      },
      {
        name: '?',
        describe: '',
        code: 'KC_QUES',
        byte: 568
      },
      {
        name: '"',
        describe: '',
        code: 'KC_DQUO',
        byte: 564
      },
      {
        name: 'NUHS',
        describe: '',
        code: 'KC_NUHS',
        byte: 50
      },
      {
        name: 'NUBS',
        describe: '',
        code: 'KC_NUBS',
        byte: 100
      },
      {
        name: 'Ro',
        describe: '',
        code: 'KC_RO',
        byte: 135
      },
      {
        name: '¥',
        describe: '',
        code: 'KC_JYEN',
        byte: 137
      },
      {
        name: '無変換',
        describe: '',
        code: 'KC_MHEN',
        byte: 139
      },
      {
        name: '漢字',
        describe: '',
        code: 'KC_HANJ',
        byte: 145
      },
      {
        name: '한영',
        describe: '',
        code: 'KC_HAEN',
        byte: 144
      },
      {
        name: '変換',
        describe: '',
        code: 'KC_HENK',
        byte: 138
      },
      {
        name: 'かな',
        describe: '',
        code: 'KC_KANA',
        byte: 136
      },
      {
        name: 'Reset',
        describe: '',
        code: 'RESET',
        byte: 23552
      },
      {
        name: 'Esc `',
        describe: '',
        code: 'KC_GESC',
        byte: 23574
      },
      {
        name: 'LC (',
        describe: '',
        code: 'KC_LCPO',
        byte: 23795
      },
      {
        name: 'RC )',
        describe: '',
        code: 'KC_RCPC',
        byte: 23796
      },
      {
        name: 'LS (',
        describe: '',
        code: 'KC_LSPO',
        byte: 23767
      },
      {
        name: 'RS )',
        describe: '',
        code: 'KC_RSPC',
        byte: 23768
      },
      {
        name: 'LA (',
        describe: '',
        code: 'KC_LAPO',
        byte: 23797
      },
      {
        name: 'RA )',
        describe: '',
        code: 'KC_RAPC',
        byte: 23798
      },
      {
        name: 'Shift<br/>Enter',
        describe: '',
        code: 'KC_SFTENT',
        byte: 23769
      },
      {
        name: 'NKRO',
        describe: '',
        code: 'MAGIC_TOGGLE_NKRO',
        byte: 23572
      },
      {
        name: 'F13',
        describe: '',
        code: 'KC_F13',
        byte: 104
      },
      {
        name: 'F14',
        describe: '',
        code: 'KC_F14',
        byte: 105
      },
      {
        name: 'F15',
        describe: '',
        code: 'KC_F15',
        byte: 106
      },
      {
        name: 'F16',
        describe: '',
        code: 'KC_F16',
        byte: 107
      },
      {
        name: 'F17',
        describe: '',
        code: 'KC_F17',
        byte: 108
      },
      {
        name: 'F18',
        describe: '',
        code: 'KC_F18',
        byte: 109
      },
      {
        name: 'F19',
        describe: '',
        code: 'KC_F19',
        byte: 110
      },
      {
        name: 'F20',
        describe: '',
        code: 'KC_F20',
        byte: 111
      },
      {
        name: 'F21',
        describe: '',
        code: 'KC_F21',
        byte: 112
      },
      {
        name: 'F22',
        describe: '',
        code: 'KC_F22',
        byte: 113
      },
      {
        name: 'F23',
        describe: '',
        code: 'KC_F23',
        byte: 114
      },
      {
        name: 'F24',
        describe: '',
        code: 'KC_F24',
        byte: 115
      },
      {
        name: 'Exec',
        describe: '',
        code: 'KC_EXECUTE',
        byte: 116
      },
      {
        name: 'Help',
        describe: '',
        code: 'KC_HELP',
        byte: 117
      },
      {
        name: 'Menu',
        describe: '',
        code: 'KC_MENU',
        byte: 118
      },
      {
        name: 'Select',
        describe: '',
        code: 'KC_SELECT',
        byte: 119
      },
      {
        name: 'Stop',
        describe: '',
        code: 'KC_STOP',
        byte: 120
      },
      {
        name: 'Again',
        describe: '',
        code: 'KC_AGAIN',
        byte: 121
      },
      {
        name: 'Undo',
        describe: '',
        code: 'KC_UNDO',
        byte: 122
      },
      {
        name: 'Cut',
        describe: '',
        code: 'KC_CUT',
        byte: 123
      },
      {
        name: 'Copy',
        describe: '',
        code: 'KC_COPY',
        byte: 124
      },
      {
        name: 'Paste',
        describe: '',
        code: 'KC_PASTE',
        byte: 125
      },
      {
        name: 'Find',
        describe: '',
        code: 'KC_FIND',
        byte: 126
      },
      {
        name: 'Locking Caps Lock',
        short: 'Lock<br/>Caps',
        describe: '',
        code: 'KC_LCAP',
        byte: 130
      },
      {
        name: 'Locking Num Lock',
        short: 'Lock<br/>Num',
        describe: '',
        code: 'KC_LNUM',
        byte: 131
      },
      {
        name: 'Locking Scroll Lock',
        short: 'Lock<br/>Scroll',
        describe: '',
        code: 'KC_LSCR',
        byte: 132
      },
      {
        name: 'Power<br/>OSX',
        describe: '',
        code: 'KC_POWER',
        byte: 102
      },
      {
        name: 'Power',
        describe: '',
        code: 'KC_PWR',
        byte: 165
      },
      {
        name: 'Sleep',
        describe: '',
        code: 'KC_SLEP',
        byte: 166
      },
      {
        name: 'Wake',
        describe: '',
        code: 'KC_WAKE',
        byte: 167
      },
      {
        name: 'Mail',
        describe: '',
        code: 'KC_MAIL',
        byte: 177
      },
      {
        name: 'Calc',
        describe: '',
        code: 'KC_CALC',
        byte: 178
      },
      {
        name: 'My<br/>Comp',
        describe: '',
        code: 'KC_MYCM',
        byte: 179
      },
      {
        name: 'Mouse ↑',
        short: 'MS ↑',
        describe: '',
        code: 'KC_MS_UP',
        byte: 240
      },
      {
        name: 'Mouse ↓',
        short: 'MS ↓',
        describe: '',
        code: 'KC_MS_DOWN',
        byte: 241
      },
      {
        name: 'Mouse ←',
        short: 'MS ←',
        describe: '',
        code: 'KC_MS_LEFT',
        byte: 242
      },
      {
        name: 'Mouse →',
        short: 'MS →',
        describe: '',
        code: 'KC_MS_RIGHT',
        byte: 243
      },
      {
        name: 'Mouse<br/>Btn1',
        describe: '',
        code: 'KC_MS_BTN1',
        byte: 244
      },
      {
        name: 'Mouse<br/>Btn2',
        describe: '',
        code: 'KC_MS_BTN2',
        byte: 245
      },
      {
        name: 'Mouse<br/>Btn3',
        describe: '',
        code: 'KC_MS_BTN3',
        byte: 246
      },
      {
        name: 'Mouse<br/>Btn4',
        describe: '',
        code: 'KC_MS_BTN4',
        byte: 247
      },
      {
        name: 'Mouse<br/>Btn5',
        describe: '',
        code: 'KC_MS_BTN5',
        byte: 248
      },
      {
        name: 'Mouse<br/>WH↑',
        describe: '',
        code: 'KC_MS_WH_UP',
        byte: 249
      },
      {
        name: 'Mouse<br/>WH↓',
        describe: '',
        code: 'KC_MS_WH_DOWN',
        byte: 250
      },
      {
        name: 'Mouse<br/>WH←',
        describe: '',
        code: 'KC_MS_WH_LEFT',
        byte: 251
      },
      {
        name: 'Mouse<br/>WH→',
        describe: '',
        code: 'KC_MS_WH_RIGHT',
        byte: 252
      },
      {
        name: 'Mouse<br/>Acc0',
        describe: '',
        code: 'KC_MS_ACCEL0',
        byte: 253
      },
      {
        name: 'Mouse<br/>Acc1',
        describe: '',
        code: 'KC_MS_ACCEL1',
        byte: 254
      },
      {
        name: 'Mouse<br/>Acc2',
        describe: '',
        code: 'KC_MS_ACCEL2',
        byte: 255
      }
      ]
    },
    {
      label: 'Bluetooth',
      keycodes: [{
        name: 'BLE0',
        describe: '',
        code: 'KC_BLE_0',
        byte: 32768
      },
      {
        name: 'BLE1',
        describe: '',
        code: 'KC_BLE_1',
        byte: 32769
      },
      {
        name: 'BLE2',
        describe: '',
        code: 'KC_BLE_2',
        byte: 32770
      },
      {
        name: 'BLE<br/>Reset',
        describe: '',
        code: 'KC_BLE_RESET',
        byte: 33023
      }
      ]
    }
    ].reduce(function (e, t) {
      return e.concat(t.keycodes)
    }, []),

    media = [{
      name: 'Mute',
      describe: '',
      code: 'KC_MUTE',
      byte: 168
    },
    {
      name: 'Vol+',
      describe: '',
      code: 'KC_VOLU',
      byte: 169
    },
    {
      name: 'Vol-',
      describe: '',
      code: 'KC_VOLD',
      byte: 170
    },
    {
      name: 'Next',
      describe: '',
      code: 'KC_MNXT',
      byte: 171
    },
    {
      name: 'Prev',
      describe: '',
      code: 'KC_MPRV',
      byte: 172
    },
    {
      name: 'Media<br/>Stop',
      describe: '',
      code: 'KC_MSTP',
      byte: 173
    },
    {
      name: 'Play',
      describe: '',
      code: 'KC_MPLY',
      byte: 174
    },
    {
      name: 'Select',
      describe: '',
      code: 'KC_MSEL',
      byte: 175
    },
    {
      name: 'Eject',
      describe: '',
      code: 'KC_EJCT',
      byte: 176
    },
    {
      name: 'Next<br/>Track',
      describe: '',
      code: 'KC_MFFD',
      byte: 187
    },
    {
      name: 'Prev<br/>Track',
      describe: '',
      code: 'KC_MRWD',
      byte: 188
    }
    ],

    layer = [{
      name: 'Fn1<br/>(Fn3)',
      describe: '',
      code: 'FN_MO13',
      byte: 24336
    },
    {
      name: 'Fn2<br/>(Fn3)',
      describe: '',
      code: 'FN_MO23',
      byte: 24337
    },
    {
      name: 'Space<br/>Fn1',
      describe: '',
      code: 'SPC_FN1',
      byte: 16684
    },
    {
      name: 'Space<br/>Fn2',
      describe: '',
      code: 'SPC_FN2',
      byte: 16940
    },
    {
      name: 'Space<br/>Fn3',
      describe: '',
      code: 'SPC_FN3',
      byte: 17196
    },
    {
      name: 'TO(0)',
      describe: '',
      code: 'TO(0)',
      byte: 20496
    },
    {
      name: 'TO(1)',
      describe: '',
      code: 'TO(1)',
      byte: 20497
    },
    {
      name: 'TO(2)',
      describe: '',
      code: 'TO(2)',
      byte: 20498
    },
    {
      name: 'TO(3)',
      describe: '',
      code: 'TO(3)',
      byte: 20499
    },
    {
      name: 'TO(4)',
      describe: '',
      code: 'TO(4)',
      byte: 20500
    },
    {
      name: 'TO(5)',
      describe: '',
      code: 'TO(5)',
      byte: 20501
    },
    {
      name: 'TO(6)',
      describe: '',
      code: 'TO(6)',
      byte: 20502
    },
    {
      name: 'TO(7)',
      describe: '',
      code: 'TO(7)',
      byte: 20503
    },
    {
      name: 'MO(0)',
      describe: '',
      code: 'MO(0)',
      byte: 20736
    },
    {
      name: 'MO(1)',
      describe: '',
      code: 'MO(1)',
      byte: 20737
    },
    {
      name: 'MO(2)',
      describe: '',
      code: 'MO(2)',
      byte: 20738
    },
    {
      name: 'MO(3)',
      describe: '',
      code: 'MO(3)',
      byte: 20739
    },
    {
      name: 'MO(4)',
      describe: '',
      code: 'MO(4)',
      byte: 20740
    },
    {
      name: 'MO(5)',
      describe: '',
      code: 'MO(5)',
      byte: 20741
    },
    {
      name: 'MO(6)',
      describe: '',
      code: 'MO(6)',
      byte: 20742
    },
    {
      name: 'MO(7)',
      describe: '',
      code: 'MO(7)',
      byte: 20743
    },
    {
      name: 'TG(0)',
      describe: '',
      code: 'TG(0)',
      byte: 21248
    },
    {
      name: 'TG(1)',
      describe: '',
      code: 'TG(1)',
      byte: 21249
    },
    {
      name: 'TG(2)',
      describe: '',
      code: 'TG(2)',
      byte: 21250
    },
    {
      name: 'TG(3)',
      describe: '',
      code: 'TG(3)',
      byte: 21251
    },
    {
      name: 'TG(4)',
      describe: '',
      code: 'TG(4)',
      byte: 21252
    },
    {
      name: 'TG(5)',
      describe: '',
      code: 'TG(5)',
      byte: 21253
    },
    {
      name: 'TG(6)',
      describe: '',
      code: 'TG(6)',
      byte: 21254
    },
    {
      name: 'TG(7)',
      describe: '',
      code: 'TG(7)',
      byte: 21255
    },
    {
      name: 'OSL(0)',
      describe: '',
      code: 'OSL(0)',
      byte: 21504
    },
    {
      name: 'OSL(1)',
      describe: '',
      code: 'OSL(1)',
      byte: 21505
    },
    {
      name: 'OSL(2)',
      describe: '',
      code: 'OSL(2)',
      byte: 21506
    },
    {
      name: 'OSL(3)',
      describe: '',
      code: 'OSL(3)',
      byte: 21507
    },
    {
      name: 'OSL(4)',
      describe: '',
      code: 'OSL(4)',
      byte: 21508
    },
    {
      name: 'OSL(5)',
      describe: '',
      code: 'OSL(5)',
      byte: 21509
    },
    {
      name: 'OSL(6)',
      describe: '',
      code: 'OSL(6)',
      byte: 21510
    },
    {
      name: 'OSL(7)',
      describe: '',
      code: 'OSL(7)',
      byte: 21511
    },
    {
      name: 'TT(0)',
      describe: '',
      code: 'TT(0)',
      byte: 22528
    },
    {
      name: 'TT(1)',
      describe: '',
      code: 'TT(1)',
      byte: 22529
    },
    {
      name: 'TT(2)',
      describe: '',
      code: 'TT(2)',
      byte: 22530
    },
    {
      name: 'TT(3)',
      describe: '',
      code: 'TT(3)',
      byte: 22531
    },
    {
      name: 'TT(4)',
      describe: '',
      code: 'TT(4)',
      byte: 22532
    },
    {
      name: 'TT(5)',
      describe: '',
      code: 'TT(5)',
      byte: 22533
    },
    {
      name: 'TT(6)',
      describe: '',
      code: 'TT(6)',
      byte: 22534
    },
    {
      name: 'TT(7)',
      describe: '',
      code: 'TT(7)',
      byte: 22535
    }
    ],

    rgb = [{
      name: 'BL<br/>Togg',
      describe: '',
      code: 'BL_TOGG',
      byte: 23743
    },
    {
      name: 'BL On',
      describe: '',
      code: 'BL_ON',
      byte: 23739
    },
    {
      name: 'BL Off',
      describe: '',
      code: 'BL_OFF',
      byte: 23740
    },
    {
      name: 'BL -',
      describe: '',
      code: 'BL_DEC',
      byte: 23741
    },
    {
      name: 'BL +',
      describe: '',
      code: 'BL_INC',
      byte: 23742
    },
    {
      name: 'BL<br/>Cycle',
      describe: '',
      code: 'BL_STEP',
      byte: 23744
    },
    {
      name: 'BR<br/>Togg',
      describe: '',
      code: 'BL_BRTG',
      byte: 23745
    },
    {
      name: 'RGB<br/>Togg',
      describe: '',
      code: 'RGB_TOG',
      byte: 23746
    },
    {
      name: 'RGB<br/>Mode-',
      short: 'RGB<br/>MD-',
      describe: '',
      code: 'RGB_RMOD',
      byte: 23748
    },
    {
      name: 'RGB<br/>Mode+',
      short: 'RGB<br/>MD+',
      describe: '',
      code: 'RGB_MOD',
      byte: 23747
    },
    {
      name: 'Hue -',
      describe: '',
      code: 'RGB_HUD',
      byte: 23750
    },
    {
      name: 'Hue +',
      describe: '',
      code: 'RGB_HUI',
      byte: 23749
    },
    {
      name: 'Sat -',
      describe: '',
      code: 'RGB_SAD',
      byte: 23752
    },
    {
      name: 'Sat +',
      describe: '',
      code: 'RGB_SAI',
      byte: 23751
    },
    {
      name: 'Bright -',
      describe: '',
      code: 'RGB_VAD',
      byte: 23754
    },
    {
      name: 'Bright +',
      describe: '',
      code: 'RGB_VAI',
      byte: 23753
    },
    {
      name: 'Effect Speed -',
      short: 'Effect<br/>SP -',
      describe: '',
      code: 'RGB_SPD',
      byte: 23756
    },
    {
      name: 'Effect Speed +',
      short: 'Effect<br/>SP +',
      describe: '',
      code: 'RGB_SPI',
      byte: 23755
    },
    {
      name: 'RGB Mode P',
      short: 'RGB P',
      describe: '',
      code: 'RGB_M_P',
      byte: 23757
    },
    {
      name: 'RGB Mode B',
      short: 'RGB B',
      describe: '',
      code: 'RGB_M_B',
      byte: 23758
    },
    {
      name: 'RGB Mode R',
      short: 'RGB R',
      describe: '',
      code: 'RGB_M_R',
      byte: 23759
    },
    {
      name: 'RGB Mode SW',
      short: 'RGB SW',
      describe: '',
      code: 'RGB_M_SW',
      byte: 23760
    },
    {
      name: 'RGB Mode SN',
      short: 'RGB SN',
      describe: '',
      code: 'RGB_M_SN',
      byte: 23761
    },
    {
      name: 'RGB Mode K',
      short: 'RGB K',
      describe: '',
      code: 'RGB_M_K',
      byte: 23762
    },
    {
      name: 'RGB Mode X',
      short: 'RGB X',
      describe: '',
      code: 'RGB_M_X',
      byte: 23763
    },
    {
      name: 'RGB Mode G',
      short: 'RGB G',
      describe: '',
      code: 'RGB_M_G',
      byte: 23764
    }
    ],

    macro = [{
      name: 'MA0',
      describe: '',
      code: 'MACRO00',
      byte: 24338
    },
    {
      name: 'MA1',
      describe: '',
      code: 'MACRO01',
      byte: 24339
    },
    {
      name: 'MA2',
      describe: '',
      code: 'MACRO02',
      byte: 24340
    },
    {
      name: 'MA3',
      describe: '',
      code: 'MACRO01',
      byte: 24341
    },
    {
      name: 'MA4',
      describe: '',
      code: 'MACRO01',
      byte: 24342
    },
    {
      name: 'MA5',
      describe: '',
      code: 'MACRO01',
      byte: 24343
    },
    {
      name: 'MA6',
      describe: '',
      code: 'MACRO01',
      byte: 24344
    },
    {
      name: 'MA7',
      describe: '',
      code: 'MACRO01',
      byte: 24345
    },
    {
      name: 'MA8',
      describe: '',
      code: 'MACRO01',
      byte: 24346
    },
    {
      name: 'MA9',
      describe: '',
      code: 'MACRO01',
      byte: 24347
    },
    {
      name: 'MA10',
      describe: '',
      code: 'MACRO01',
      byte: 24348
    },
    {
      name: 'MA11',
      describe: '',
      code: 'MACRO01',
      byte: 24349
    },
    {
      name: 'MA12',
      describe: '',
      code: 'MACRO01',
      byte: 24350
    },
    {
      name: 'MA13',
      describe: '',
      code: 'MACRO01',
      byte: 24351
    },
    {
      name: 'MA14',
      describe: '',
      code: 'MACRO01',
      byte: 24352
    },
    {
      name: 'MA15',
      describe: '',
      code: 'MACRO01',
      byte: 24353
    }
    ],

    hyper = [{
      name: '=',
      describe: '',
      code: 'KC_PEQL',
      byte: 103
    },
    {
      name: ',',
      describe: '',
      code: 'KC_PCMM',
      byte: 133
    },
    {
      name: '~',
      describe: '',
      code: 'KC_TILD',
      byte: 565
    },
    {
      name: '!',
      describe: '',
      code: 'KC_EXLM',
      byte: 542
    },
    {
      name: '@',
      describe: '',
      code: 'KC_AT',
      byte: 543
    },
    {
      name: '#',
      describe: '',
      code: 'KC_HASH',
      byte: 544
    },
    {
      name: '$',
      describe: '',
      code: 'KC_DLR',
      byte: 545
    },
    {
      name: '%',
      describe: '',
      code: 'KC_PERC',
      byte: 546
    },
    {
      name: '^',
      describe: '',
      code: 'KC_CIRC',
      byte: 547
    },
    {
      name: '&',
      describe: '',
      code: 'KC_AMPR',
      byte: 548
    },
    {
      name: '*',
      describe: '',
      code: 'KC_ASTR',
      byte: 549
    },
    {
      name: '(',
      describe: '',
      code: 'KC_LPRN',
      byte: 550
    },
    {
      name: ')',
      describe: '',
      code: 'KC_RPRN',
      byte: 551
    },
    {
      name: '_',
      describe: '',
      code: 'KC_UNDS',
      byte: 557
    },
    {
      name: '+',
      describe: '',
      code: 'KC_PLUS',
      byte: 558
    },
    {
      name: '{',
      describe: '',
      code: 'KC_LCBR',
      byte: 559
    },
    {
      name: '}',
      describe: '',
      code: 'KC_RCBR',
      byte: 560
    },
    {
      name: '<',
      describe: '',
      code: 'KC_LT',
      byte: 566
    },
    {
      name: '>',
      describe: '',
      code: 'KC_GT',
      byte: 567
    },
    {
      name: ':',
      describe: '',
      code: 'KC_COLN',
      byte: 563
    },
    {
      name: '|',
      describe: '',
      code: 'KC_PIPE',
      byte: 561
    },
    {
      name: '?',
      describe: '',
      code: 'KC_QUES',
      byte: 568
    },
    {
      name: '"',
      describe: '',
      code: 'KC_DQUO',
      byte: 564
    },
    {
      name: 'NUHS',
      describe: '',
      code: 'KC_NUHS',
      byte: 50
    },
    {
      name: 'NUBS',
      describe: '',
      code: 'KC_NUBS',
      byte: 100
    },
    {
      name: 'Ro',
      describe: '',
      code: 'KC_RO',
      byte: 135
    },
    {
      name: '¥',
      describe: '',
      code: 'KC_JYEN',
      byte: 137
    },
    {
      name: '無変換',
      describe: '',
      code: 'KC_MHEN',
      byte: 139
    },
    {
      name: '漢字',
      describe: '',
      code: 'KC_HANJ',
      byte: 145
    },
    {
      name: '한영',
      describe: '',
      code: 'KC_HAEN',
      byte: 144
    },
    {
      name: '変換',
      describe: '',
      code: 'KC_HENK',
      byte: 138
    },
    {
      name: 'かな',
      describe: '',
      code: 'KC_KANA',
      byte: 136
    },
    {
      name: 'Reset',
      describe: '',
      code: 'RESET',
      byte: 23552
    },
    {
      name: 'Esc `',
      describe: '',
      code: 'KC_GESC',
      byte: 23574
    },
    {
      name: 'LC (',
      describe: '',
      code: 'KC_LCPO',
      byte: 23795
    },
    {
      name: 'RC )',
      describe: '',
      code: 'KC_RCPC',
      byte: 23796
    },
    {
      name: 'LS (',
      describe: '',
      code: 'KC_LSPO',
      byte: 23767
    },
    {
      name: 'RS )',
      describe: '',
      code: 'KC_RSPC',
      byte: 23768
    },
    {
      name: 'LA (',
      describe: '',
      code: 'KC_LAPO',
      byte: 23797
    },
    {
      name: 'RA )',
      describe: '',
      code: 'KC_RAPC',
      byte: 23798
    },
    {
      name: 'Shift<br/>Enter',
      describe: '',
      code: 'KC_SFTENT',
      byte: 23769
    },
    {
      name: 'NKRO',
      describe: '',
      code: 'MAGIC_TOGGLE_NKRO',
      byte: 23572
    },
    {
      name: 'F13',
      describe: '',
      code: 'KC_F13',
      byte: 104
    },
    {
      name: 'F14',
      describe: '',
      code: 'KC_F14',
      byte: 105
    },
    {
      name: 'F15',
      describe: '',
      code: 'KC_F15',
      byte: 106
    },
    {
      name: 'F16',
      describe: '',
      code: 'KC_F16',
      byte: 107
    },
    {
      name: 'F17',
      describe: '',
      code: 'KC_F17',
      byte: 108
    },
    {
      name: 'F18',
      describe: '',
      code: 'KC_F18',
      byte: 109
    },
    {
      name: 'F19',
      describe: '',
      code: 'KC_F19',
      byte: 110
    },
    {
      name: 'F20',
      describe: '',
      code: 'KC_F20',
      byte: 111
    },
    {
      name: 'F21',
      describe: '',
      code: 'KC_F21',
      byte: 112
    },
    {
      name: 'F22',
      describe: '',
      code: 'KC_F22',
      byte: 113
    },
    {
      name: 'F23',
      describe: '',
      code: 'KC_F23',
      byte: 114
    },
    {
      name: 'F24',
      describe: '',
      code: 'KC_F24',
      byte: 115
    },
    {
      name: 'Exec',
      describe: '',
      code: 'KC_EXECUTE',
      byte: 116
    },
    {
      name: 'Help',
      describe: '',
      code: 'KC_HELP',
      byte: 117
    },
    {
      name: 'Menu',
      describe: '',
      code: 'KC_MENU',
      byte: 118
    },
    {
      name: 'Select',
      describe: '',
      code: 'KC_SELECT',
      byte: 119
    },
    {
      name: 'Stop',
      describe: '',
      code: 'KC_STOP',
      byte: 120
    },
    {
      name: 'Again',
      describe: '',
      code: 'KC_AGAIN',
      byte: 121
    },
    {
      name: 'Undo',
      describe: '',
      code: 'KC_UNDO',
      byte: 122
    },
    {
      name: 'Cut',
      describe: '',
      code: 'KC_CUT',
      byte: 123
    },
    {
      name: 'Copy',
      describe: '',
      code: 'KC_COPY',
      byte: 124
    },
    {
      name: 'Paste',
      describe: '',
      code: 'KC_PASTE',
      byte: 125
    },
    {
      name: 'Find',
      describe: '',
      code: 'KC_FIND',
      byte: 126
    },
    {
      name: 'Locking Caps Lock',
      short: 'Lock<br/>Caps',
      describe: '',
      code: 'KC_LCAP',
      byte: 130
    },
    {
      name: 'Locking Num Lock',
      short: 'Lock<br/>Num',
      describe: '',
      code: 'KC_LNUM',
      byte: 131
    },
    {
      name: 'Locking Scroll Lock',
      short: 'Lock<br/>Scroll',
      describe: '',
      code: 'KC_LSCR',
      byte: 132
    },
    {
      name: 'Power<br/>OSX',
      describe: '',
      code: 'KC_POWER',
      byte: 102
    },
    {
      name: 'Power',
      describe: '',
      code: 'KC_PWR',
      byte: 165
    },
    {
      name: 'Sleep',
      describe: '',
      code: 'KC_SLEP',
      byte: 166
    },
    {
      name: 'Wake',
      describe: '',
      code: 'KC_WAKE',
      byte: 167
    },
    {
      name: 'Mail',
      describe: '',
      code: 'KC_MAIL',
      byte: 177
    },
    {
      name: 'Calc',
      describe: '',
      code: 'KC_CALC',
      byte: 178
    },
    {
      name: 'My<br/>Comp',
      describe: '',
      code: 'KC_MYCM',
      byte: 179
    },
    {
      name: 'Mouse ↑',
      short: 'MS ↑',
      describe: '',
      code: 'KC_MS_UP',
      byte: 240
    },
    {
      name: 'Mouse ↓',
      short: 'MS ↓',
      describe: '',
      code: 'KC_MS_DOWN',
      byte: 241
    },
    {
      name: 'Mouse ←',
      short: 'MS ←',
      describe: '',
      code: 'KC_MS_LEFT',
      byte: 242
    },
    {
      name: 'Mouse →',
      short: 'MS →',
      describe: '',
      code: 'KC_MS_RIGHT',
      byte: 243
    },
    {
      name: 'Mouse<br/>Btn1',
      describe: '',
      code: 'KC_MS_BTN1',
      byte: 244
    },
    {
      name: 'Mouse<br/>Btn2',
      describe: '',
      code: 'KC_MS_BTN2',
      byte: 245
    },
    {
      name: 'Mouse<br/>Btn3',
      describe: '',
      code: 'KC_MS_BTN3',
      byte: 246
    },
    {
      name: 'Mouse<br/>Btn4',
      describe: '',
      code: 'KC_MS_BTN4',
      byte: 247
    },
    {
      name: 'Mouse<br/>Btn5',
      describe: '',
      code: 'KC_MS_BTN5',
      byte: 248
    },
    {
      name: 'Mouse<br/>WH↑',
      describe: '',
      code: 'KC_MS_WH_UP',
      byte: 249
    },
    {
      name: 'Mouse<br/>WH↓',
      describe: '',
      code: 'KC_MS_WH_DOWN',
      byte: 250
    },
    {
      name: 'Mouse<br/>WH←',
      describe: '',
      code: 'KC_MS_WH_LEFT',
      byte: 251
    },
    {
      name: 'Mouse<br/>WH→',
      describe: '',
      code: 'KC_MS_WH_RIGHT',
      byte: 252
    },
    {
      name: 'Mouse<br/>Acc0',
      describe: '',
      code: 'KC_MS_ACCEL0',
      byte: 253
    },
    {
      name: 'Mouse<br/>Acc1',
      describe: '',
      code: 'KC_MS_ACCEL1',
      byte: 254
    },
    {
      name: 'Mouse<br/>Acc2',
      describe: '',
      code: 'KC_MS_ACCEL2',
      byte: 255
    }
    ],
    ble = [{
      name: 'BLE0',
      describe: '',
      code: 'KC_BLE_0',
      byte: 32768
    },
    {
      name: 'BLE1',
      describe: '',
      code: 'KC_BLE_1',
      byte: 32769
    },
    {
      name: 'BLE2',
      describe: '',
      code: 'KC_BLE_2',
      byte: 32770
    },
    {
      name: 'BLE<br/>Reset',
      describe: '',
      code: 'KC_BLE_RESET',
      byte: 33023
    }
    ]
  p_carry.keycodesList = basic
  p_carry.mediaKeycodes = media
  p_carry.layerKeycodes = layer
  p_carry.lightKeycodes = rgb
  p_carry.macroKeycodes = macro
  p_carry.hyperKeycodes = hyper
  p_carry.bluetoothKeycodes = ble
}
