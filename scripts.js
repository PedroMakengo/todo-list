var todoList = [];

const todosApp = {
  data() {
    return {
      todoApp: window.todoList,
      newTask: { done: false },
    };
  },

  methods: {
    clearTask() {
      this.todoApp = [];
    },
    addTask() {
      if (this.newTask.task) {
        this.todoApp.push(this.newTask);

        this.newTask = { done: false };
        localStorage.setItem("todos", JSON.stringify(this.todoApp));
      } else {
        alert("Preenche qualquer coisa");
      }
    },
  },
  created() {
    this.todoApp = localStorage.getItem('todos') ? JSON.parse(this.todos) : this.todoApp
  },
  update() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
};

Vue.createApp(todosApp).mount("#app");
