/* eslint-disable no-template-curly-in-string */
<template>
  <div class="customize-print-template" id="customizePrintTemplate">
    <blog-post>
      <template v-slot:header>
        <h1>About Me</h1>
      </template>
      <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>
      <template v-slot:footer>
        <p>Copyright 2016 Evan You</p>
      </template>
      <p>If I have some content down here, it will also be included in vm.$slots.default.</p>
    </blog-post>
    <div class="template-content">
      <div class="template-field-tree">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <el-tree class="filter-tree" :data="data" :props="defaultProps" @node-click="nodeClickHandler" default-expand-all :filter-node-method="filterNode" ref="tree">
        </el-tree>
      </div>
      <div id="editor">
      </div>
    </div>
    <div v-html="txtHtml">
    </div>
    <el-button @click="getEditorHtml">输出</el-button>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="30%" append-to-body class="component-dia">
      <el-checkbox-group v-model="checkedList">
        <draggable v-model="cities" group="label" v-bind="dragOptions" :move="onMove" @start="drag=true" @end="moveEnd">
          <transition-group type="transition">
            <div v-for="city in cities" :key="city.attr" class="select-item">
              <el-checkbox :label="city.attr">{{city.label}}</el-checkbox>
            </div>
          </transition-group>
        </draggable>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTable">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import draggable from 'vuedraggable'
import BlogPost from './blogPost'
const jsonData = require('./module.json')
export default {
  components: {
    draggable,
    BlogPost
  },
  mounted () {
    this.editor = new Editor('#editor')
    console.log(this.editor, this.jData)
    this.editor.create()
  },
  data () {
    return {
      editor: null,
      filterText: '',
      txtHtml: '',
      dialogVisible: false,
      checkedList: [],
      drag: false,
      jData: jsonData.data,
      labels: jsonData.labels,
      cities: [{
        label: '上海',
        attr: 'city'
      }, {
        label: '名字',
        attr: 'name'
      }, {
        label: '库存',
        attr: 'stock'
      }, {
        label: '标签',
        attr: 'label'
      }, {
        label: '数量',
        attr: 'num'
      }, {
        label: '价格',
        attr: 'price'
      }, {
        label: '税率',
        attr: 'tax'
      }],
      city1: '上海',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '表格',
              type: 'table'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    getEditorHtml () {
      let that = this
      let txtHtml = this.editor.txt.html()
      let tdItems = []
      console.log(txtHtml.match(/\$\{\w.*?\}/g))
      txtHtml = txtHtml.replace(/\$\{\w.*?\}/g, (variable) => {
        variable = variable.replace('${', '').replace('}', '')
        variable = variable.split('.')
        if (variable.length > 1) {
          variable = this.jData[0][variable[1]]
        } else {
          if (that.labels[variable[0]]) {
            tdItems.push(variable[0])
          }
          variable = that[variable] || that.labels[variable[0]] || ''
        }
        return variable
      })
      console.log(txtHtml, '------------------')
      console.log(tdItems, 'tdItems')
      tdItems = Array.from(new Set([...tdItems]))
      txtHtml = txtHtml.replace('</tbody>', (tb) => {
        let tdHtmls = ''
        this.jData.forEach(dataItem => {
          let tr = '<tr>'
          let td = ''
          tdItems.forEach(item => {
            td += '<td style="text-align:center;">' + dataItem[item] + '</td>'
            console.log(dataItem, 'dataItem', item, dataItem[item])
          })
          tr += td + '</tr>'
          tdHtmls += tr
        })
        return tdHtmls + tb
      })
      console.log(txtHtml)
      this.txtHtml = txtHtml
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    nodeClickHandler (data, node) {
      if (node.isLeaf) {
        if (data.type === 'table') {
          this.dialogVisible = true
        } else {
          this.editor.txt.append('<span>${asdadasd}</span>')
        }
      }
      console.log(data, node)
    },
    addTable () {
      this.labelSort()
      let tableHtml = '<table border="1" width="100%" cellpadding="1" cellspacing="1" class="template-table"><tbody>'
      let tablebody = ''
      let ths = ''
      this.checkedList.forEach(item => {
        ths += '<th>${' + item + '}</th>'
      })
      tablebody += '<tr>' + ths + '</tr>'
      tableHtml += tablebody + '</tbody></table>'
      this.editor.txt.append(tableHtml)
    },
    changeCheckedList (val) {
      console.log(val)
      this.checkedList = val
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    labelSort () {
      let list = []
      this.cities.forEach(item => {
        if (this.checkedList.indexOf(item.attr) > -1) {
          list.push(item.attr)
        }
      })
      console.log(this.cities, 'this.cities')
      this.checkedList = []
      this.checkedList = list
    },
    moveEnd () {
      this.drag = false
      this.labelSort()
    }
  }

}
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
.ghost {
  opacity: 0.5;
  background: #ccc;
}
#customize-print-template {
  height: 100%;
}
.template-table {
  border: 1px solid #ccc;
  th,
  td {
    padding: 10px 0;
    border: 1px solid #ccc;
  }
}
.component-dia {
  .el-checkbox-group {
    overflow: hidden;
    .select-item {
      margin: 5px;
      float: left;
    }
  }
}
.template-content {
  display: flex;
  padding: 0 10px;
  overflow: auto;
  .template-field-tree {
    flex: 0 0 200px;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 10px;
    height: calc(100vh - 150px);
    border-right: 1px solid #ccc;
    overflow: auto;
  }
  #editor {
    flex: 1;
    .w-e-text {
      overflow-y: auto;
    }
    .w-e-text-container {
      z-index: 1000 !important;
    }
  }
}
</style>
