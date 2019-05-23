<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" @toggleClick="toggleClick"></Hamburger>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Hamburger
  },
  methods: {
    toggleClick () {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    height: 100%;
    float: left;
    line-height: 46px;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
