<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <Navbar></Navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import { mapGetters } from 'vuex'
export default {
  components: {
    Sidebar,
    AppMain,
    Navbar
  },
  computed: {
    ...mapGetters(['sidebar']),
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
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
