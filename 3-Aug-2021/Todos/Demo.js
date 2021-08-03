let myTasks = []
let task = document.getElementById('addTask')
let taskList = document.getElementById('myTaskList')

document.getElementById('addButton').addEventListener('click',function()
{   
    myTasks.push(task.value) 
    task.value = ""
    addToLocalStorage(myTasks) 
}) 

function printTasks()
{   
    taskList.innerHTML = ""
    myTasks.forEach(function(n,i)
    {
        taskList.innerHTML += "<li>"+n+"<a onclick ='deleteTask("+i+")'>&times;</a>"+"<a onclick = 'editTask("+i+")'>&#128393;</a></li>"
        let list = document.querySelector('ul')
        list.addEventListener('click', function(ev) 
        {
            if (ev.target.tagName === 'LI') 
            {
                ev.target.classList.toggle('checked')
            }
        }, false) 
    })
} 

function addToLocalStorage(myTasks)
{
    localStorage.setItem(myTasks,JSON.stringify(myTasks))
    printTasks()
} 

function getFromLocalStorage()
{
    const reference = localStorage.getItem('myTasks')
    if(reference)
        myTasks = JSON.parse(reference)
        printTasks()
} 

getFromLocalStorage()

function deleteTask(i)
{
    myTasks.splice(i,1)
    printTasks()
}
     
function deleteAllTasks() 
{
    let listclr = document.getElementById("myTaskList").remove()
    return listclr
} 

function editTask(i)
{
    var editedTask = prompt("Enter the new task")
    myTasks.splice(i,1,editedTask)
    printTasks()
} 
