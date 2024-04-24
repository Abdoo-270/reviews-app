const data = [
  {
    img : 'images/person-1.jpg',
    name: 'Susan Smith',
    title : 'WEB DEVELOPER',
    description: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
  },
  {
    img : 'images/person-2.jpg',
    name: 'Anna Johnson',
    title : 'WEB DESIGNER',
    description: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
  },
  {
    img : 'images/person-3.jpg',
    name: 'Peter Jones',
    title : 'INTERN',
    description: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
  },
  {
    img : 'images/person-4.jpg',
    name: 'Bill Anderson',
    title : 'THE BOSS',
    description: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
  }
];

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const personImage = document.getElementById("img");
const personName = document.getElementById("name");
const personTitle = document.getElementById("title");
const personDescription = document.getElementById("description");
const randomBtn = document.getElementById("btn");

var key1 = 0;
rightBtn.addEventListener("click", function(){
  if (key1 < 3) {
    ++key1;
  }
  else if (key1 === 3) {
    key1 = 0;
  }
  personImage.src = data[key1].img
  personName.innerText = data [key1].name
  personTitle.innerText = data[key1].title
  personDescription.innerText = data[key1].description
})

leftBtn.addEventListener("click", function(){
  if(key1 === 0) {
    key1 = 4;
  }
  key1--;
  personImage.src = data[key1].img
  personName.innerText = data [key1].name
  personTitle.innerText = data[key1].title
  personDescription.innerText = data[key1].description

})
randomBtn.addEventListener("click",function(){
  const randomNum = Math.floor(Math.random()*4);
  personImage.src = data[randomNum].img
  personName.innerText = data [randomNum].name
  personTitle.innerText = data[randomNum].title
  personDescription.innerText = data[randomNum].description
})
