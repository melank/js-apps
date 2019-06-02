import { element } from "./view/html-util.js";

export class App {
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        let todoItemCount = 0;

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const todoItemElement = element`<li>${inputElement.value}</li>`;
            containerElement.appendChild(todoItemElement);

            todoItemCount += 1;
            todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;

            // 入力欄を空文字にリセットする
            inputElement.value = "";
        });
    }
}