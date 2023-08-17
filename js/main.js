
//localstorage formulario

const nomBre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const dni = document.getElementById("dni")
const email = document.getElementById("correo")
const telefono = document.getElementById("telf")
const texto1 = document.getElementById("mensaje1")
const obraSocial = document.getElementById("obra-social")
const especialidadTurno = document.getElementById("espe-turno")

function enviarForm(){
    localStorage.setItem("nombre", nomBre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("dni", dni.value)
    localStorage.setItem("correo", email.value)
    localStorage.setItem("telf", telefono.value)
    localStorage.setItem("mensaje1", texto1.value)
    localStorage.setItem("obra-social", obraSocial.value)
    localStorage.setItem("espe-turno", especialidadTurno.value)

    "nombre"="melissa"
}

//Boton enviar

let boton = document.getElementById("enviarForm")
boton.addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire(
        'Gracias por elegirnos.',
        'Su turno esta confirma. Recuerde que para cancelar el turno se debe realizar 24hs antes de la fecha confirmada.',
        'question'
        )
        enviarForm()
        console.log("La ficha del paciente se guardo en el Local Storage")
})


