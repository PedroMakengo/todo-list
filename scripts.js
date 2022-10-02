var todoList = [
  { task: "Aprender HTML, CSS e JavaScript", done: false },
  { task: "Aprender o básico de Vue JS", done: false },
  { task: "Completar o desafio de Vue JS com excelência", done: false },
];

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
};

Vue.createApp(todosApp).mount("#app");
