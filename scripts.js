var todoList = [
  { task: "Aprender HTML, CSS e JavaScript", state: false },
  { task: "Aprender o básico de Vue JS", state: false },
  { task: "Completar o desafio de Vue JS com excelência", state: false },
];

const todosApp = {
  data() {
    return {
      todoApp: window.todoList,
      newTask: {},
    };
  },

  methods: {
    clearTask() {
      this.todoApp = [];
    },
    addTask() {
      if (this.newTask.task) {
        var state = { state: false };
        this.todoApp.push({ ...this.newTask, ...state });

        this.newTask = {};
      } else {
        alert("Preenche qualquer coisa");
      }
    },
  },
};

Vue.createApp(todosApp).mount("#app");
