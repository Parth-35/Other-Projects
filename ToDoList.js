var heading = document.querySelector(".content");

var newElement = document.createElement("p");


heading.appendChild(newElement);


var addBtn = document.querySelector('.btn');
var input = document.querySelector('.input');
addBtn.addEventListener('click', () => {
    input.value.trim();
if(input.value != "" && input.value != " " )
{
    var div = document.createElement('div');
    div.className = "todo";
   
    var todo = document.createElement("p");
    todo.innerText = input.value;
   
    div.appendChild(todo);
    heading.appendChild(div);
   
    var remove = document.createElement("button");
    remove.id = "delete";
    remove.innerText = "X";
    
    div.appendChild(remove);

   
    input.value = "";
}
 
remove.addEventListener('click', () => 
{
    remove.parentNode.remove();
    line.remove;
})


});



