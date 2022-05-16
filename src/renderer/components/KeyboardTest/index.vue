<template>
  <div class="keyboard-test">
    <h2 class="title">Keyboard Test</h2>
    <div class="keyboard">
      <div class="keyboard-wrap">
        <div class="keyboard-keys" :style="{ width: `${layouts[layout].ex * unit}px`, height: `${layouts[layout].ey * unit}px` }">
          <base-key
            v-for="key in testerLayer"
            ref = "key.code"
            :key = "key.id"
            :unit = "unit"
            :x = "key.x"
            :y = "key.y"
            :w = "key.w"
            :h = "key.h"
            :x2 = "key.x2"
            :y2 = "key.y2"
            :w2 = "key.w2"
            :h2 = "key.h2"
            :extra = "key.extra"
            :code = "key.code"
            :labels = "key.labels"
            :meta = "key.meta"
          >
          </base-key>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BaseKey from './BaseKey.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import isUndefined from 'lodash/isUndefined'

export default {
  name: 'keyboardTest',
  components: { BaseKey },
  data () {
    return {
      unit: 50,
      timingKeyUp: {},
      timingKeyDown: {}
    }
  },
  computed: {
    ...mapGetters('keyTest', [
      'availableLayouts',
      'getQMKCode',
      'activeKeymap',
      'activeLayout'
    ]),
    ...mapState('keyTest', [
      'layouts',
      'keymap',
      'layout'
    ]),
    testerLayer() {
      const keymap = this.activeKeymap
      const curLayer = this.activeLayout.keys.map((cv, index) => {
        cv['meta'] = keymap[cv['code']]
        cv['id'] = index
        return cv
      })
      return curLayer;
    }
  },
  async mounted() {
    this.createKeyListeners()
  },
  beforeDestroy() {
    this.destroyKeyListeners();
  },
  methods: {
    ...mapActions('keyTest', [
      'activeOneKey',
      'detectOneKey'
    ]),
    ...mapMutations('keyTest', [
      'setActive',
      'setDetected',
      'setLayoutMeta'
    ]),
    switchLayout (val) {

    },
    createKeyListeners() {
      document.addEventListener('keydown', this.keydown)
      document.addEventListener('keyup', this.keyup)
    },
    destroyKeyListeners() {
      document.removeEventListener('keydown', this.keydown);
      document.removeEventListener('keyup', this.keyup);
    },
    keyup(event) {
      // 记录抬起的时间
      const endTS = performance.now();
      this.timingKeyUp[event.code] = endTS;
      const elapsedTime = this.getElapsedTime(event, endTS);
      const evStr = this.formatKeyEvent(event, elapsedTime);
      console.log(evStr)
      event.preventDefault();
      event.stopPropagation();
      this.setDetected(event.code);
    },
    keydown(event) {
      // 记录按下的时间
      this.timingKeyDown[event.code] = performance.now();
      event.preventDefault();
      event.stopPropagation();
      this.setActive(event.code);
    },
    getElapsedTime(ev, endTs) {
      return (endTs - this.timingKeyDown[ev.code]).toFixed(3);
    },
    formatKeyEvent(ev, time) {
      const msg = [];
      if (time) {
        msg.push(`in ${time}ms`);
      }
      msg.unshift(
        [
          'Event key:',
          this.greenMarkup(ev.key, 11),
          'Code:',
          this.greenMarkup(ev.code, 13),
          'KeyCode:',
          ev.keyCode
        ].join(' ')
      );
      return msg.join(' ');
    },
    greenMarkup(text, padlen) {
      return `<span class="log-green">${text.padEnd(padlen, ' ')}</span>`;
    }
  }
}
</script>

<style scoped>
.keyboard-test {
  background-color: #333;
}
.title {
  text-align: center;
  color: #fff;
  margin: auto;
}
.keyboard {
  padding: 20px;
}
.keyboard-wrap {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 7px;
  display: inline-block;
  background-color: #111;
}
.keyboard-keys {
  font-size: 12px;
  overflow: hidden;
  position: relative;
}
span.log-green {
  color: lightgreen;
}
</style>
