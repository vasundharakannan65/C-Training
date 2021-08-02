//to add new task
function newElement() 
{
    let myList = document.createElement("li")
    let inputValue = document.getElementById("addTask").value
    let data = document.createTextNode(inputValue)
    myList.appendChild(data)
    if (inputValue === '') 
    {
      alert("Invalid: Enter something!")
    } 
    else 
    {
      document.getElementById("myTaskList").appendChild(myList)
    }
    document.getElementById("addTask").value = "";

    //adding the close button 
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList.appendChild(span); 

    //hiding the task
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) 
    {
        close[i].onclick = function() 
        {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
} 

//for crossing over - completion
let list = document.querySelector('ul')
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked')
  }
}, false) 

//to delete all in the list
function deleteAll() 
{
    let listclr = document.getElementById("myTaskList").remove()
    return listclr
} 


