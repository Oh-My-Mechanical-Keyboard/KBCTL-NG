<template>
  <div
    :class="['key',keyClass]"
    :style="{
      left: `${x * unit + 2}px`,
      top: `${y * unit + 2}px`,
      width: `${w * unit - 4}px`,
      height: `${h * unit - 4}px`,
      '--x2': extra && `${x2 * unit}px`,
      '--y2': extra && `${y2 * unit}px`,
      '--w2': extra && `${w2 * unit - 4}px`,
      '--h2': extra && `${h2 * unit - 4}px`,
    }"
    :data-extra="extra"
  >
    <span v-for="(label, i) in labels" class="label" :key="`${i}`">{{ label }}</span>
  </div>
</template>

<script>

export default {
  name: 'base-key',
  props: [
    'unit',
    'x',
    'y',
    'w',
    'h',
    'x2',
    'y2',
    'w2',
    'h2',
    'code',
    'labels',
    'extra',
    'meta'
  ],
  computed: {
    keyClass() {
      let classes = []
      if (this.meta.active) {
        classes.push('active');
      } else {
        classes.push('deactive')
      }
      return classes.join(' ');
    }
  },
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
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
