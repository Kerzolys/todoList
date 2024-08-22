import "./styles.css";
import { createTodo, createNewTodo } from "./scripts/components/createTodo";
import { config } from "./scripts/configs/apiConfig";
import { apiTodo } from "./scripts/components/todoApi";
import { popupHandlers } from "./scripts/components/popup";

const todoList = document.querySelector(".todo-list");
const inputLimit = document.querySelector("#input-limit");
const newTodoInput = document.querySelector("#new-todo");
const addToddButton = document.querySelector(".fieldset__button-submit");
const popup = document.querySelector('.popup')
const popupEditTodo = document.querySelector(".popup_type_edit");
const popupCloseButton = document.querySelector('.popup__close')

apiTodo.getTodos(config).then((todos) => {
  todos.todos.forEach((todo) => {
    todoList.append(
      createTodo(todo, () => popupHandlers.openPopup(popupEditTodo))
    );
  });
});

// console.log(createNewTodo(newTodo))

const handlerSubmitAddNewTodoInput = (evt) => {
  evt.preventDefault();

  const newTodo = {
    todo: newTodoInput.value,
    completed: false,
    userId: 1,
  };

  apiTodo
    .addNewTodo(config, newTodo)
    .then(() => {
      console.log(newTodo);
      todoList.prepend(createTodo(newTodo));
    })
    .finally(() => {
      newTodoInput.value = "";
    });
};

newTodoInput.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    handlerSubmitAddNewTodoInput(evt);
  }
});

addToddButton.addEventListener("click", (evt) => {
  handlerSubmitAddNewTodoInput(evt);
});

popupCloseButton.addEventListener('click', (evt) => {
  popupHandlers.closePopup(evt.target.closest('.popup'))
})

popup.addEventListener('click', (evt) => popupHandlers.closePopupByOverlay(evt))

// const handleLimitTodos = (evt) => {
//   evt.preventDefault();
//   apiTodo.getLimitedAmountOfTodos(config, inputLimit.value).then((todos) => {
//     todos.todos.forEach((todo) => {
//       todoList.replaceChildren(createTodo(todo));
//     });
//   });
// };

// inputLimit.addEventListener("keydown", (evt) => {
//   if (evt.key === "Enter") {
//     handleLimitTodos(evt);
//   }
// });
