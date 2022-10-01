var todoList = [
  { task: "Aprender HTML, CSS e JavaScript", state: false },
  { task: "Aprender o básico de Vue JS", state: false },
  { task: "Completar o desafio de Vue JS com excelência", state: false },
];

const TodoAppList = {
  data() {
    return {
      todoList: window.todoList,
      newTask: {},
    };
  },

  methods: {
    clearTask() {
      this.todoList = {};
      console.log(this.todoList);
    },
    addTask() {
      // var state = { state: false };
      this.todoList.push(this.newTask);
    },
  },
};

Vue.createApp(TodoAppList).mount("#app");
