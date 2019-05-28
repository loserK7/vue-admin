<template>
  <div>
    <slot :user="user">
      {{user.firstName}}aaaaaaaaaaaaaa
    </slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        firstName: 'a',
        lastName: 'b'
      }
    }
  }
}
</script>

<style>
</style>
