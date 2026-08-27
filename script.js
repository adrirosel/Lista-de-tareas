document.addEventListener("DOMContentLoaded", ()=>{
    console.log("El DOM ha cargado perfectamente")
})

const inputTarea = document.getElementById("input")
const btnEnviar = document.getElementById("send")
const selectPriority = document.getElementById("priority")
const selectCategory = document.getElementById("category")
const startDate = document.getElementById("start-date")
const endDate = document.getElementById("finish-date")
const btnCompletar = document.getElementById("btn-complete")

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
                        <span class="badge priority-high">${selectPriority.value}</span>
                    </div>

                    
                    <div class="task-details">
                        <p><strong>Categoría:</strong> ${selectCategory.value}</p>
                        <p><strong>Inicio:</strong> ${startDate.value}</p>
                        <p><strong>Fin:</strong> ${endDate.value}</p>
                    </div>

                    
                    <div class="task-actions">
                        <button class="btn-complete">Completar</button>
                        <button class="btn-delete">Eliminar</button>
                    </div>`

    const btnEliminar = tarea.querySelector(".btn-delete")
    btnEliminar.addEventListener("click", () => {
        tarea.remove()
    })
    const lista = document.getElementById("list")
    lista.appendChild(tarea)

    inputTarea.value = "";
    startDate.value = "";
    endDate.value = "";

})
