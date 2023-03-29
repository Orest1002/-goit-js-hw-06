const fontSizeControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSizeControl.addEventListener('input', sizeControle);
function sizeControle () {
    textSize.style.fontSize =`${fontSizeControl.value}px`;  

}

 