document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El DOM ha cargado perfectamente")
    let rachaGuardada = localStorage.getItem("racha") || 0;
    racha.textContent = `Racha 🔥: ${rachaGuardada}`;
})

const inputTarea = document.getElementById("input")
const btnEnviar = document.getElementById("send")
const selectPriority = document.getElementById("priority")
const selectCategory = document.getElementById("category")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("finish-date")
const contenedorCompletadas = document.querySelector(".completed-tasks")
const buscadorTarea = document.getElementById("search-input")
const lista = document.getElementById("list")
const subtitulo = document.querySelector(".subtitle-strike")

let almacenTareas = JSON.parse(getSaveTask()) || []
for(let i = 0; i<almacenTareas.length; i++){
    const lista = document.getElementById("list")
    /* lista.appendChild(createTask(almacenTareas[i])) */
    if(almacenTareas[i].estado === "pendiente"){
        lista.appendChild(createTask(almacenTareas[i]))
    } else {
        contenedorCompletadas.appendChild(createTask(almacenTareas[i]))

    }
}

const racha = document.createElement("p")
racha.classList.add("strike")
subtitulo.appendChild(racha)

btnEnviar.addEventListener("click", (e)=>{
    if(inputTarea.value === "" || startDate.value === "" || startDate.value > endDate.value){
        alert("Datos incorrectos")
        return
    }
    e.preventDefault();

     const datosTarea = {
        id: Date.now(),
        nombre: inputTarea.value,
        prioridad: selectPriority.value,
        categoria: selectCategory.value,
        inicio: startDate.value,
        fin: endDate.value, 
        estado: "pendiente"
    };

    const tarea = createTask(datosTarea)
    
    lista.appendChild(tarea)

    almacenTareas.push(datosTarea)

    const almacenTareasJSON = JSON.stringify(almacenTareas)

    setSaveTask(almacenTareasJSON)
    let rachaActualizada = actualizarRacha();
    racha.textContent = `Racha 🔥: ${rachaActualizada}`;
    

    inputTarea.value = "";
    startDate.value = "";
    endDate.value = "";
})
function setTheme(theme){
    const html = document.documentElement
        if(theme === "dark"){
            html.classList.add("dark-mode")
        }else{
            html.classList.remove("dark-mode")
        }
}
addButtonThemeListener()
let currentTheme = getSavedTheme()
setTheme(currentTheme)

function addButtonThemeListener(){
    const btnToggler = document.querySelector(".button-theme-toggle")
    btnToggler.addEventListener("click", ()=>{
        const newTheme = getTheme(currentTheme)
        currentTheme = newTheme
        setTheme(currentTheme)
        saveTheme(currentTheme)
    })
}

function getTheme(theme){
    return theme === "dark" ? "light" : "dark"
}

function getSavedTheme(){
    return localStorage.getItem("theme")
}

function saveTheme(theme){
    localStorage.setItem("theme", theme)
}

function setSaveTask(tasks){
        localStorage.setItem("tasks", tasks)
}

function getSaveTask(){
    return localStorage.getItem("tasks")
}

function createTask(datosTarea){
    const tarea = document.createElement("li")
    tarea.classList.add("task-item");

    tarea.innerHTML = `<div class="task-header">
                        <h3>${datosTarea.nombre}</h3>
                        <span class="badge priority-high"><strong>Prioridad:</strong>${datosTarea.prioridad}</span>
                    </div>

                    
                    <div class="task-details">
                        <span><strong>Categoría:</strong> ${datosTarea.categoria}</span>
                        <span><strong>Inicio:</strong> ${datosTarea.inicio}</span>
                        <span><strong>Fin:</strong> ${datosTarea.fin}</span>
                    </div>

                    
                    <div class="task-actions">
                        <button class="btn-complete">✅</button>
                        <button class="btn-delete">❌</button>
                    </div>`
    const btnEliminar = tarea.querySelector(".btn-delete")
    btnEliminar.addEventListener("click", () => {
        tarea.remove()
        almacenTareas = almacenTareas.filter((item) => item.id !== datosTarea.id)
        setSaveTask(JSON.stringify(almacenTareas))
    })
    const btnCompletar = tarea.querySelector(".btn-complete")
    btnCompletar.addEventListener("click", ()=>{

        contenedorCompletadas.appendChild(tarea) 
        tarea.classList.add("task-completed")
        btnCompletar.remove();

        let tareaEncontrada = almacenTareas.find((item) => item.id === datosTarea.id)
        tareaEncontrada.estado = "completada"
        setSaveTask(JSON.stringify(almacenTareas))
        let rachaActualizada = actualizarRacha();
        racha.textContent = `Racha 🔥: ${rachaActualizada}`;
    })
    if(datosTarea.estado === "completada"){
        tarea.classList.add("task-completed")
        btnCompletar.remove();
    }
    return tarea
}

buscadorTarea.addEventListener("input", (e)=>{
    lista.innerHTML = ""
    contenedorCompletadas.innerHTML = `<h2 class="completed-tasks-title">Tareas completadas</h2>`
    let input = e.target.value.toLowerCase()
    let tareasFiltradas = almacenTareas.filter((item) => item.nombre.toLowerCase().includes(input))
    for(let i = 0; i<tareasFiltradas.length; i++){
        if(tareasFiltradas[i].estado === "pendiente"){
            lista.appendChild(createTask(tareasFiltradas[i]))
        } else {
            contenedorCompletadas.appendChild(createTask(tareasFiltradas[i]))
        }
    }
})

function actualizarRacha(){
    let contador = parseInt(localStorage.getItem("racha")) || 0
    let fechaHoy = Math.floor(Date.now() / (1000 * 60 * 60 * 24))
    let fechaGuardada = localStorage.getItem("fecha")
    
    if(fechaHoy === parseInt(fechaGuardada)){
        //No se hace nada, ya se ha sumado hoy la racha y 
        // asi evitamos reinicio de contador
    } else if (fechaHoy === parseInt(fechaGuardada) + 1){
        contador = contador + 1
    } else {
        contador = 0
    }
    localStorage.setItem("racha", contador)
    localStorage.setItem("fecha", fechaHoy)

    return contador
}