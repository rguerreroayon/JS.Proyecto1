
let promptly = require('promptly');
var pattern = /([0-9].)/;
var nombrePattern = /[a-zA-Z]+/;
var alumnos = [];




export function anadirAlumno() {
    let nombre = await promptly.prompt("Ingrese el nombre del alumno");
    let promedio = await promptly.prompt("Ingrese el promedio del alumno");

    if (promedio.test(pattern) && nombre.test(nombrePattern)) {
        let alumno = { nombre, promedio };
        alumnos.push(alumno);
        console.log("Alumno añadido correctamente");
    } else {
        console.log("Hay inconsistencias en el nombre y promedio")
    }




}

export function eliminarAlumno() {
    let nombreEliminar = await promptly.prompt("Ingrese el nombre del alumno a eliminar");


    if (nombreEliminar.test(nombrePattern)) {

        for (i = 0; i < alumnos.length; i++) {

            if (alumnos[i] != null) {
                if (alumnos[i].nombre == nombreEliminar) {
                    alumnos[i] = null;
                    console.log("Se ha eliminado al alumno correctamente");
                    break;

                }
            }
        }
    }

    console.log("Ingrese un nombre valido");
    break;
}

export function editarAlumno() {
    let nombreEditar = await promptly.prompt("Ingrese el nombre del alumno a editar");

    for (i = 0; i < alumnos.length; i++) {

        if (alumnos[i] != null) {
            if (alumnos[i].nombre == nombreEditar) {
                let nombre = await promptly.prompt("Ingrese el nuevo nombre del alumno");
                let promedio = await promptly.prompt("Ingrese el nuevo promedio del alumno");
                let alumno = [nombre, promedio];
                alumnos[i] = alumno;
                console.log("Se ha editado al alumno correctamente");

            }
        }
    }
}

export function buscarArregloNombre() {
    let nombreEncontrar = await promptly.prompt("Ingrese el nombre del alumno a encontrar");

    for (i = 0; i < alumnos.length; i++) {

        if (alumnos[i] != null) {
            if (alumnos[i].nombre == nombreEncontrar) {
                console.log("------------------------------------------")
                console.log("Alumno encontrado!");
                console.log("Nombre: " + alumnos[i].nombre);
                console.log("Promedio: " + alumno[i].promedio);
                console.log("------------------------------------------")


            }
        }
    }
}

export function buscarArregloIndice() {
    let numeroEncontrar = await promptly.prompt("Ingrese el indice del alumno a encontrar");
    
    if(alumnos[i]!= null && numberoEncontrar> alumnos.length){
        console.log("------------------------------------------")
                console.log("Alumno encontrado!");
                console.log("Nombre: " + alumnos[i].nombre);
                console.log("Promedio: " + alumno[i].promedio);
                console.log("------------------------------------------")
    }


}

export function imprimirArreglo() {
    console.log("Se va a imprimir todo el arreglo de alumnos: ");
    alumnos.forEach(element => {
        console.log("Alumno: "+element.nombre);
    });
    break;
}

export function imprimirPromedio() {
    let alumnos = 0;
                let suma = 0;
                let promedio = 0.0;

                for (i = 0; i < alumnos.length; i++) {
                    if (alumnos[i] != null) {
                        suma = suma + alumnos[i].promedio;
                        alumnos++;

                    }
                }

                promedio = suma / alumnos;
                console.log("------------------------------------------")
                console.log("Promedio general: " + promedio);
                console.log("Alumnos totales: " + suma);
                console.log("------------------------------------------")
}
