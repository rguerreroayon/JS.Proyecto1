
const alumno = {
    nombre: "default",
    promedio: 0.0

}

var crearAlumno = function(nombre,promedio){

    const alumno = Object.create(alumno);
    alumno.nombre = nombre;
    alumno.promedio = promedio;

    return alumno;

}
