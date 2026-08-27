document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El DOM ha cargado perfectamente")
})

const inputTarea = document.getElementById("input")
const btnEnviar = document.getElementById("send")



btnEnviar.addEventListener("click", ()=>{
    const tarea = document.createElement("li")
    tarea.setAttribute("id", "task-item")

    tarea.textContent = inputTarea.value

    const lista = document.getElementById("list")
    lista.appendChild(tarea)

    inputTarea.value = "";


})