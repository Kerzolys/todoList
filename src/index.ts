import "./styles.css";
import { Item } from "./components/Item";
import { Form } from "./components/Form";
import { todos } from "./utils/constants";
import { ToDoModel } from "./components/ToDoModel";
import { Page } from "./components/Page";
import { ItemPresenter } from './components/ToDoPresenter'

const container = document.querySelector(".todos") as HTMLElement;

const page = new Page(container);

const todoArray = new ToDoModel();
todoArray.items = todos;

const itemPresenter = new ItemPresenter(todoArray, Form, Item, page)

itemPresenter.init()
itemPresenter.renderView()



// const getTodos = () => {
//   fetch("https://dummyjson.com/todos").then(res => res.json()).then(data => console.log(data))
// };
// getTodos()
