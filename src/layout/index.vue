<template>
  <div class="app-wrapper">
    <Slidebar class="sidebar-container"></Slidebar>
    <div class="main-container">

    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
export default {
  components: {
    Sidebar,
    AppMain,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
