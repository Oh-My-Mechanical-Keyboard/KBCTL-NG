<template>
  <div class="keycode-bar">
    <p>keycode</p>
    <div id="keycodes">
      <div class="tabs">
        <span
          class="tab"
          :class="classes(index)"
          v-for="(key, index) in keycodeTypes"
          :key="index"
          @click="changeActive(index)"
          :title="key"
          >{{ key }}</span>
      </div>
      <div class="tab-area">
        <template v-for="(key, index) in activeTypeKeycodes">
          <keycode
            v-bind="key"
            :key="index"
            :class="filterClass(key)"
            @mouseenter="message(key)"
          ></keycode>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import isUndefined from 'lodash/isUndefined';
import debounce from 'lodash/debounce';
import allKeycodesInfo from '#/model/keycodes'
import Keycode from './Keycode.vue'

export default {
  components: { Keycode },
  name: "keycodeBar",
  data() {
    return {
      active: 0,
      keyMsg: ""
    }
  },
  methods: {
    classes(current) {
      let classes = [];
      if (current === this.active) {
        classes.push('active');
      }
      return classes.join(' ');
    },
    changeActive(index) {
      this.active = index
    },
    filterClass(key) {
      return '';
      // return 'desaturated';
    },
    message(key) {
      let msg = '';
      if (isUndefined(key.code)) {
        msg = key.name ? key.name : '';
      } else {
        msg = key.name ? `${key.name} - ${key.describe}` : key.code;
      }
      this.keyMsg = msg
    }
  },
  computed: {
    keycodeTypes() {
      return allKeycodesInfo.keycodeTypeName
    },
    activeTypeKeycodes() {
      return allKeycodesInfo.allKeycodes[this.active]
    }
  }
};
</script>

<style scoped>
.keycode-bar {
  background-color: rgb(180, 90, 90);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 7px;
  display: inline-block;
}
.tab {
  background: #fff;
  border-color: #ccc;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  padding: 2px;
  margin-right: 2px;
  border-radius: 4px 4px 0 0;
  display: inline-block;
  opacity: 0.55;
  z-index: 100;
  cursor: pointer;
  margin-bottom: -1px;
  margin-left: 20px;
}
.tab.active {
  opacity: 1;
}
.desaturated {
  opacity: 0.3;
}
</style>
