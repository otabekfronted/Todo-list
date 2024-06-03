const newList = document.querySelector("#new_items");
const addbtn = document.querySelector("#addbtn");
const todoList = document.querySelector(".todo-list");
let check = document.querySelector("#check");

addbtn.addEventListener("click", () => {
    if (newList.value === "") {
        alert("You must write something?");
    } else {
        let li = document.createElement("li");
        let completedBtn = document.createElement("button");
        let buttonDelte = document.createElement("button");

        completedBtn.textContent = "⏹";
        buttonDelte.textContent = "Delete";

        li.textContent = newList.value;
        li.appendChild(completedBtn);
        li.classList.add("todo-item");
        li.appendChild(buttonDelte);
        buttonDelte.classList.add("check");
        // li.innerHTML = `
        //     <li class="todo-item">
        //         <input id="check" type="checkbox" />

        //         <span id="delete">
        //             <i class="fa-solid fa-trash"></i>
        //         </span>
        //     </li>
        // `;
        todoList.appendChild(li);
    }
    newList.value = "";
});
