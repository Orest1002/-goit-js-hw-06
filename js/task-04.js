
// 
const counters = document.querySelector('#value');
  const buttonsDecrement = document.querySelector('[data-action="decrement"]');
  const buttonsIncrement = document.querySelector('[data-action="increment"]');
    let masseg = 0;

    buttonsDecrement.addEventListener('click', ()=> {
      masseg -=1,
      counters.textContent = masseg
    });
    buttonsIncrement.addEventListener('click',() =>{ 
      masseg +=1,
      counters.textContent = masseg
    })


   
    

    



