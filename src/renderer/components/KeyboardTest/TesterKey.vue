<template>
  <!-- prettier-ignore -->
  <div
    :id="myid"
    class="key tester-key"
    :class="localClasses"
    :title="displayName"
  >{{ displayName }}</div>
</template>
<script>
export default {
  name: 'tester-key',
  data() {
    return {
      layer: 1,
      id: 1,
      name: "Esc",
      code: 1,
      myclasses: ""
    }
  },
  computed: {
    myid() {
      return `key-${this.layer}-${this.id}`;
    },
    displayName() {
      return this.formatName(this.name);
    },
    localClasses() {
      const classes = ["active"];
      return `${this.myclasses} ${classes.join(' ')}`;
    }
  },
  methods: {
    formatName(name) {
      return name;
    }
  }
};
</script>
