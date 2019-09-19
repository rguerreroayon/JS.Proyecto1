

let promptly = require('promptly');
import A,{anadirAlumno as anadirAlumno, eliminarAlumno as eliminarAlumno,editarAlumno as editarAlumno,buscarArregloIndice as buscarArregloIndice, buscarArregloNombre as buscarArregloNombre,
imprimirArreglo as imprimirArreglo, imprimirPromedio as imprimirPromedio} from './arregloOp';

var alumnos = [];
var pattern = /([0-9].)/;
var nombrePattern = /[a-zA-Z]+/;


void async function () {
    let command = undefined;
    while (command !== 'exit') {
        console.log("------------------------------------------")
        console.log("1. INGRESAR ALUMNO EN ARREGLO");
        console.log("2. ELIMINAR UN ALUMNO EN EL ARREGLO (null)")
        console.log("3. EDITAR UN ALUMNO EN EL ARREGLO");
        console.log("4. BUSCAR ALUMNO ");
        console.log("5. IMPRIMIR ALUMNO DADO UN INDICE");
        console.log("6. IMPRIMIR TODO EL ARREGLO");
        console.log("7. IMPRIMIR SUMA y PROMEDIO");
        console.log("8. SALIR");
        command = await promptly.choose("Ingrese un comando: ", ["1", "2", "3", "4", "5", "6", "7", "8"]);
        console.log("------------------------------------------")

        switch (command) {
            case "1": {
                A.anadirAlumno();
                break;
                }

            
            case "2": {
                A.eliminarAlumno();
                break;
                

            }
            case "3": {
              A.editarAlumno();
              break;

            }
            case "4": {
               A.buscarArregloNombre();
               break;

            }
            case "5": {
               A.buscarArregloIndice();
               break;

            }
            case "6": {
                A.imprimirArreglo();
                break;


            }
            case "7": {
                A.imprimirPromedio();
                break;


            }
            case "8": {
                console.log("bye amiguito");
                
            }

        }


    }
}();








