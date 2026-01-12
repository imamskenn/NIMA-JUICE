(function(){
const WA_NUMBER = '6283829560114';

// Best Seller Cards
const bestSellers = [
  {name:"Jus Alpukat",desc:"Hayang Deui!!",price:"Rp 5K",img:"https://img.freepik.com/free-photo/refreshing-avocado-smoothie_23-2151954260.jpg?t=st=1768214267~exp=1768217867~hmac=58296fb16765b0cd3d7190e1c86952081fc763d9929800126b173c17faa94067"},
  {name:"Cappucino Cincau",desc:"Madep Pokonamah!!",price:"Rp 5K",img:"https://img.freepik.com/free-photo/iced-coffee-latte_23-2151961339.jpg?t=st=1768220439~exp=1768224039~hmac=523efc88bf5db3de9d17abb5ec18eeaf46cc25fb0e3615b8c98525b7b81e1be2"},
  {name:"Jus Mangga",desc:"100% Mangga Aseli!!",price:"Rp 5K",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAuSj1uDMPJIUX5nQgfP0-7IAej7RNDT6UxRctuQhqYGABShkarnaA5amFRyjb7mudtN5qfyN8NFp46c0B1DqIScSJFPn-7fsOvrSKDgkQv-muru6TE_Dg99cbg933Q-dyydeNw9sJlgWNNhGEKaIgM723ZlpYqlNzwbc-v2tb0apfpNakOwg1QCgPfhqbxbp602qQEmr43JYGq-4mzS2LvSPqN67Ge1rKn-dYyCkXVoXO7Az4X92DErVaGLQ0D_aJU9i-bMndHsPPs"}
];

const cardsContainer = document.getElementById('best-seller-cards');
const cards = [];

// Buat card
bestSellers.forEach((item) => {
    const div = document.createElement('div');
    div.className = "flex-shrink-0 w-full flex flex-col gap-2 rounded-xl bg-white dark:bg-[#2d2c18] p-3 shadow-sm transition-all duration-700 ease-in-out";
    div.style.opacity = 0; // start hidden
    div.innerHTML = `
      <div class="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl relative" 
           style='background-image:url("${item.img}")'></div>
      <div class="px-1">
        <p class="text-[#1c1b0d] dark:text-white text-lg font-bold">${item.name}</p>
        <p class="text-[#9c9549] text-sm font-medium">${item.desc}</p>
      </div>
    `;
    cardsContainer.appendChild(div);
    cards.push(div);
});

// Carousel otomatis
let current = 0;
cards[current].style.opacity = 1;

setInterval(() => {
    // hide current
    cards[current].style.opacity = 0;
    cards[current].style.filter = "blur(4px)";
    
    // next card
    current = (current + 1) % cards.length;
    
    // show next
    cards[current].style.opacity = 1;
    cards[current].style.filter = "blur(0px)";
}, 3000); // 3 detik per card



// Menu Juice Example
const menuJuice = [
  {name:"Jus Alpukat",price:"Rp 5K"},
  {name:"Jus Mangga",price:"Rp 5K"},
  {name:"Jus Buah Naga",price:"Rp 5K"},
  {name:"Jus Sirsak",price:"Rp 5K"},
  {name:"Jus Nanas",price: "Rp 5K"},
  {name:"Jus Melon",price: "Rp 5K"}, 
  {name:"Jus Jambu",price: "Rp 5K"} 
];

const juiceContainer = document.getElementById('menu-juice');
menuJuice.forEach(item=>{
  const div = document.createElement('div');
  div.className="flex justify-between items-center bg-white dark:bg-[#2d2c18] rounded-xl p-3 shadow-sm";
  div.innerHTML=`<p class="font-bold">${item.name}</p><p class="text-primary font-black">${item.price}</p>`;
  juiceContainer.appendChild(div);
});

// Menu Non-Juice Example
const menuNonJuice = [
  {name:"Es Campur",price:"Rp 5K"},
  {name:"Es Lemon Selasih",price: "Rp 5K"}, 
  {name:"Es Jeruk",price:"Rp 5K"},
  {name:"CapCin",price: "Rp 5K"}, 
  {name:"Pop Ice",price: "Rp 3K"},
  {name:"Nutrisari",price: "Rp 3K"}, 
  {name:"Teh Sisri",price: "Rp 1K"}, 
];

const nonJuiceContainer = document.getElementById('menu-nonjuice');
menuNonJuice.forEach(item=>{
  const div = document.createElement('div');
  div.className="flex justify-between items-center bg-white dark:bg-[#2d2c18] rounded-xl p-3 shadow-sm";
  div.innerHTML=`<p class="font-bold">${item.name}</p><p class="text-primary font-black">${item.price}</p>`;
  nonJuiceContainer.appendChild(div);
});

// WA Order Button
document.getElementById('order-wa').onclick = ()=>window.open(`https://wa.me/${WA_NUMBER}`);

// Lihat Menu scroll to juice
document.getElementById('lihat-menu').onclick = ()=>juiceContainer.scrollIntoView({behavior:"smooth"});

})();
