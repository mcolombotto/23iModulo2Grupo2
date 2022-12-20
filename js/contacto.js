const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subject = "Mi consulta a fillmax"
const textareaInput = document.getElementById("textarea");
const form = document.getElementById("formContacto");
const parrafo = document.getElementById("warning");
const apiKey = 'c97302966cac6b657762d6ea0c54bc06'
const secretKey = '3ae885b76255f2259705f22d3579099c'

 function sendEmail(name, email, subject, message) {
    debugger;
    const myHeaders = {
        "Content-Type": "application/json",
        'Authorization': 'Basic' + btoa(`${apiKey}:${secretKey}`),
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/',
        'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS"
    };

    const data = JSON.stringify({
        "Messages": [{
            "From": { "Email": email, "Name": name },
            "To": [{ "Email": 'yulianamallorga@gmail.com', "Name": "form" }],
            "Subject": subject,
            "TextPart": message
        }]
    }); 

     const requestOptions = JSON.stringify({
        method: 'POST',
        headers: myHeaders,
        body: data,
    });

     return fetch(`https://api.mailjet.com/v3.1/send`, requestOptions)
       .then(response => response.text())
       .then(result => console.log(result))
        .catch(error => console.log('error', error));
} 

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning=""
    let hasError = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nameInput.value.length <7){
      warning +=`El nombre no es valido. <br>`
       hasError = true
    }
    if (!regexEmail.test(emailInput.value)){
        warning += `El email no es valido. <br>`
        hasError = true

    }
    if (textareaInput.value.length < 5){
        warning += `Escribe un mensaje mas largo. <br>`
        hasError = true
    }
    if(hasError){
        parrafo.innerHTML = warning
    }else{
        Swal.fire({
            title: "Enviado👌",
            width: 300,
            padding: '4em',
            color: '#716add',
            background: '#fff',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://ouch-cdn2.icons8.com/uKHtopmZTy7WgEsMrAtAs0I7kxCr7zVz3kNLr-CGPQc/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzI1/Lzg2ZTc5MWQxLTYz/NDYtNDI5MC05Mjlj/LTk3NjBmMzM5MDYy/Ny5zdmc.png")
            left top
            no-repeat
        ` })
        
        sendEmail(nameInput.value,emailInput.value,subject,textareaInput.value); 
        form.reset();
    }
})

