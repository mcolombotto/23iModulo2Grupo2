// Variables globales

const formularioUI = document.querySelector("#formulario");
const listaTitulosUI = document.getElementById("listaTitulos");
const listaCategoriasUI = document.getElementById("categorias");
let arrayTitulos = [];
let arrayCategorias = [];
const urlCategorias= "json/categorias.json";
fnCargarCategorias();


// Funciones
function fnCargarCategorias() {
  let list = "";
  fetch(urlCategorias)
  .then(res => res.json())
  .then(datos => {
    for(let i of datos["categorias"]){
      arrayCategorias.push(i.name);
    }
    for (var j = 0; j < arrayCategorias.length; j++) {
    	list += "<option value='"+ arrayCategorias[j] +"'>"+ arrayCategorias[j] +"</option>"; 
		}
    listaCategoriasUI.innerHTML = list;
    
  });
  
  
}

const CrearItem = (titulo, categoria, descripcion, publicado, imagen) => {

  
  let item = {
    titulo: titulo,
    categoria: categoria,
    descripcion: descripcion,
    publicado: publicado,
    imagen: imagen,
    destacado: "n",
  };

  arrayTitulos.push(item);
 
  return item;
};

const GuardarDB = () => {
  localStorage.setItem("titulos", JSON.stringify(arrayTitulos));

  PintarDB();
};

const PintarDB = () => {
  let texto = "";
  let iconPublicado = "";
  listaTitulosUI.innerHTML = "";


  arrayTitulos = JSON.parse(localStorage.getItem("titulos"));
  
  if (arrayTitulos === null) {
    arrayTitulos = [];
  } else {
    arrayTitulos.forEach((element) => {
      texto = "";
      iconPublicado = "";
      if(element.destacado == "n"){
        texto = ' <button class="material-icons data-toggle="tooltip" data-placement="top" title="Destacar" on top">star</button>';
      }else{
        texto = ""
      }

      if(element.publicado == 's'){
        iconPublicado = '<i class="material-icons">check_circle</i>';
      }else{
        iconPublicado = ""
       
      }

      listaTitulosUI.innerHTML += `
      <div class="container alert alert-secondary " role="alert">
      <div class="row">
        <div class="col col-1">
         
        ${iconPublicado}
         
        </div>
        <div class="col col-9" >
          <img src="img/${element.imagen}" width="40px" height="40px" alt="">
          <b>${element.titulo}</b> - 
          ${element.categoria}- 
          ${element.descripcion}-
        </div>
        <div class="col col-2">
          <span class="float-right" >
            <button id=${element.titulo} class="material-icons  data-toggle="tooltip" data-placement="top" title="Editar" on top" >edit</button>
            <button class="material-icons data-toggle="tooltip" data-placement="top" title="Borrar" on top">delete</button>
            ${texto}
          </span>
        </div>
      </div>
      </div>`;

    });
  }
};

const EliminarDB = (titulo) => {
  let indexArray;
  arrayTitulos.forEach((elemento, index) => {
    if (elemento.titulo === titulo) {
      indexArray = index;
    }
  });
  
  arrayTitulos.splice(indexArray, 1);
  GuardarDB();
};

const EditarDB = (titulo) => {
  /*let indexArray = arrayTitulos.findIndex(
    (elemento) => elemento.titulo = titulo
    
  );*/

  let indexArray;
  arrayTitulos.forEach((elemento, index) => {
    if (elemento.titulo === titulo) {
      indexArray = index;
    }
  });

   
 
  /*document.formulario.titulo.value == titulo; */
  

  GuardarDB();
};

// EventListener

formularioUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let tituloUI = document.querySelector("#titulo").value;
  let categoriaUI = document.querySelector("#categorias").value;
  let descripcionUI = document.querySelector("#descripcion").value;
  let publicadoUI = "";
  let imagenUI = document.querySelector("#imagen").files[0].name; 

  var isChecked = document.getElementById('publicado').checked;
    if(isChecked) {
      publicadoUI = 's'
    }else{
      publicadoUI = 'n'
    }

  
  

 
  CrearItem(tituloUI, categoriaUI, descripcionUI, publicadoUI, imagenUI);
  GuardarDB();

  formularioUI.reset();
});

document.addEventListener("DOMContentLoaded", PintarDB);

listaTitulosUI.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.innerHTML === "edit" || e.target.innerHTML === "delete") {
    let texto = e.path[2].childNodes[1].innerHTML;
    
       
    if (e.target.innerHTML === "delete") {
      // Accción de eliminar
      EliminarDB(texto);
    }
    if (e.target.innerHTML === "edit") {
      // Accción de editar
      
      EditarDB(texto);
    }
  }
});
