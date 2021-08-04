/*class Student 
{
    constructor(firstname,lastname,email,dob,mobilenum)
    {
        this.firstName = firstname 
        this.lastName = lastname 
        this.email = email 
        this.dob = dob 
        this.mobilenum = mobilenum
    }
} 

Student.prototype.getFullName = function() 
{
    return this.firstName + " " + this.lastName;
} 

Student.prototype.getDetails = function()
{
    let info = `Name : ${Student.prototype.getfullname}\n
                Email: ${this.email}\n 
                DateOfBirth: ${this.dob}\n
                MobileNo.: ${this.mobilenum}` 
    return info
} 
*/
const myStudents = [] 

document.getElementById("submitButton").addEventListener("click", function()   
{   

    const fname = document.getElementById('firstname').value
    const lname = document.getElementById('lastname').value
    const mail = document.getElementById('email').value
    const dob = document.getElementById('dob').value
    const mobilenum = document.getElementById('mobilenum').value 

    const student = {
        fname : fname,
        lname : lname, 
        mail : mail, 
        dob : dob, 
        mobilenum : mobilenum
    } 

    myStudents.push(student) 
    myStudents.value = ""
    alert('successfully submitted')
    
    localStorage.setItem("myStudents",JSON.stringify(myStudents)) 

    const data = JSON.parse(localStorage.getItem('myStudents'))

    document.getElementById('storeddata').innerHTML = data
})
 


