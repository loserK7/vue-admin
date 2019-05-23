<template>
  <div>
    <!-- 主页 -->
    主页
    <demo>
      <template slot-scope="scope">
        <div>
          {{scope.user.lastName}}
        </div>
      </template>
    </demo>
  </div>
</template>

<script>
import Demo from '@/components/demo'
export default {
  components: {
    Demo
  }
}
</script>

<style>
</style>
