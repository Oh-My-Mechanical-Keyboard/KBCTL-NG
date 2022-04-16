import keys from 'lodash/keys';
import isUndefined from 'lodash/isUndefined'
import Vue from 'vue';
import layouts from './layouts';


function reduce2codeIndex(arr) {
  // Create look up table for Browser Code to Layout position
  return arr.reduce((acc, code, idx) => {
    acc[code] = idx;
    return acc;
  }, {});
}

const codeToPosition = {
  ANSI: reduce2codeIndex(layouts.ANSI),
  ISO: reduce2codeIndex(layouts.ISO)
};

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
  return arr.map((code) => {
    const meta = store.getters['keycodes/lookupKeycode'](code);
    return {
      ...meta
    };
  });
}

const actions = {
  init({ state, commit }) {
    const store = this;
    commit('setKeymap', {
      ANSI: mapKeymap(store, qmkToPos.ANSI),
      ISO: mapKeymap(store, qmkToPos.ISO)
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
  setActive(state, { pos }) {
    Vue.set(state.keymap[state.layout][pos], 'active', true);
    Vue.set(state.keymap[state.layout][pos], 'detected', false);
  },
  setDetected(state, { pos }) {
    Vue.set(state.keymap[state.layout][pos], 'active', false);
    Vue.set(state.keymap[state.layout][pos], 'detected', true);
  },
  reset(state) {
    state.keymap[state.layout].forEach((v, idx) => {
      Vue.set(state.keymap[state.layout][idx], 'detected', false);
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