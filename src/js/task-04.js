

const counters = document.querySelector('#counter')
  const buttons = document.querySelectorAll('[data-action]')
    console.log(counters)
    buttons.forEach (
      btn => btn.addEventListener('click' ,function(){
const increments = this.dataset.increments;
const inp = this.parentElement.querySelector('#value');
const currentValue = +inp.value;
let newValue ;
if(increments === 'increment'){
  newValue = currentValue + 1 ;
}
console.log(newValue)
      })

    )
    

    



