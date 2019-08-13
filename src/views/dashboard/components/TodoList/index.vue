<template>
  <section class="todoapp" id="todoapp">
    <!-- header -->
    <header class="header">
      <i class="el-icon-arrow-down check-all" :class="{'checked':isAllChecked}" @click="checkAllItem"></i>
      <input class="new-todo" v-model="todoItem" placeholder="Todo List" autocomplete="off" @keydown.enter="addTodo">
    </header>
    <!-- main section -->
    <section class="main">
      <el-checkbox-group v-model="checkList" @change="checkListChange">
        <div class="itmes">
          <transition-group type="transition" name="fade">
            <div v-for="(item,index) in todoList" :key="item+'_'+index" class="todo-item">
              <el-checkbox :label="item" class="item-checkbox">
              </el-checkbox>
              <i class="el-icon-close" @click="deleteTodoItem(item)"></i>
            </div>
          </transition-group>
        </div>
      </el-checkbox-group>
    </section>
    <footer class="footer">

    </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isAllChecked: false,
      todoItem: '',
      todoList: ['webpack', 'js', 'vue'],
      checkList: []
    }
  },
  methods: {
    addTodo () {
      this.isAllChecked = false
      this.todoList.push(this.todoItem)
      this.todoItem = ''
    },
    checkAllItem () {
      this.isAllChecked = !this.isAllChecked
      if (this.isAllChecked) {
        this.checkList = JSON.parse(JSON.stringify(this.todoList))
      } else {
        this.checkList = []
      }
    },
    checkListChange (val) {
      this.checkList = val
      if (val.length === this.todoList.length) {
        this.isAllChecked = true
      } else {
        this.isAllChecked = false
      }
    },
    deleteTodoItem (item) {
      console.log('======')
      let index1 = this.todoList.indexOf(item)
      let index2 = this.checkList.indexOf(item)
      this.todoList.splice(index1, 1)
      if (index2 > -1) {
        this.checkList.splice(index2, 1)
      }
      if (this.todoList.length === this.checkList.length) {
        this.isAllChecked = true
      } else {
        this.isAllChecked = false
      }
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
