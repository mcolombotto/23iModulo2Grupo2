let ariaExpanded = document.getElementsByClassName('navbar-toggler')
let hijo = document.hasChildNodes(ariaExpanded)//devuelve true

let deleteButton = document.getElementsByClassName('deleteButton')
let toggler = document.getElementById('toggler')
//let lis = document.getElementsByTagName('li');
/* if(toggler?.onclick){
    
} */

const verMas = () => {
    console.log('dentro');
    console.log(deleteButton);
    
    if (deleteButton.className = "nav-item btn deleteButton"){
        return deleteButton.className = "nav-item deleteButton"
    }else{
        return deleteButton.className = "nav-item btn deleteButton"
    }

    console.log(deleteButton)
}