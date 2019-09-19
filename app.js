

let promptly = require('promptly');


var alumnos = [];



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
                let nombre = await promptly.prompt("Ingrese el nombre del alumno");
                let promedio = await promptly.prompt("Ingrese el promedio del alumno");
                let alumno = {nombre,promedio};


                alumnos.push(alumno);
                console.log("Alumno añadido correctamente");
                break;
            }
            case "2": {
                let nombreEliminar = await promptly.prompt("Ingrese el nombre del alumno a eliminar");

                for(i = 0; i < alumnos.length; i++){

                    if(alumnos[i] != null){
                        if(alumnos[i].nombre == nombreEliminar){
                            alumnos[i] = null;
                            console.log("Se ha eliminado al alumno correctamente");
                        }
                    }  
                }

            }
            case "3": {
                let nombreEditar = await promptly.prompt("Ingrese el nombre del alumno a editar");

                for(i = 0; i < alumnos.length; i++){

                    if(alumnos[i] != null){
                        if(alumnos[i].nombre == nombreEditar){
                            let nombre = await promptly.prompt("Ingrese el nuevo nombre del alumno");
                            let promedio = await promptly.prompt("Ingrese el nuevo promedio del alumno");
                            let alumno = [nombre,promedio];
                            alumnos[i] = alumno;
                            console.log("Se ha editado al alumno correctamente");

                        }
                    }  
                }

            }
            case "4":{
                let nombreEncontrar = await promptly.prompt("Ingrese el nombre del alumno a encontrar");

                for(i = 0; i < alumnos.length; i++){

                    if(alumnos[i] != null){
                        if(alumnos[i].nombre == nombreEncontrar){
                            console.log("------------------------------------------")
                            console.log("Alumno encontrado!");
                            console.log("Nombre: "+alumnos[i].nombre);
                            console.log("Promedio: "+alumno[i].promedio);
                            console.log("------------------------------------------")


                        }
                    }  
                }

            }
            case "5":{
                let indice = await promptly.prompt("Ingrese la posicion del alumno");

                
                if(alumnos.length > indice){
                    if(alumnos[indice] != null){
                        console.log("------------------------------------------")
                        console.log("Alumno encontrado!");
                        console.log("Nombre: "+alumnos[indice].nombre);
                        console.log("Promedio: "+alumno[indice].promedio);
                        console.log("------------------------------------------")
                    }
                }

            }
            case "6":{
                console.log("Se va a imprimir todo el arreglo de alumnos: ");
                alumnos.forEach(element => {
                    console.log("------------------------------------------")
                    console.log("Nombre: "+element.nombre);
                    console.log("Promedio: "+element.promedio);
                    console.log("------------------------------------------")
                });
            }
            case "7":{
                let alumnos = 0;
                let suma = 0;
                let promedio = 0.0;

                for(i = 0; i < alumnos.length ; i++){
                    if(alumnos[i] !=null){
                        suma = suma + alumnos[i].promedio;
                        alumnos++;

                    }
                }

                promedio = suma / alumnos;
                console.log("------------------------------------------")
                console.log("Promedio general: "+promedio);
                console.log("Alumnos totales: "+suma);
                console.log("------------------------------------------")


            }
            case "8":{
                console.log("bye amiguito");
                console.log()
            }

        }


    }
}();




let anadirAlumno = function (alumno) {



}


let eliminarAlumno = function (alumno) {

}

let editarAlumno = function (alumno) {

}

let buscarElemento = function (key) {

}



