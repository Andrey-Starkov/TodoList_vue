<template>
  <li>
    <div v-bind:class="{done: todo.IsDone}">
    <input type="checkbox"
    v-on:change="markCompleted">{{todo.name}}
    </div>
    <button v-on:click="$emit('remove-todo',todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: ["todo"]
  ,
  name: "ListValue",
  data(){
    return{
    }
  },
  methods: {
    markCompleted(){
      // eslint-disable-next-line vue/no-mutating-props
      this.todo.IsDone=!this.todo.IsDone
    }
  }
}
</script>

<style scoped>
  li{
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  input{
    margin-left: 10px;
  }

  .done{
    text-decoration: line-through;
  }
</style>