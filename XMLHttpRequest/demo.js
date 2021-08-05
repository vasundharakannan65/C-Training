/* const dataBody = document.querySelector('#example > tbody') 

function loadData()
{
    const req = new XMLHttpRequest()
    const result = req.open("GET","https://reqres.in/api/users?page=2")

    req.onload = () => 
    {
        //const json = JSON.parse(req.responseText)
        const rs = result.json().then( result => result.data)
        showData(rs)
    } 

    req.send()

} 

function showData(json)
{  
    json.forEach((r) => 
    {
        const tr = document.createElement('tr')

        r.forEach((c) => {
            const td = document.createElement('td')
            td.textContent = c 
            tr.appendChild(td)
        }) 

        dataBody.appendChild(tr)
    })
} 


document.addEventListener("DOMContentLoaded",() => 
{
    loadData() 
})  */


//another method
fetch("https://reqres.in/api/users?page=2").then(
    result => {
        result.json().then(
            result => {
                //console.log(result.data)
                let temp = "" 
                result.data.forEach(element => {
                         temp += "<tr>" 
                         temp += "<td>"+element.id+"</td>"
                         temp += "<td>"+element.email+"</td>"
                         temp += "<td>"+element.first_name+"</td>"
                         temp += "<td>"+element.last_name+"</td>" 
                         temp += "<td>"+element.avatar+"</td></tr>"
                })

                 document.getElementById("data").innerHTML = temp
            }
        )
    }
)