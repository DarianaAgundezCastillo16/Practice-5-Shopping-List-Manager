document.addEventListener('DOMContentLoaded', () => {
    const inputHomeWork = document.getElementById('inputHomeWork');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('taskList');
    const taskError = document.getElementById('taskError');
    const recordsSection = document.getElementById('recordsSection');

    // Función para actualizar la visibilidad de la sección de registros
    function updateSectionVisibility() {
        if (taskList.children.length > 0) {
            recordsSection.classList.remove('hidden');
        } else {
            recordsSection.classList.add('hidden');
        }
    }

    // Función principal para agregar tarea
    function addTask() {
        const taskText = inputHomeWork.value.trim();

        // Validación: verificar si el campo está vacío
        if (taskText === "") {
            taskError.textContent = "Please enter a valid task/homework.";
            return;
        } else {
            taskError.textContent = ""; // Limpiar error si pasa la validación
        }

        // Crear elemento de lista (li)
        const li = document.createElement('li');
        
        // Span para el texto de la tarea
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Contenedor para los botones de acción para ordenarlos bien
        const actionsDiv = document.createElement('div');
        actionsDiv.style.display = 'inline-flex';
        actionsDiv.style.gap = '8px';
        actionsDiv.style.marginLeft = '15px';

        // Botón Editar
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.style.backgroundColor = '#ffc107';
        editBtn.style.color = 'black';
        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = span.textContent;
                editInput.style.padding = '3px';
                
                li.replaceChild(editInput, span);
                editBtn.textContent = 'Save';
            } else {
                const editInput = li.querySelector('input[type="text"]');
                const updatedText = editInput.value.trim();

                if (updatedText === "") {
                    alert("The task cannot be empty.");
                    return;
                }

                span.textContent = updatedText;
                li.replaceChild(span, editInput);
                editBtn.textContent = 'Edit';
            }
        });

        // Botón Eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#dc3545';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            updateSectionVisibility(); // Ocultar sección si ya no quedan tareas
        });

        // Agregar botones al contenedor de acciones
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(actionsDiv);

        // Añadir tarea a la lista (DOM)
        taskList.appendChild(li);

        // Mostrar la sección de registros automáticamente
        updateSectionVisibility();

        // Limpiar input y enfocar de nuevo
        inputHomeWork.value = "";
        inputHomeWork.focus();
    }

    // Evento para el botón ADD
    addBtn.addEventListener('click', addTask);

    // Permitir agregar presionando la tecla Enter en el input
    inputHomeWork.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});