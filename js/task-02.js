const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
const makeIngredients =  option =>{
  return option.map(option => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = (option);
    ingredientsEl.classList.add('item');
    return ingredientsEl; 
  })

}

const elements = makeIngredients(ingredients);
ingredientsList.append(...elements)
console.log(ingredientsList )

// const li= document.createElement("li");
// li.classList.add('item');
// li.textContent = ('Potatoes')
// element.appendChild(li);
// console.log(li)



// console.log(li)
// const ul = document.querySelector('ul')
// ul.appendChild(li);
// const header = document.createElement('li')
// header.textContent = ('Potatoes')
// console.log(header);
// li.insertAdjacentElement('afterbegin',header)

