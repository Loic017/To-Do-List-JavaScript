let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    if (!inputField.value.replace(/\s/g, '').length) { 
        alert("Please enter a task");
    } else {
        var paragraph = document.createElement('p');
        var check = document.createElement('button');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        check.classList.add('button-styling');
        check.innerText = "Remove Task";
        toDoContainer.appendChild(paragraph);
        toDoContainer.appendChild(check);
        inputField.value = "";
    }
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    check.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(check);
    })
})