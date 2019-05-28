<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <!-- github -->
      <a class="github-corner"></a>
      <PanelGroup></PanelGroup>

      <el-row :gutter="8">
        <el-col :span="12" style="margin-bottom:30px">
          <transactoin-table></transactoin-table>
        </el-col>
        <el-col :span="6" style="margin-bottom:30px">

        </el-col>
        <el-col :span="6" style="margin-bottom:30px">

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import TransactoinTable from './components/TransactionTable'
export default {
  components: {
    PanelGroup,
    TransactoinTable
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  margin-top: 5px;
  .github-corner {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 78px 78px;
    border-style: solid;
    border-color: #40c9c6 #40c9c6 transparent transparent;
  }
}
</style>
