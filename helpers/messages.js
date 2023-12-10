require("colors");

//Usamos el \ (back slash) + n = para hacer un salto de linea.

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("==========================".brightGreen);
    console.log(" 👇Select an option".brightWhite);
    console.log("==========================\n".brightGreen);

    console.log(`${"1.".brightGreen} Crear tarea ✍`);
    console.log(`${"2.".brightGreen} Listar tareas 📒`);
    console.log(`${"3.".brightGreen} Listar tareas completadas 🆗`);
    console.log(`${"4.".brightGreen} Listar tareas pendientes ❌`);
    console.log(`${"5.".brightGreen} Completar tarea(s) ${"✔".green}`);
    console.log(`${"6.".brightGreen} Borrar tarea 💥`);
    console.log(`${"0.".brightGreen} Salir 🚪\n`);

    //Creacion de interfaz para mostrar y recibir información del usuario (readline es propio de node).
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //con question lanzamos un input par aque el usuario elija la opción.
    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    //Creacion de interfaz para mostrar y recibir información del usuario (readline es propio de node).
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //con question lanzamos un input par aque el usuario elija la opción.
    readline.question(
      `\nPresione ${"ENTER".brightGreen} para continuar\n`,
      (opt) => {
        readline.close();
        resolve()
      }
    );
  });
};

module.exports = {
  showMenu,
  pause,
};
