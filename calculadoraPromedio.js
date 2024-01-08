let nota1, nota2, nota3;
let nombreEstudiante;
let nombreMateria;
let promedio;

nombreEstudiante = prompt("Ingrese Nombre del Estudiante:");
nombreMateria = prompt("Ingrese nombre de la materia:");

nota1 = parseFloat(prompt("Ingrese la primera nota (entre 0 y 10):"));
nota2 = parseFloat(prompt("Ingrese la segunda nota (entre 0 y 10):"));
nota3 = parseFloat(prompt("Ingrese la tercera nota (entre 0 y 10):"));

if (isNaN(nota1) , isNaN(nota2) , isNaN(nota3) ,
    nota1 < 0 , nota1 > 10 ,
    nota2 < 0 , nota2 > 10 , 
    nota3 < 0 , nota3 > 10) {
    console.log("Por favor, asegúrese de ingresar notas válidas entre 0 y 10.");

} else {
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 7) {
        console.log(`${nombreEstudiante}, ¡felicidades! Has aprobado ${nombreMateria} con un promedio de ${promedio}.`);
    } else {
        console.log(`${nombreEstudiante}, Gracias por tu esfuerzo nos vemos pronto en clase. El promedio obtenido  de ${nombreMateria} es de ${promedio}.`);
    }
}