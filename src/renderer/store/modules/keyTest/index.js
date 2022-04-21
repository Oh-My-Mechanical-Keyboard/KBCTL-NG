import keys from 'lodash/keys';
import isUndefined from 'lodash/isUndefined'
import Vue from 'vue';
import layouts from './layouts';

function getDefaultLayout() {
  const userLang = 'zh_CN';
  let layout = 'ANSI';
  if (userLang.toLowerCase().indexOf('en') < 0) {
    layout = 'ISO';
  }
  return layout;
}

function mapKeymap(arr) {
  // Create look up table for QMK Code to Layout position
  return arr.reduce((pre, cur) => {
    pre[cur['code']] = {'key_code' : cur['key_code'],
                            'qmk_code' : cur['qmk_code'],
                            'active' : false}
    return pre
  }, {})
}

const state = {
  layout: 'ANSI',
  keymap: {
    ANSI: mapKeymap(layouts.ANSI.keys),
    ISO: mapKeymap(layouts.ISO.keys)
  },
  layouts: {
    ANSI: layouts.ANSI,
    ISO: layouts.ISO
  }
};

const getters = {
  availableLayouts(state) {
    return keys(state.layouts).sort();
  },
  getQMKCode(state) {
    return (code) => {
      if (isUndefined(code)) {
        return 'KC_NONE';
      }
      return state.keymap[state.layout][code].qmk_code;
    };
  },
  activeKeymap(state) {
    return state.keymap[state.layout];
  },
  activeLayout(state) {
    return state.layouts[state.layout];
  }
};



const actions = {
  activeOneKey({ commit }, code) {
    commit('setActive', code);
  },
  detectOneKey({ commit }, code) {
    commit('setDetected', code);
  }
};

const mutations = {
  setLayout(state, layout) {
    state.layout = layout;
  },
  setKeymap(state, keymap) {
    state.keymap = keymap;
  },
  setActive(state, code) {
    Vue.set(state.keymap[state.layout][code], 'active', true);
  },
  setDetected(state, code) {
    Vue.set(state.keymap[state.layout][code], 'active', false);
  },
  reset(state) {
    state.keymap[state.layout].forEach((v, idx) => {
      Vue.set(state.keymap[state.layout][idx], 'active', false);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};