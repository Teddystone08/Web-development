const todoList =[
    {
        name: 'wash', 
        dueDate: '30-8-2023',
    },

    {
        name:'clean',
        dueDate: '30-8-2023'
    },

    {
        name: 'dry',
        dueDate: '30-8-2023'
    }
];


renderTodoList();


function renderTodoList() {
   
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObjects = todoList[i];
        const {name, dueDate} = todoObjects;
        //const {dueDate} = todoObjects;
        const html = `
        <div> ${name} </div>
        <div>${dueDate} </div>
        
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="todo-delete-button">Delete</button>`;

        todoListHTML += html;
       
}

document.querySelector('.js-book').innerHTML = todoListHTML;
}


function addTodo(){
    const inputName = document.querySelector('.js-todo-name');
    const name = inputName.value;

   const inputDate = document.querySelector('.js-due-date');
    const dueDate = inputDate.value;

 todoList.push(
    {
        name, 
        dueDate
    }
    );

    
    inputName.value = '';
   
    renderTodoList();

}

