function username(){
    const data = document.getElementById("UserName").value
    if(data.length<3)return false
    else return true
}

function email(){
    const data = document.getElementById("email").value
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(data))return true
    else return false
}

function mobilenumber(){
    const data = document.getElementById("number").value
    const regex = /^\+\d{1,3}$/
    if(data.length<3)return false
    else if(regex.test(data)!==true)return false
    else return true
}

function password(){
    const data = document.getElementById("password").value
    if(data.length<8)return false
    else return true
}

function RandomCode(){
    return Math.floor(Math.random() * 900000) + 100000;
}

const sendmail = (e) =>{
    e.preventDefault()
    var params = {
        team: "Test",
        to_name: document.getElementById("UserName").value,
        code: RandomCode(),
        email: document.getElementById("email").value
    }
    if(username()&&email()&&mobilenumber()&&password()){
        emailjs.send("service_pthlz4j","template_ybx6hmf",params)
        console.log("successful")
    }else{
        console.log("Failed")
    }
}

const submit = document.querySelector(".submit")

submit.addEventListener('click',sendmail)

const UserName = document.getElementById("UserName")
UserName.addEventListener('input',()=>{
    if(username()) UserName.style.borderBottom = "1px solid grey"
    else if(UserName.value==="")UserName.style.borderBottom = "1px solid grey"
    else UserName.style.borderBottom = "1px solid red"
})

const Email = document.getElementById("email")
Email.addEventListener('input',()=>{
    if(email())Email.style.borderBottom = "1px solid grey"
    else if(Email.value==="")Email.style.borderBottom = "1px solid grey"
    else Email.style.borderBottom = "1px solid red"
})

const mobile = document.getElementById("number")
mobile.addEventListener('input',()=>{
    if(mobilenumber())mobile.style.borderBottom = "1px solid grey"
    else if(mobile.value==="")mobile.style.borderBottom = "1px solid grey"
    else mobile.style.borderBottom = "1px solid red"
})

const Password = document.getElementById("password")
Password.addEventListener('input',()=>{
    if(password())Password.style.borderBottom = "1px solid grey"
    else if(Password.value==="")Password.style.borderBottom = "1px solid grey"
    else Password.style.borderBottom = "1px solid red"
})


