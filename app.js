const { inquirerMenu, pause, readInput, deletTaskList, confirm } = require("./helpers/inquirer");
const { saveFile, readAUxDb } = require("./helpers/saveFile");
const Task = require("./models/task");
const Tasks = require("./models/tasks");

require("colors");

const main = async () => {
  let option = "0";
  const tasks = new Tasks()
  const tasksDB = readAUxDb()
  if (tasksDB) {
    tasks.loadTasksFromArray(tasksDB)
  }
  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        const desc = await readInput("Description: ")
        tasks.createTask(desc)
        break;
      case "2":
        tasks.completeList()
        break;
      case "3":
        tasks.listTasksPendingOrCompleted(true)
        break;
      case "4":
        tasks.listTasksPendingOrCompleted(false)
        break;
      case "5":
        break;
      case "6":
        const id = await deletTaskList(tasks.listArr)
        const ok = await confirm("¿Are you sure?")
        if (ok) {
          tasks.deleteTask(id)
          console.log("Task deleted successfully")
        }
        break;
      default:
        break;
    }
    saveFile(tasks.listArr)
    await pause()
  } while (option !== "0");
};

main();
