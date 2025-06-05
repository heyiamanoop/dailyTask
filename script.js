const input = document.getElementById('inputTask');
const btn = document.getElementById('btn');
const list = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add('completed');
    }

    // Toggle complete
    li.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// Add task
btn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    input.value = "";
  }
});

// Initial render on page load
renderTasks();
