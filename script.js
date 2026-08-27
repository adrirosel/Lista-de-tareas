document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El DOM ha cargado perfectamente")
})

const inputTarea = document.getElementById("input")
const btnEnviar = document.getElementById("send")
const selectPriority = document.getElementById("priority")
const selectCategory = document.getElementById("category")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("finish-date")


/* btnEliminar.addEventListener("click", ()=>{
    tarea.remove()
}) */


btnEnviar.addEventListener("click", (e)=>{
    if(inputTarea.value === "" || startDate.value === "" || startDate.value > endDate.value){
        alert("Datos incorrectos")
        return
    }
    e.preventDefault();
    const tarea = document.createElement("li")
    tarea.classList.add("task-item");

    
    tarea.innerHTML = `<div class="task-header">
                        <h3>${inputTarea.value}</h3>
                        <span class="badge priority-high"><strong>Prioridad:</strong>${selectPriority.value}</span>
                    </div>

                    
                    <div class="task-details">
                        <span><strong>Categoría:</strong> ${selectCategory.value}</span>
                        <span><strong>Inicio:</strong> ${startDate.value}</span>
                        <span><strong>Fin:</strong> ${endDate.value}</span>
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
    const lista = document.getElementById("list")
    lista.appendChild(tarea)

    inputTarea.value = "";
    startDate.value = "";
    endDate.value = "";

})

