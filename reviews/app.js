// local reviews data

const reviews = [
 {
  id: 1,
  name: "susa smith",
  job: "web developer",
  img: "https://res.cloudinary.com/musekwa/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1616848232/samples/people/bicycle.jpg",
  text: "Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por lorem ipsum irá encontrar muitos websites ainda na sua infância",
 },
 {
  id: 2,
  name: "anna johson",
  job: "web designer",
  img: "https://res.cloudinary.com/musekwa/image/upload/v1616848228/samples/people/smiling-man.jpg",
  text: "É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso",
 },
 {
  id: 3,
  name: "maria carey",
  job: "software engineer",
  img: "https://res.cloudinary.com/musekwa/image/upload/v1616848230/samples/people/boy-snow-hoodie.jpg",
  text: "oi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum"
 },
 {
  id: 4,
  name: "john mario",
  job: "product manager",
  img: "https://res.cloudinary.com/musekwa/image/upload/v1616848226/samples/people/kitchen-bar.jpg",
  text: "Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet"
 }

];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
 //console.log("shake and bake")
 showPerson();
});

// show person based on item
function showPerson() {
 const item = reviews[currentItem];
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
 currentItem++;
 if (currentItem > reviews.length - 1){
  currentItem = 0;
 }
 showPerson();
});

// show next person
prevBtn.addEventListener('click', function(){
 currentItem--;
 if (currentItem < 0){
  currentItem = reviews.length - 1;
 }
 showPerson();
});

randomBtn.addEventListener("click", function(){
 const random = Math.floor(Math.random()*reviews.length);
 console.log(random);
 currentItem = random;
 showPerson();
})




