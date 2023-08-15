
let userTratamiento = 0
let userPrecio = 0
let userDia = 0
let userHora = 0
let nombrePaciente = 0


//objeto con funcion constructora
const Paciente = function(nombre,apellido,edad,telefono,cobertura){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.telefono = telefono
	this.cobertura = cobertura
	}
//ARRAY
let paciente = []
//------------------------------------
const Especialidad = function(nombreEsp,precio){
	this.nombreEsp = nombreEsp
	this.precio = precio
	}
let especialidad1 = new Especialidad("diagnostico", 5000)
let especialidad2 = new Especialidad("odontologia", 6000)
let especialidad3 = new Especialidad("protesis", 9000)
let especialidad4 = new Especialidad("estetica", 9000)
let especialidad5 = new Especialidad("odontopediatria", 5000)
//ARRAY
let especialidad = [especialidad1,especialidad2,especialidad3,especialidad4,especialidad5]

const TratSelec = function(tratamiento,precioTratamiento,diaTurno,horaTurno){
    this.tratamiento = tratamiento
    this.precioTratamiento = precioTratamiento
    this.diaTurno = diaTurno
    this.horaTurno = horaTurno
}
let tratamientoUser = []

function agregarTrat (){
    let tratSelec = new TratSelec(userTratamiento,userPrecio,userDia,userHora)
    tratamientoUser.push(tratSelec)
}

//------------------------------------

const TurnosOnline = function(dia, hora){
    this.dia = dia
    this.hora = hora
}
let turnosOnline1 = new TurnosOnline("Lunes", 15)
let turnosOnline2 = new TurnosOnline("martes", 17)
let turnosOnline3 = new TurnosOnline("miercoles", 14)
let turnosOnline4 = new TurnosOnline("jueves", 16)
let turnosOnline5 = new TurnosOnline("viernes", 18)
//ARRAY
let turnosOnline = []

//---------------------------------------------------------
//funcion ficha del paciente
function ingresoPaciente(){
    let nombreUser = prompt("Ingresa tu nombre")
    nombrePaciente = nombreUser
    let apellidoUser = prompt("Ingresa tu Apellido")
    let edadUser = parseInt(prompt("Ingresa tu edad Edad"))
    let telefonoUser = parseInt(prompt("Ingresa tu número de teléfono"))
    let coberturaUser = prompt("¿Cuál es tu Obra Social")

    let fichaPaciente = new Paciente (nombreUser,apellidoUser,edadUser,telefonoUser,coberturaUser)
    paciente.push(fichaPaciente)
}

//funcion filtro por diagnostico
function filtrarEspecialidad(){
    let tratamiento = prompt("Ingrese la especialidad deseada: Diagnóstico | Odontología General | Protesis | Estética | Odontopediatría").trim()
    let resultado = especialidad.filter((esp)=> esp.nombreEsp.includes(tratamiento))

    if (resultado.length>0)
        switch (tratamiento){
            case "diagnostico":
                alert("La especialidad seleccionadas es Diagnóstico. precionar Enter para continuar")
                userTratamiento = especialidad[0].nombreEsp
                userPrecio = especialidad[0].precio
                userDia = turnosOnline1.dia
                userHora = turnosOnline1.hora
                break;
            case "odontologia":
                alert("La especialidad seleccionadas es Odontologia. precionar Enter para continuar")
                userTratamiento = especialidad[1].nombreEsp
                userPrecio = especialidad[1].precio
                userDia = turnosOnline2.dia
                userHora = turnosOnline2.hora
                break;
            case "protesis":
                alert("La especialidad seleccionadas es protesis. precionar Enter para continuar")
                userTratamiento = especialidad[2].nombreEsp
                userPrecio = especialidad[2].precio
                userDia = turnosOnline3.dia
                userHora = turnosOnline3.hora
                break;
            case "estetica":
                alert("La especialidad seleccionadas es estetica. precionar Enter para continuar")
                userTratamiento = especialidad[3].nombreEsp
                userPrecio = especialidad[3].precio
                userDia = turnosOnline4.dia
                userHora = turnosOnline4.hora
                break;
            case "odontopediatria":
                alert("La especialidad seleccionadas es odontopediatria. precionar Enter para continuar")
                userTratamiento = especialidad[4].nombreEsp
                userPrecio = especialidad[4].precio
                userDia = turnosOnline5.dia
                userHora = turnosOnline5.hora
                break;
            default:
                alert("Especialidad no encontrada")
        }
        agregarTrat()
} 

//localstorage formulario

const nomBre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const dni = document.getElementById("dni")
const email = document.getElementById("correo")
const telefono = document.getElementById("telf")
const texto1 = document.getElementById("mensaje1")
const texto2 = document.getElementById("mensaje2")
const especialidadSelec = document.getElementById("especialidad")

function enviarForm(){
    localStorage.setItem("nombre", nomBre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("dni", dni.value)
    localStorage.setItem("correo", email.value)
    localStorage.setItem("telf", telefono.value)
    localStorage.setItem("mensaje1", texto1.value)
    localStorage.setItem("mensaje2", texto2.value)
    localStorage.setItem("especialidad", especialidadSelec.value)
}

enviarForm()


//Boton enviar



let boton = document.getElementById("enviarForm")
boton.addEventListener("click", ()=>{
    
    Swal.fire(
        'Gracias por elegirnos.',
        'Su turno esta confirma. Recuerde que para cancelar el turno se debe realizar 24hs antes de la fecha confirmada.',
        'question'
    )
})




