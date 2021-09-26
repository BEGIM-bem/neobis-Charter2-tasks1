
let todoList1 = document.getElementById('todoList1');

let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

let str = ' ';
for (let i = 0; i < tasks.length; i++) {
    str += '<li class = "task">' + tasks[i];
}
todoList1.innerHTML = str;
