let a = document.createElement("a");
a.href = "http://hackertyper.com/";
a.textContent = "Hack!";

document.body.appendChild(a);


// Use my-favorite-movies example to create my-favorite-books
let bookList = document.getElementById("my-favorite-books");
let bookListArray = [...bookList.children];
let favBook3 = document.createElement('li');

favBook3.textContent = "The Beautiful and Damned";
bookList.appendChild(favBook3);


// 
let favBook4 = document.createElement('li');
favBook4.textContent = 'Every Breath';

let firstBook = bookList.children[0];
console.log(firstBook);

bookList.insertBefore(favBook4, firstBook);
// 

let closet = document.getElementById('my-closet');
let closetArray = [...closet.children];
let blueShirt = document.createElement('li');
blueShirt.textContent = "Blue Shirt";

let firstClothing = closet.children[0];
console.log(firstClothing);

closet.insertBefore(blueShirt, firstClothing);


// Moving Elements: Create the dinner section using JavaScript only

let dinnerSection = document.createElement('ul');
dinnerSection.textContent = 'Dinner:';
let dinnerSectionArray = [...dinnerSection.children];
document.body.appendChild(dinnerSection);


let pizza = document.createElement('li');
pizza.textContent = 'Pizza';
dinnerSection.append(pizza);

let tea = document.createElement('li');
tea.textContent = 'Tea';
dinnerSection.insertBefore(tea, pizza);

let plov = document.createElement('li');
plov.textContent = 'Plov';
dinnerSection.insertBefore(plov, pizza);

let cake = document.createElement('li');
cake.textContent = 'Cake';
dinnerSection.append(cake);

