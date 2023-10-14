const API = "http://jsonplaceholder.typicode.com/todos";
let allTodos;
const requestStatus = document.getElementById("request-status");
const todosList = document.getElementById('todos-list')
const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const number = +form['form-input'].value;
  const newTodos = allTodos.slice(0, number)
  updateUI(newTodos) 
})


const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  
  if (request.readyState != 4) {
    requestStatus.textContent = "Loading...";
  } else if (request.readyState == 4) {
    const data = JSON.parse(request.responseText);
    allTodos = data
    updateUI(allTodos);
    requestStatus.textContent = "Done";
  }
});

request.open("GET", API);
request.send();



function updateUI(todos) { 
  todosList.innerHTML = ''
  todos.forEach((todo) => {
   let li = document.createElement('li')
   let pTitle = document.createElement('p')
   let pId = document.createElement('p')
   let pComplate = document.createElement('p')


   pTitle.textContent = todo.title;
   pId.textContent = todo.id;
   pComplate.textContent = todo.complated;

   li.append(pTitle, pId, pComplate)
   todosList.appendChild(li)
  })
}
