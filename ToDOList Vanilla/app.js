// const todos = [];

// function createToDo() {
//   const inputTodo = document.getElementById('todoinput').value;
//   if (inputTodo === '') {
//     return false;
//   }

//   todos.push(inputTodo);
//   updateDisplay(todos);
//   document.getElementById('todoinput').value = '';

//   return false;
// }

// createToDo();

// // For removing todo input

// function removeToDo(index) {
//     console.log(index)
//     // todos.filter((value, i) => i !== index);
//     todos.splice(index, 1);
//     updateDisplay();
//     const container = document.getElementById('todoList');
//     container.innerHTML = "";
// }

// function updateDisplay(data) {
//   const container = document.getElementById('todoList');
//   container.innerHTML = "";

//   //  we have to create one div to render the list
//   data.map((todo, index) => {
//     const createDiv = document.createElement('div');
//     createDiv.className = 'todolistContainer';
//     createDiv.appendChild(document.createElement('p'));
//     createDiv.querySelector('p').innerHTML = todo;
//     const createButton = document.createElement('button');
//     createButton.innerHTML = "Remove";
//     createDiv.appendChild(createButton);

//     //  Adding onCLick function to do remove button using DOM

//     createButton.onclick = () =>{
//         removeToDo(index);
//     }
//     container.appendChild(createDiv);
//   });
// }


const a ="Hello";

function getName (){
    console.log("Mobin")
}

getName();
console.log(a); 
