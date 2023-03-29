const typeInput = document.querySelector("#validation-input");
// typeInput.addEventListener('focus',onInputFocus);
typeInput.addEventListener('blur',() => {
   if (typeInput.length === 'data-length') {
    typeInput.classList.add('valid')}
    else {
        typeInput.classList.add('invalid')
    } 
});

    console.log(typeInput.value)




