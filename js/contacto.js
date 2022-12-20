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
        Swal.fire({
            title: "Enviado👌",
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://ouch-cdn2.icons8.com/uKHtopmZTy7WgEsMrAtAs0I7kxCr7zVz3kNLr-CGPQc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzI1/Lzg2ZTc5MWQxLTYz/NDYtNDI5MC05Mjlj/LTk3NjBmMzM5MDYy/Ny5zdmc.png")
    left top
    no-repeat
  `
        })
    }
})

