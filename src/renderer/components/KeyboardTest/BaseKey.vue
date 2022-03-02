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
    :data-extra="key.extra"
  >
    <span class="label">{{ label }}</span>
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
    'extra',
    'code',
    'label'
  ],
  computed: {
    keyClass() {
      let classes = []
      classes.push('active')
      return classes.join(' ');
    }
  },
  data() {
    return {
      
    };
  }
};
</script>

<style>

</style>
