<template>
      <li>
        <div v-bind:class="{done: todo.IsDone}" id = "{{todo.id}}">
          <input type="checkbox"
                 v-model="markCompl"
                 v-on:change="markCompleted"

          >{{todo.name}}
        </div>
        <button v-on:click="$emit('removeTodo',todo.id)">&times;</button>
      </li>
</template>

<script>
export default {
  data(){
    return {
    newvalue: '',
    filter:"all"}
  },

  props: ["todo"],
  name: "TodoList",

  methods:{
    add(){
      const newTodo = {
        id : Date.now(),
        name : this.newvalue,
        IsDone: false
      }
      let name= JSON.stringify(this.todos).slice(0,JSON.stringify(this.todos).length-1)+','+JSON.stringify(newTodo) + "]"
      localStorage.setItem("228",name)
      this.$emit("add-Todo",newTodo)
    },
      markCompleted(){

      let old=JSON.stringify(this.todo)
        // eslint-disable-next-line vue/no-mutating-props
        this.todo.IsDone=!this.todo.IsDone
        let antiold=JSON.stringify(this.todo)
        localStorage.setItem("228",localStorage.getItem("228").replace(old,antiold))
      },
  },
  computed:{
    // eslint-disable-next-line vue/return-in-computed-property
    markCompl(){
      if (this.todo.IsDone) {
        return true
      }
      if(!this.todo.IsDone){
        return false
      }
    }
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
li{
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  width: 50%;
}
input{
  margin-left: 10px;
}
ol{
  list-style: none;
  margin: 0;
  padding: 0;
}
.done{
  text-decoration: line-through;
}

</style>