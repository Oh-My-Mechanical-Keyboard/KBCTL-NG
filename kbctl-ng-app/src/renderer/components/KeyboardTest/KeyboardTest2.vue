<template>
  <div class="keyboard-test">
    <h2 class="title">Keyboard Test</h2>
    <div class="keyboard">
      <div class="keyboard-wrap">
        <div class="keyboard-keys" :style="{ height: `${ansi108.height * unit}px`, width: `${ansi108.width * unit}px` }">
          <div
            class="key"
            :class="{ active: Math.random() > 0.85 }"
            v-for="(key, i) in ansi108.keys"
            :key="`${i}`"
            :style="{ top: `${key.top * unit}px`, left: `${key.left * unit}px`, width: `${key.width * unit}px`, height: `${key.height * unit}px` }"
          >
            <span v-for="label in key.code" class="label">{{ label }}</span>
          </div>
        </div>
      </div>
      <div class="reset">
        <button>RESET</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ansi108 } from './layout108'
export default {
  name: 'keyboard-test',
  data() {
    return {
      electron: process.versions.electron,
      unit: 50,
      ansi108,
    };
  },
};
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
  border: 2px solid #111;
  border-radius: 7px;
  background-color: #333;
  color: #fff;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.key.active {
  background-color: #aaa;
  color: #333;
}
.label {
  height: 16px;
  line-height: 16px;
  display: block;
}
</style>
