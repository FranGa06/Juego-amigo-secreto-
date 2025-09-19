// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // array donde se guardarán los nombres de los amigos


function agregarAmigo (){
    let nuevoAmigo = (document.getElementById("amigo").value); // Tomo el valor del input donde se escribe el nombre
    

    if (nuevoAmigo == ""){
        alert ("Inserte un nombre") // Si no se escribe nada, muestro una alerta de "rellenar informacion"

    } else {
        amigos.push(nuevoAmigo); // Si hay nombre, lo agrego al array de amigos.

    }
    console.log(amigos); // muestro la lista completa de amigos en la consola para verificar
    document.getElementById ("amigo").value = ""; // Limpio el input para poder escribir otro nombre y que no haya que estár borrando


    function actualizarLista (){
        const len = amigos.length; // guardo la cantidad de amigos en una variable
        document.getElementById("listaAmigos").innerHTML = ""; // Limpio la lista HTML antes de agregar los nombres

        for (let i = 0; i < len; i++){
           const li = document.createElement("li"); //creo un nuevo elemento li 
            document.getElementById ("listaAmigos").appendChild(li).innerHTML = amigos[i]; // Le pongo el nombre del amigo y lo agrego a la lista

        }
    }

    actualizarLista(); // Llamo a la funcion que actualiza la lista en pantalla
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert ("No hay amigos agregados"); // Si no hay amigos, muestro alerta
    } else{
        document.getElementById("resultado").innerHTML = ""; // elimino el resultado anterior
        const li = document.createElement("li"); // Creo un elemento de lista para mostrar el resultado
        let indiceAleatorio = Math.floor(Math.random()*amigos.length); // Genero un índice aleatorio para escoger un amigo
         document.getElementById ("resultado").appendChild(li).innerHTML = amigos[indiceAleatorio]; // Muestro el amigo sorteado en la pantalla.
        
        }
}   
