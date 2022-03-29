<template>
  <div class="template">


    <div class="head">
      <h1>Список дел </h1>
      <input v-model="newvalue" type="text" placeholder="Введите новое дело..."><button v-on:click="add" id="button">Сохранить</button>
    </div>
    <ul>
  <TodoList
      v-for="todo of filteredTodos" :key="todo.id"
      v-bind:todo="todo"
      v-on:removeTodo="remove"/>
    </ul>






  <div class="filter">
    <a id="all" @click.prevent="all">Все</a>
    <a id="not_complete" @click.prevent="complete">Невыполенные</a>
    <a id="complete" @click.prevent="not_complete">Выполненные</a>
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
        console.log(this.todos.filter(t => !t.IsDone))
        return this.todos.filter(t => !t.IsDone)
      }
      if (this.filter === "not_complete") {
        console.log(this.todos.filter(t => t.IsDone))
        return this.todos.filter(t => t.IsDone)
      }
  },
  },
  methods: {
    add() {
      const newTodo = {
        id: Date.now(),
        name: this.newvalue,
        IsDone: false
      }
      let name= JSON.stringify(this.todos).slice(0,JSON.stringify(this.todos).length-1)+','+JSON.stringify(newTodo) + "]"
      localStorage.setItem("228",name)
      this.todos.push(newTodo)
    },
    remove(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    all(){
      this.filter="all"
    },
    not_complete(){
      this.filter="not_complete"
    },
    complete(){
      this.filter="complete"
    },
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
ul{
    margin-left: 30vw;

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
