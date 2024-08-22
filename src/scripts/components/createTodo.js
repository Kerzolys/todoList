
export const createTodo = (todo, updateFn) => {
  const todoTemplate = document.querySelector("#todo-template").content;
  const todoElement = todoTemplate.querySelector(".todo-item").cloneNode(true);
  const todoText = todoElement.querySelector(".todo-item__text");
  const todoCheckbox = todoElement.querySelector(".todo-item__checkbox");
  const updateButton = todoElement.querySelector('.todo-item__update-button')
  todoText.textContent = todo.todo;
  todoCheckbox.checked = todo.completed;

  if (todoCheckbox.checked) {
    todoText.classList.add("todo-item__text_checked");
  }

  updateButton.addEventListener('click', updateFn)

  todoCheckbox.addEventListener("click", () => {
    todoText.classList.toggle("todo-item__text_checked");
  });

  return todoElement;
};

export const createNewTodo = (todo) => {
  const newTodo = {
    todo: todo.todo,
    completed: todo.completed,
    userId: todo.userId,
  };

  return newTodo
};
