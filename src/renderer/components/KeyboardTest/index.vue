<template>
  <div class="keyboard-test">
    <h2 class="title">Keyboard Test</h2>
    <div class="keyboard">
      <div class="keyboard-wrap">
        <div class="keyboard-keys" :style="{ width: `${layout.w * unit}px`, height: `${layout.h * unit}px` }">
          <div
            v-for="(key, i) in layout.keys"
            :key="`${i}`"
          >
            <tester-key
              :unit = unit,
              :x = key.x,
              :y = key.y,
              :w = key.w,
              :h = key.h,
              :x2 = key.x2,
              :y2 = key.y2,
              :w2 = key.w2,
              :h2 = key.h2,
              :extra = key.extra,
              :code = key.code,
              :label = key.label
            >
            </tester-key>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kleAnsi108 from './kle-json/ansi108.json'
import kleAnsi108BigAss from './kle-json/ansi108-big-ass.json'
import kleIso108 from './kle-json/iso108.json'
import { formatKleJson } from './kle-formatter'
import TesterKey from './TesterKey.vue'
export default {
  name: 'keyboardTest',
  components: { TesterKey },
  data () {
    return {
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
  async mounted() {
    this.createKeyListeners()
  },
  methods: {
    switchLayout (val) {
      if (val !== this.activeLayout) {
        this.activeLayout = val
      }
    },
    createKeyListeners() {
      document.addEventListener('keydown', this.keydown)
      document.addEventListener('keyup', this.keyup)
    },
    keyup(event) {
      console.log("keyup")
      console.log(event)
      var x = document.getElementsByClassName("key")
    },
    keydown(event) {
      console.log("keydown")
      console.log(event)
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
