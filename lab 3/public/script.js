async function fetchTasks() {
    const res = await fetch("/tasks");
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.textContent = task.title + " (" + task.status + ") ";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.onclick = () => updateTask(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = () => deleteTask(task.id);

        li.appendChild(text);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById("taskInput");

    await fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: input.value })
    });

    input.value = "";
    fetchTasks();
}

async function updateTask(id) {
    await fetch(`/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" })
    });

    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`/tasks/${id}`, {
        method: "DELETE"
    });

    fetchTasks();
}

fetchTasks();
