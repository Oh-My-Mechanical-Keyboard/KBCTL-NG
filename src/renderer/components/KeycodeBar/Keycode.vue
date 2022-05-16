<template>
  <div class="keycode">{{ displayName }}</div>
</template>
<script>

export default {
  name: 'keycode',
  props: {
    name: String,
    describe: String,
    code: String,
    byte: Number
  },
  data() {
    return {
      crt: undefined
    };
  },
  computed: {
    displayName() {
      return this.name.split(/<br\/>/).join(" ")
    }
  }
};
</script>

<style scoped>
.keycode {
  width: 40px;
  height: 40px;
  margin: 0px 5px 5px 0px;
  border: 1px solid;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  float: left;
  font-family: 'Roboto', sans-serif;
  font-size: 70%;
  line-height: 11px;
  padding: 1px;
  position: relative;

  background: #0c0c0c;
  color: white;
  border-color: #0e0e0e;
}
</style>