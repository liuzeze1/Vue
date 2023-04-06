<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ totalDone }}</span> / 全部{{ total }}</span
    >
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todos", "checkALLTodo", "clearAllTodo"],
  computed: {
    isAll: {
      get() {
        return this.total === this.totalDone && this.total > 0;
      },
      set(value) {
        this.checkALLTodo(value);
      },
    },
    total() {
      return this.todos.length;
    },
    totalDone() {
      // let num = 0;
      // for (let i = 0; i < this.todos.length; i++) {
      //   if (this.todos[i].done === true) {
      //     num++;
      //   }
      // }
      // return num;
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
  },
  methods: {
    clearAll() {
      if (confirm("确定删除已勾选内容吗？")) {
        this.clearAllTodo();
      }
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
