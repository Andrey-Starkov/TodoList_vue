import {createStore} from "vuex"

const store = createStore({
    state:{
        todos: JSON.parse(localStorage.getItem("228")),
        filter: "all"
    },
    getters: {
        allToDos(state){
            if (state.filter === 'all') {
                return state.todos
            }
            if (state.filter === 'complete') {
                return state.todos.filter(t => !t.IsDone)
            }
            if (state.filter === "not_complete") {
                return state.todos.filter(t => t.IsDone)
            }
        },
        GetFilter(state){
            return state.filter
        }
    },
    mutations: {
        remove(state,id){
            state.todos = state.todos.filter(t => t.id !== id)
        },
        all(state){
            state.filter="all"
        },
        not_complete(state){
            state.filter="not_complete"
        },
        complete(state){
            state.filter="complete"
        },
        add(state) {
            const newTodo = {
                id: Date.now(),
                name: document.getElementById("input").value,
                IsDone: false
            }
            if (newTodo.name === ""){
                alert("Поле пусто!")
                return
            }
            let name= JSON.stringify(state.todos).slice(0,JSON.stringify(state.todos).length-1)+','+JSON.stringify(newTodo) + "]"
            localStorage.setItem("228",name)
            state.todos.push(newTodo)
        },
    },
    actions: {
    }
})

export default store;