const inquirer = require('inquirer');
require("colors")

const questions = [
  {
    type: "list",
    name: "option",
    message: "¿What would you like to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".blue} Create task`
      },
      {
        value: "2",
        name: `${"2.".blue} List tasks`
      },
      {
        value: "3",
        name: `${"3.".blue} List completed tasks`
      },
      {
        value: "4",
        name: `${"4.".blue} List pending tasks`
      },
      {
        value: "5",
        name: `${"5.".blue} Completed task(s)`
      },
      {
        value: "6",
        name: `${"6.".blue} Delete task`
      },
      {
        value: "0",
        name: `${"0.".blue} Exit`
      }
    ]
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".brightGreen);
  console.log("   👇 Select an option".white);
  console.log("==========================\n".brightGreen);

  const { option } = await inquirer.prompt(questions)
  return option
}

const pause = async () => {
  console.log("\n")
  await inquirer.prompt([{
    type: "input",
    name: "enter",
    message: `Presione ${"ENTER".brightGreen} para continuar`
  }])
}

const readInput = async (message) => {
  console.log("\n")
  const question = [{
    type: "input",
    name: "desc",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Please enter a value: "
      }
      return true
    }
  }];

  const { desc } = await inquirer.prompt(question);
  return desc
}

const deletTaskList = async (tasks = []) => {
  console.log("\n")
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.brightGreen
    return {
      value: task.id,
      name: `${idx} ${task.description}`

    }
  })
  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete: ",
      choices
    }
  ]
  const { id } = await inquirer.prompt(questions)
  return id
}

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message
    }
  ]
  const { ok } = await inquirer.prompt(question)
  return ok
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deletTaskList,
  confirm
}