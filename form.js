const formulario = document.getElementById("form");
const input = document.querySelector(".form input");


const expresionValidacion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


const validarCorreo = (e) => {
	if(expresionValidacion.test(e.target.value)) {
		document.querySelector('.fa-exclamation-circle').classList.add('hidden');
		document.querySelector('.form__input-error').classList.remove('form__input-error--active');
	} else {
		document.querySelector('.fa-exclamation-circle').classList.remove('hidden');
		document.querySelector('.form__input-error').classList.add('form__input-error--active');
	}
}

input.addEventListener('keyup', validarCorreo);
input.addEventListener("blur", validarCorreo);

// formulario.addEventListener('submit', (e)=>{
// 	e.preventDefault();
// });