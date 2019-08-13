<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard directly" name="directly">
        <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button type="primary" icon="document" @click="handleCopy(inputData,$event)">
          Copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="use clipboard by v-directive" name="v-directive">
        <el-input v-model="cutData" placeholder="Please input" style="width:400px;max-width:100%;" />
        <el-button type="primary" icon="document" v-clipboard:copy="cutData" v-clipboard:success="clipboardSuccess">
          Copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from '@/utils/clipboard'
import clipboard from '@/directive/clipboard/index.js' // use clipboard by v-directive

export default {
  name: 'ClipboardDemo',
  directives: {
    clipboard
  },
  data () {
    return {
      activeName: 'directly',
      inputData: 'https://github.com/PanJiaChen/vue-element-admin',
      cutData: 'cut demo'
    }
  },
  methods: {
    handleCopy (text, event) {
      clip.copy(text, event)
    },
    clipboardSuccess () {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style>
</style>
