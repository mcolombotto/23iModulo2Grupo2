const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textareaInput = document.getElementById("textarea");
const form = document.getElementById("formContacto");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning=""
    let enter = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nameInput.value.length <7){
      warning +=`El nombre no es valido. <br>`
       enter = true
    }
    if (!regexEmail.test(emailInput.value)){
        warning += `El email no es valido. <br>`
        enter = true

    }
    if (textareaInput.value.length < 5){
        warning += `El mensaje debe ser mas largo. <br>`
        enter = true
    }
    if(enter){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado👌"

    }
})

