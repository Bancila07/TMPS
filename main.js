class TodoItem {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

class TodoList {
    constructor() {
        this.items = [];
    }

    add(title) {
        const item = new TodoItem(title);
        this.items.push(item);
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    markComplete(item) {
        item.toggle();
    }

    edit(item, newTitle) {
        item.title = newTitle;
    }

    filter(completed) {
        return this.items.filter((item) => item.completed === completed);
    }

    render(filterCompleted) {
        const list = document.getElementById("todo-list");
        list.innerHTML = "";

        const filteredItems =
            filterCompleted === undefined ? this.items : this.filter(filterCompleted);

        filteredItems.forEach((item) => {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = item.completed;

            checkbox.addEventListener("change", () => {
                this.markComplete(item);
                this.render(filterCompleted);
            });

            const label = document.createElement("label");
            label.innerText = item.title;

            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.style.display = "none";

            const editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.addEventListener("click", () => {
                if (editInput.style.display === "none") {
                    editInput.style.display = "block";
                    label.style.display = "none";
                    editButton.innerText = "Save";
                } else {
                    const newTitle = editInput.value;
                    this.edit(item, newTitle);
                    editInput.style.display = "none";
                    label.style.display = "inline";
                    label.innerText = newTitle;
                    editButton.innerText = "Edit";
                }
            });

            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            removeButton.addEventListener("click", () => {
                this.remove(item);
                this.render(filterCompleted);
            });

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(editInput);
            li.appendChild(editButton);
            li.appendChild(removeButton);
            list.appendChild(li);
        });
    }
}

class App {
    constructor() {
        this.list = new TodoList();
        this.input = document.getElementById("todo-input");

        this.input.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                this.addTodo();
            }
        });

        const activeButton = document.getElementById("active-button");
        activeButton.addEventListener("click", () => {
            this.list.render(false);
        });

        const completedButton = document.getElementById("completed-button");
        completedButton.addEventListener("click", () => {
            this.list.render(true);
        });

        const allButton = document.getElementById("all-button");
        allButton.addEventListener("click", () => {
            this.list.render();
        });
    }

    addTodo() {
        const title = this.input.value;
        if (title) {
            this.list.add(title);
            this.input.value = "";
            this.render();
        }
    }

    render() {
        this.list.render();
    }
}

const app = new App();
