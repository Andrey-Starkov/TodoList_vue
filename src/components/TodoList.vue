<template>
  <body>
  <div class="head">
    <h1>Список дел </h1>
    <input v-model="newvalue" type="text" placeholder="Введите новое дело..."><button v-on:click="add" id="button">Сохранить</button>
  </div>

  <div class="todoList">
    <ul>
      <ListValue
          v-for="todo of todos" :key="todo.id"
          v-bind:todo="todo"
      v-on:remove-todo="remove"/>
    </ul>
  </div>

  </body>
</template>

<script>
import ListValue from "@/components/ListValue";
export default {
  data(){
    return {
    newvalue: '',
    filter:"all"}
  },

  props: ['todos'],
  name: "TodoList",
  components: {ListValue},

  methods:{
    remove(id){
      this.$emit('removeTodo',id)
    },
    add(){
      const newTodo = {
        id : Date.now(),
        name : this.newvalue,
        IsDone: false
      }
      let name= JSON.stringify(this.todos).slice(0,JSON.stringify(this.todos).length-1)+','+JSON.stringify(newTodo) + "]"
      //console.log(JSON.parse(name))
      localStorage.setItem("228",name)
      this.$emit("add-Todo",newTodo)
    },

  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  background: #3fb984;
  color : #ffffff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todoList{
  padding: 10px;
  FLOAT : left;
  width: 50%;
}
ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>