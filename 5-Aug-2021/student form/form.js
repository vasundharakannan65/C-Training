let addStudents = []

class Student 
{
    constructor(firstname, lastname, email, dob, mobilenum) 
    {
        this.firstName = firstname
        this.lastName = lastname
        this.email = email
        this.dob = dob
        this.mobileNum = mobilenum
    }
}

Student.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}

Student.prototype.getDetails = function () {
    let info = `Name : ${this.getFullName()}\n
                Email: ${this.email}\n 
                DateOfBirth: ${this.dob}\n
                MobileNo.: ${this.mobileNum}`
    return info
}

function GetDetails() 
{

    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let dob = document.getElementById('dob').value
    let mobileNum = document.getElementById('mobilenum').value

    let s = new Student(firstName, lastName, email, dob, mobileNum)

    if (s) 
    {
        addStudents.push(s)
        alert('Submitted successfully')
    }
    
    localStorage.setItem('key', JSON.stringify(addStudents)) 

    document.getElementById('studentdetails').innerHTML = s.getDetails()
}  

function clearData()
{
    document.getElementById("myform").reset()
}

