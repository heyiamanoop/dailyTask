const input = document.getElementById('inputTask');
  const btn = document.getElementById('btn');
  const list = document.getElementById('taskList');

  btn.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText !== "") {
      const li = document.createElement('li');
      li.textContent = taskText;

      // ✅ Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = ' ❌';
      deleteBtn.onclick = () => li.remove();
      li.appendChild(deleteBtn);

      // ✅ Toggle complete
      li.addEventListener('click', (e) => {
        // Prevent toggle when delete is clicked
        if (e.target.tagName !== 'BUTTON') {
          li.classList.toggle('completed');
        }
      });

      list.appendChild(li);
      input.value = "";
    }
  });