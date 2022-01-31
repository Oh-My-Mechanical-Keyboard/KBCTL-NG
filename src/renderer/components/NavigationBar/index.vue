<template>
  <div class="navigation-bar">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="navigation-link"
    >
      {{ route.label }}
    </router-link>
  </div>
</template>

<script>
import { routes } from '@/router/index'
export default {
  name: 'navigation-bar',
  data () {
    return {
      routes
    }
  }
}
</script>

<style scoped>
.navigation-bar {
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #222;
}
.navigation-link {
  margin-left: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #f0f0f0;
}
.router-link-active {
  color: #08f;
  position: relative;
}
.router-link-active:after {
  content: '';
  border-top: 2px solid currentColor;
  display: block;
  width: 100%;
  position: absolute;
  top: 100%;
}
</style>
