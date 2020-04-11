let name = document.getElementById("Name1")
let email = document.getElementById("Email")
let tel = document.getElementById("tel")
let message = document.getElementById("message")
let submitBtn = document.getElementById("whatsapp")

let usermessage = {
    Name: name.value,
    Email: email.value,
    Tel: tel.value,
    Message : message.value
}

function handleChange() {
    usermessage.Name = name.value
    usermessage.Email = email.value
    usermessage.Tel = tel.value
    usermessage.Message = message.value
}


// function change() {
//     submitBtn
// }

submitBtn.addEventListener('click', change)