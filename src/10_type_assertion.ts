///Condicional

const body1 = document.querySelector('body');
if(body1) body1.style.backgroundColor = 'red';

////Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.backgroundColor = 'red';

///HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Hello World';
input.focus();

///HTMLFormElement
const form = document.querySelector('.form') as HTMLFormElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(form.elements.name.value);
}
)

export default {};