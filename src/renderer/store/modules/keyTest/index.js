import keys from 'lodash/keys';
import isUndefined from 'lodash/isUndefined'
import Vue from 'vue';
import layouts from './layouts';

function getDefaultLayout() {
  const userLang = navigator.language || navigator.userLanguage;
  let layout = 'ANSI';
  if (userLang.toLowerCase().indexOf('en') < 0) {
    layout = 'ISO';
  }
  return layout;
}

const state = {
  layout: getDefaultLayout(),
  keymap: {},
  layouts: {
    ISO: layouts.ISO,
    ANSI: layouts.ANSI
  }
};

const getters = {
  availableLayouts(state) {
    return keys(state.layouts).sort();
  },
  getQMKCode(state) {
    return (code) => {
      if (isUndefined(code)) {
        return '';
      }
      return state.keymap[state.layout][code].qmk_code;
    };
  },
  activeKeymap(state) {
    return state.keymap[state.layout];
  },
  activeLayoutMeta(state) {
    return state.layouts[state.layout];
  },
  codeToPosition(state) {
    return state.codeToPosition[state.layout];
  }
};

function mapKeymap(store, arr) {
  // Create look up table for QMK Code to Layout position
  return kk.reduce((pre, cur) => {
    pre[cur['key_code']] = {'code' : cur['code'],
                            'qmk_code' : cur['qmk_code'],
                            'active' : false}
    return pre
  }, {})
}

const actions = {
  init({ state, commit }) {
    const store = this;
    commit('setKeymap', {
      ANSI: mapKeymap(store, layouts.ANSI.keys),
      ISO: mapKeymap(store, layouts.ISO.keys)
    });
    return state.keymap;
  }
};

const mutations = {
  setLayout(state, layout) {
    state.layout = layout;
  },
  setKeymap(state, keymap) {
    state.keymap = keymap;
  },
  setActive(state, { keyCode }) {
    Vue.set(state.keymap[state.layout][keyCode], 'active', true);
  },
  setDetected(state, { keyCode }) {
    Vue.set(state.keymap[state.layout][keyCode], 'active', false);
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