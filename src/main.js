window.onload = init;

function init() {
  document.querySelector("#get").addEventListener("click", getTodos);
  document.querySelector("#post").addEventListener("click", postTodo);
  document.querySelector("#put").addEventListener("click", updateThirdTodo);
}

function getTodos(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/todos");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send();
}

function postTodo(event) {
  event.preventDefault();

  const newTodo = {
    text: "Profit",
    completed: false
  };

  const jsonnedTodo = JSON.stringify(newTodo);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/todos");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send(jsonnedTodo);
}

function updateThirdTodo(event) {
  const updatedTodo = {
    text: "????",
    completed: true
  };
  const jsonnedTodo = JSON.stringify(updatedTodo);

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "http://localhost:3000/todos/3");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = handleData;
  xhr.send(jsonnedTodo);
}

function handleData(event) {
  event.preventDefault();
  const data = JSON.parse(event.target.responseText);

  for (i = 0; i < data.length; i++) {
    const list = document.querySelector("#list");
    const newLi = document.createElement("li");
    newLi.innerText = data[i].text;
    list.appendChild(newLi);
  }
}

function handleData(event) {
    event.preventDefault();
    const data = JSON.parse(event.target.responseText);

    for (i = 0; i < data.length; i++) {
        const list = document.querySelector("#list");
        const secNewList = document.createElement("#li");
        secNewList.innerText = data[i].text;
        list.appendChild(secNewList);
    }


}