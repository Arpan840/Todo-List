let addTask = document.getElementById('add');
let textBox = document.getElementById('addTodo')
let taskBox = document.getElementById('tasks')
function addTodo() {
  let task = document.createElement('div');
  task.innerText = `${textBox.value}`;
  task.classList.add('todos')
  taskBox.appendChild(task);
  task.style.margin = '20px';
  task.style.padding = '10px';
  task.style.border = '1px solid red'
  task.style.color = 'black';
   
  let btn= document.createElement('div')
  btn.classList.add('btnBox')
  task.appendChild(btn);
  
  let deletebtn = document.createElement('button');
  deletebtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
  deletebtn.classList.add('delete')
  btn.appendChild(deletebtn)
 
  let checkBox= document.createElement('button');
  checkBox.innerHTML='<i class="fa-solid fa-check"></i>'
  checkBox.classList.add('taskdone')
  btn.appendChild(checkBox)
    textBox.value = ''

    checkBox.addEventListener('click',function(){
     task.style.textDecoration= 'line-through';
     task.style.backgroundColor= 'red';
     task.style.color= 'white';
    })
    
    deletebtn.addEventListener('click', function(e){
      let target= e.target
      target.parentElement.parentElement.parentElement.parentElement.remove()
    })


}

addTask.addEventListener('click', addTodo)