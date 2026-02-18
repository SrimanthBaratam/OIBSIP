function addTask() {
  const title = document.getElementById("taskTitle").value;
  const desc = document.getElementById("taskDesc").value;

  if (title === "" || desc === "") {
    alert("Please fill in all fields");
    return;
  }

  const time = new Date().toLocaleString();

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${title}</strong>
    <p>${desc}</p>
    <div class="time">Added: ${time}</div>
    <div class="task-actions">
      <button class="complete" onclick="completeTask(this)">Complete</button>
      <button class="edit" onclick="editTask(this)">Edit</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById("pendingTasks").appendChild(li);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  const time = new Date().toLocaleString();
  li.querySelector(".time").innerHTML = `Completed: ${time}`;
  button.remove();
  document.getElementById("completedTasks").appendChild(li);
}

function editTask(button) {
  const li = button.parentElement.parentElement;
  const title = li.querySelector("strong");
  const desc = li.querySelector("p");

  const newTitle = prompt("Edit title:", title.innerText);
  const newDesc = prompt("Edit description:", desc.innerText);

  if (newTitle && newDesc) {
    title.innerText = newTitle;
    desc.innerText = newDesc;
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}
