const typeInput = document.querySelector("#validation-input");

typeInput.addEventListener('blur',() => {
   if (typeInput.value.length === Number.parseInt(typeInput.dataset.length)) {
    typeInput.classList.add('valid');
    typeInput.classList.remove('invalid'); }
    else {
        typeInput.classList.remove('valid');
        typeInput.classList.add('invalid');
    } 
});





