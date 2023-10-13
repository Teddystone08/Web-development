const todoBasket = 
[
    {
    name:'',
    dueDate:''
}
];

renderList();

document.querySelector('.js-btn').addEventListener('click',() => {
    addList();


})

function addList(){


    
//create array for input
const inputEl = document.querySelector('.input')
const name = inputEl.value;

const dateEl = document.querySelector('.date')
const dueDate = dateEl.value;

inputEl.value = '';

todoBasket.push(
    {
    name,
    dueDate,
}
);


renderList();

}

    
  function renderList(){
    let todoList = '';
    
    //create a loop
    for (let i = 0; i < todoBasket.length; i++ ){
        const inputObjects = todoBasket[i];  
        const {name, dueDate} = inputObjects;
        const html = 
        `
        <div>${name} </div>
        <div>${dueDate}</div>        
        <button class = "delete js-delete">Delete</button>`;

        todoList += html;
    }

     document.querySelector('.text').innerHTML = todoList;

     document.querySelectorAll('.js-delete').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoBasket.splice(index,1);
            renderList();
        })
     })
}


