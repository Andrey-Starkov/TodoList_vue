<template>
  <div class="template">

    <div class="head">
      <h1>Список дел </h1>

        <input id="input" v-model="newvalue" v-on:keyup.enter="add" type="text" placeholder="Введите новое дело..."><button v-on:click="add" id="first">Сохранить</button>

    </div>
    <div class="AAA">
      <ul>
        <TodoList
          v-for="todo of allToDos" :key="todo.id"
          v-bind:todo="todo"
          v-on:removeTodo="remove"/>
      </ul>
    </div>
  <div class="filter">
    <a id="all" @click.prevent="all">Все</a>
    <a id="not_complete" @click.prevent="complete">Невыполенные</a>
    <a id="complete" @click.prevent="not_complete">Выполненные</a>
  </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import {mapMutations,mapGetters} from 'vuex';
export default {
  name: 'App',
  computed: mapGetters(['allToDos','GetFilter']),
  methods: mapMutations(["remove","all","not_complete","complete","add"]),
  watch: {
    allToDos(value){
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
}
.template {
  background: #3fb984;
}
.filter{
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-left: 31.5vw;
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
}
html{
  background: #3fb984;
  margin: 0;
  padding: 0;
}
.head{
  padding-left: 5%;
}
.AAA{
  overflow: scroll;
  overflow-x:auto;
  height: 60vh;
  width: 50%;
  margin-left: 26vw;
}
.AAA::-webkit-scrollbar-thumb {
  background-color: #2c3e50;
}

.AAA::-webkit-scrollbar {
  width: 1em;
}

.AAA::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#first {
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  border: 5px solid #2c3e50;
  color: #2c3e50;
  background-color: transparent;
  font-size: 1.2rem;
  line-height: 1;
  margin: 15px;
  padding: 0.7em 1.5em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  padding-top: 20px;
  border-radius: 5px;
}
#first:hover {
  box-shadow: 0 0 40px 40px #2c3e50 inset;
  color: #3fb984;
}

#input{
  border:1px solid #111;
  transition: .3s background-color;
  width: 40vw;
  height: 5vh;
  font-size: 28px;
}
#input:hover{
  background-color: #fafafa;
}


h1{
  font-size: 40px;
}
</style>
