
const list = document.querySelector("#categories");

const message = `Number of categories ${list.children.length} `
console.log(message);

 [...list.children].forEach(item => {

  
  
    console.log(`categories: ${item.firstElementChild.textContent}`);
    const messag = (item.lastElementChild.childElementCount)
    console.log(`Elements: ${messag}`)

    
   
})


