document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El DOM ha cargado perfectamente")
})

const inputTarea = document.getElementById("input")
const btnEnviar = document.getElementById("send")
const selectPriority = document.getElementById("priority")
const selectCategory = document.getElementById("category")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("finish-date")


let almacenTareas = JSON.parse(getSaveTask()) || []
for(let i = 0; i<almacenTareas.length; i++){
    const lista = document.getElementById("list")
    lista.appendChild(createTask(almacenTareas[i]))
}

btnEnviar.addEventListener("click", (e)=>{
    if(inputTarea.value === "" || startDate.value === "" || startDate.value > endDate.value){
        alert("Datos incorrectos")
        return
    }
    e.preventDefault();

     const datosTarea = {
        nombre: inputTarea.value,
        prioridad: selectPriority.value,
        categoria: selectCategory.value,
        inicio: startDate.value,
        fin: endDate.value
    };

    const tarea = createTask(datosTarea)
    
    
    const lista = document.getElementById("list")
    lista.appendChild(tarea)

    almacenTareas.push(datosTarea)

    const almacenTareasJSON = JSON.stringify(almacenTareas)

    setSaveTask(almacenTareasJSON)

    

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
    })
    const btnCompletar = tarea.querySelector(".btn-complete")
    btnCompletar.addEventListener("click", ()=>{
        const contenedorCompletadas = document.querySelector(".completed-tasks")
        contenedorCompletadas.appendChild(tarea) 
        tarea.classList.add("task-completed")
        btnCompletar.remove();
    })

    return tarea
} 