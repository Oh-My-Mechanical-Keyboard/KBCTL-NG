<template>
  <div class="keyboard-test">
    <h2 class="title">Keyboard Test</h2>
    <div class="keyboard">
      <div class="keyboard-wrap">
        <div class="keyboard-keys" :style="{ width: `${layout.w * unit}px`, height: `${layout.h * unit}px` }">
          <div
            v-for="(key, i) in layout.keys"
            :key="`${i}`"
            :class="['key', { active: Math.random() > 0.85 }]"
            :style="{
              left: `${key.x * unit + 2}px`,
              top: `${key.y * unit + 2}px`,
              width: `${key.w * unit - 4}px`,
              height: `${key.h * unit - 4}px`,
              '--x2': key.extra && `${key.x2 * unit}px`,
              '--y2': key.extra && `${key.y2 * unit}px`,
              '--w2': key.extra && `${key.w2 * unit - 4}px`,
              '--h2': key.extra && `${key.h2 * unit - 4}px`,
            }"
            :data-extra="key.extra"
          >
            <span v-for="label in key.code" class="label">{{ label }}</span>
          </div>
        </div>
      </div>
      <div class="reset">
        <button>RESET</button>
      </div>
      <div class="layouts">
        <button @click="switchLayout('ansi108')">ANSI 108</button>
        <button @click="switchLayout('ansi108BigAss')">ANSI 108 Big Ass</button>
        <button @click="switchLayout('iso108')">ISO 108</button>
      </div>
    </div>
  </div>
</template>

<script>
import kleAnsi108 from './kle-json/ansi108.json'
import kleAnsi108BigAss from './kle-json/ansi108-big-ass.json'
import kleIso108 from './kle-json/iso108.json'
import { formatKleJson } from './kle-formatter'
export default {
  name: 'keyboard-test',
  data () {
    return {
      electron: process.versions.electron,
      unit: 50,
      layouts: {
        ansi108: formatKleJson(kleAnsi108),
        ansi108BigAss: formatKleJson(kleAnsi108BigAss),
        iso108: formatKleJson(kleIso108)
      },
      activeLayout: 'ansi108'
    }
  },
  computed: {
    layout () {
      return this.layouts[this.activeLayout]
    }
  },
  methods: {
    switchLayout (val) {
      if (val !== this.activeLayout) {
        this.activeLayout = val
      }
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
.key {
  position: absolute;
  z-index: 10;
  border-radius: 7px;
  background-color: #333;
  color: #fff;
  text-align: center;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.key[data-extra]:after {
  content: '';
  position: absolute;
  top: var(--y2);
  left: var(--x2);
  width: var(--w2);
  height: var(--h2);
  z-index: -5;
  display: block;
  border-radius: 7px;
  background-color: #333;
  box-sizing: border-box;
}
.key.active, .key.active[data-extra]:after {
  background-color: #aaa;
  color: #333;
}
.label {
  /* height: 16px; */
  line-height: 16px;
  display: block;
  min-width: 1px;
  min-height: 16px;
}
</style>
