const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (todo of savedTodos) {
    const newTodo = document.createElement('li');
	newTodo.innerText = todo;
    list.appendChild(newTodo);
    const deleteBtn = document.createElement('button');
    newTodo.appendChild(deleteBtn);
	deleteBtn.innerText = 'Delete';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = document.createElement('li');
	newTodo.innerText = input.value;
	list.appendChild(newTodo);
    
    savedTodos.push(newTodo.innerText);
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    const deleteBtn = document.createElement('button');
	newTodo.appendChild(deleteBtn);
	deleteBtn.innerText = 'Delete';
	input.value = '';
});

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('complete');
	} else if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
	}
});
