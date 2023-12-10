const Task = require("./task");
require("colors");

class Tasks {
  _list = {};

  get listArr() {
    const list = [];

    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key]);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
    console.log(asdas)
  }



  createTask(desc = "") {
    console.log("\n")
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  completeList() {
    /* //? MI SOLUCION -
    Object.keys(this._list).forEach((key, index) => {
      let estado = ""
      index++
      if (this._list[key].completedIn !== null) {
        estado = "Completed".brightGreen
        index.brightGreen
      } else {
        estado = "Pending".brightRed
        index.brightRed
      }
      console.log(
        `${index}. ${this._list[key].description} :: ${estado}`
      )
    })
    */
    console.log("\n")
    this.listArr.forEach((tasks, index) => {
      const i = `${++index}`.brightGreen;
      const { description, completedIn } = tasks;
      const estado = completedIn
        ? "Completed".brightGreen
        : "Pending".brightRed;
      console.log(`${i}. ${description} :: ${estado}`);
    });
  }

  listTasksPendingOrCompleted(completed = true) {
    console.log("\n")
    if (completed) {
      let index = 0
      this.listArr.forEach((tasks) => {
        if (tasks.completedIn) {
          const i = `${++index}`.brightGreen;
          const { description, completedIn } = tasks;
          const estado = "Completed".brightGreen
          console.log(`${i}. ${description} :: ${estado}`);
        }
      })
    } else {
      let index = 0
      this.listArr.forEach((tasks) => {
        if (!tasks.completedIn) {
          const i = `${++index}`.brightRed;
          const { description, completedIn } = tasks;
          const estado = "Pendig".brightRed
          console.log(`${i}. ${description} :: ${estado}`);
        }
      })
    }
  }

  deleteTask(id = "") {
    console.log("\n")
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}

module.exports = Tasks;
