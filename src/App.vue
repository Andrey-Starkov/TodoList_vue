<template>
  <div class="template">
  <TodoList v-bind:todos="filteredTodos"
  v-on:removeTodo="remove1"
  v-on:add-Todo="add1"/>
  <div class="filter">
    <a id="all" href="javascript:void(0);" v-on:click="all">Все</a>
    <a id="not_complete" href="javascript:void(0);" v-on:click="not_complete">Невыполенные</a>
    <a id="complete" href="javascript:void(0);" v-on:click="complete">Выполненные</a>
  </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: 'App',
  data(){
    return{
 //     todos: [
 //       {id : 1, name : "Hello World", IsDone: false},
 //       {id : 2, name : "Hello Mir", IsDone: false},
 //       {id : 3, name : "Hello Firamir", IsDone: false}
 //     ],
      todos : JSON.parse(localStorage.getItem("228")),
      filter: "all"
      }
  },
  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    filteredTodos() {
      if (this.filter === 'all') {
        console.log(this.todos)
        return this.todos
      }
      if (this.filter === 'complete') {
        console.log(this.todos.filter(t => t.IsDone))
        return this.todos.filter(t => t.IsDone)
      }
      if (this.filter === "not_complete") {
        console.log(this.todos.filter(t => !t.IsDone))
        return this.todos.filter(t => !t.IsDone)
      }
  },
  },
  methods: {
    remove1(id){
      this.todos = this.todos.filter(t => t.id !== id)
      //console.log(JSON.stringify(this.todos.id))
    },
    add1(newTodo){
      this.todos.push(newTodo)
    },
    all(){
      this.filter="all"
    },
    not_complete(){
      this.filter="not_complete"
    },
    complete(){
      this.filter="complete"
    }
  },
  watch: {
    todos(value){
      localStorage.setItem("228",JSON.stringify(value))
    }
  },
  components: {
      TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.template {
  background: #3fb984;
}
.filter{
  padding-bottom: 29%;
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin-left: 100vh;
}
html{
  background: #3fb984;
  margin: 0;
  padding: 0;
}
</style>
