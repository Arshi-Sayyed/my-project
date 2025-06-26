// Get the necessary elements
const input = document.querySelector('.input-area input');
const addButton = document.querySelector('.input-area button');
const taskList = document.querySelector('.task-list');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  // Create the li element
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  // Add click handler for delete
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  // Append the delete button to the li
  li.appendChild(deleteButton);

  // Add the li to the list
  taskList.appendChild(li);

  // Clear the input
  input.value = '';
}
