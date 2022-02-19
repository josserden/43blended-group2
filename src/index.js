import './sass/main.scss';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import { showNotify } from './js/notification';
import { renderMarkup } from './js/renderMarkup';
import { saveToLS, getFromLS } from './js/helpers';

const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');
let todos = [];

renderFromLS();
btn.addEventListener('click', addTodo);
list.addEventListener('click', toggleCompleted);

async function addTodo() {
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here',
    },
    inputValue: '',
    showCancelButton: true,
  });

  if (!text) return showNotify();

  const todo = {
    id: uuidv4(),
    description: text,
    completed: false,
  };

  todos.push(todo);
  saveToLS('todos', todos);
  renderMarkup(list, todos);

  showNotify('success', 'Your todo added! ');
}
function toggleCompleted(event) {
  const currentElement = event.target.parentNode.parentNode;
  const badge = event.target.parentNode.previousElementSibling;

  currentElement.classList.remove('bg-secondary');
  currentElement.classList.remove('bg-opacity-10');
  badge.textContent = 'todo';

  if (event.target.checked) {
    currentElement.classList.add('bg-secondary');
    currentElement.classList.add('bg-opacity-10');

    badge.textContent = 'done';
  }
}
function renderFromLS() {
  const parsedTodos = getFromLS('todos');

  if (parsedTodos) {
    todos = parsedTodos ? parsedTodos : [];
  }

  renderMarkup(list, todos);
}
