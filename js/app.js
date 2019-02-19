//variables
const carrito = document.getElementById('carrito')
const listaCursos = document.getElementById('lista-cursos')

//Listeners

function loadEventListeners() {
    listaCursos.addEventListener('click', buyCourse)
}
loadEventListeners()

//funciones

function buyCourse(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement

        getInfoCourse(curso)
    }
}

function getInfoCourse(curso) {
    const infoCourse = {
        image: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('p span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    addCourseToShoppingCar(infoCourse)
}

function addCourseToShoppingCar(curso) {
    const row = document.createElement('tr')
    row.innerHTML = `
          <td>  
               <img src="${curso.image}" width="100">
          </td>
          <td>${curso.titulo}</td>
          <td>${curso.precio}</td>
          <td>
               <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
          </td>
     `;
    listaCursos.appendChild(row)
}