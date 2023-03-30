const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=300',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=300',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=300',
    alt: 'Group of Horses Running',
   
  },
 
];

const gallery = document.querySelector('.js-gallery');
const marcup = images.map(({url, alt,}) =>
   `<li> 
   <img src="${url}" alt="${alt}" class="img" >
</li> `).join('');
gallery.insertAdjacentHTML('beforeend', marcup);

console.dir(marcup)