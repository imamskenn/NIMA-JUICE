(function(){
const WA_NUMBER = '6283829560114';

// Best Seller Cards
const bestSellers = [
  {name:"Jus Alpukat",desc:"Hayang Deui!!",img:"https://img.freepik.com/free-photo/refreshing-avocado-smoothie_23-2151954260.jpg?t=st=1768214267~exp=1768217867~hmac=58296fb16765b0cd3d7190e1c86952081fc763d9929800126b173c17faa94067"},
  {name:"Cappucino Cincau",desc:"Madep Pokonamah!!",img:"https://img.freepik.com/free-photo/iced-coffee-latte_23-2151961339.jpg?t=st=1768220439~exp=1768224039~hmac=523efc88bf5db3de9d17abb5ec18eeaf46cc25fb0e3615b8c98525b7b81e1be2"},
  {name:"Jus Mangga",desc:"100% Mangga Aseli!!",img:"https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg?t=st=1768226534~exp=1768230134~hmac=ad658fe9d8f98a8816a3490dc3c5a74162ceee01e78ff6fabc5cc4fc3ee8a5f2"}
];

// JS
const cardsContainer = document.getElementById('best-seller-cards');
const cards = [];

// Buat card
bestSellers.forEach(item => {
  const div = document.createElement('div');
  div.className = "carousel-card flex flex-col gap-2 rounded-xl bg-white dark:bg-[#2d2c18] p-3 shadow-sm";
  div.innerHTML = `
    <div class="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl relative" 
         style='background-image:url("${item.img}")'></div>
    <div class="px-1 text-center">
      <p class="text-[#1c1b0d] dark:text-white text-lg font-bold">${item.name}</p>
      <p class="text-[#9c9549] text-sm font-medium">${item.desc}</p>
    </div>
  `;
  cardsContainer.appendChild(div);
  cards.push(div);
});

// Inisialisasi
let current = 0;
cards[current].classList.add('active');

function nextCard() {
  const prev = current;
  current = (current + 1) % cards.length;

  // Fade out prev
  cards[prev].classList.remove('active');

  // Delay sedikit sebelum next muncul
  setTimeout(() => {
    cards[current].classList.add('active');
  }, 500); // blur/fade out 0.5s
}

// Loop carousel
setInterval(nextCard, 3500); // 3 detik stay + 0.5 detik fade

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

  // Menu images
const menuImages = {
  "Jus Alpukat": "https://img.freepik.com/free-photo/refreshing-avocado-smoothie_23-2151954260.jpg",
  "Jus Mangga": "https://img.freepik.com/free-photo/mango-smoothie_23-2151954260.jpg",
  "Jus Buah Naga": "https://img.freepik.com/free-photo/dragon-fruit-smoothie_23-2151954260.jpg",
  "Jus Sirsak": "https://img.freepik.com/free-photo/soursop-smoothie_23-2151954260.jpg",
  "Jus Nanas": "https://img.freepik.com/free-photo/pineapple-juice_23-2151954260.jpg",
  "Jus Melon": "https://img.freepik.com/free-photo/melon-juice_23-2151954260.jpg",
  "Jus Jambu": "https://img.freepik.com/free-photo/guava-juice_23-2151954260.jpg",
  
  "Es Campur": "https://img.freepik.com/free-photo/mixed-ice-dessert_23-2151954260.jpg",
  "Es Lemon Selasih": "https://img.freepik.com/free-photo/lemon-basil-drink_23-2151954260.jpg",
  "Es Jeruk": "https://img.freepik.com/free-photo/orange-juice_23-2151954260.jpg",
  "CapCin": "https://img.freepik.com/free-photo/cappuccino_23-2151954260.jpg",
  "Pop Ice": "https://img.freepik.com/free-photo/pop-ice_23-2151954260.jpg",
  "Nutrisari": "https://img.freepik.com/free-photo/nutrisari_23-2151954260.jpg",
  "Teh Sisri": "https://img.freepik.com/free-photo/tea_23-2151954260.jpg"
};

// Fungsi buat bikin popup dengan animasi
function createPopup(item) {
  // Hapus popup lama kalau ada
  const old = document.getElementById("menu-popup");
  if(old) old.remove();

  // Tambah blur ke body
  document.body.classList.add("blurred-bg");

  const div = document.createElement("div");
  div.id = "menu-popup";
  div.className = `
    fixed inset-0 flex items-center justify-center z-50 p-4 
    bg-black/50 backdrop-blur-sm opacity-0 scale-90 transition-all duration-300
  `;
  div.innerHTML = `
    <div class="bg-white dark:bg-[#2d2c18] rounded-xl p-4 max-w-xs w-full text-center shadow-lg transform transition-all duration-300 scale-90 opacity-0">
      <button id="close-popup" class="absolute top-2 right-2 text-xl font-bold">&times;</button>
      <img src="${menuImages[item.name] || ''}" alt="${item.name}" class="w-40 h-40 object-contain mx-auto mb-4">
      <p class="text-[#1c1b0d] dark:text-white text-lg font-bold mb-2">${item.name}</p>
      <p class="text-primary font-black">${item.price}</p>
    </div>
  `;
  document.body.appendChild(div);

  // Trigger animasi masuk
  requestAnimationFrame(() => {
    div.style.opacity = "1";
    div.style.scale = "1";
    div.firstElementChild.style.opacity = "1";
    div.firstElementChild.style.scale = "1";
  });

  // Tutup popup
  document.getElementById("close-popup").addEventListener("click", () => {
    // animasi keluar
    div.style.opacity = "0";
    div.style.scale = "0.9";
    div.firstElementChild.style.opacity = "0";
    div.firstElementChild.style.scale = "0.9";

    // hapus blur dan popup setelah animasi
    setTimeout(() => {
      div.remove();
      document.body.classList.remove("blurred-bg");
    }, 300);
  });
}

// Tambah event listener ke menu Juice
menuJuice.forEach(item => {
  const div = [...juiceContainer.children].find(d => d.querySelector("p").textContent === item.name);
  if(div){
    div.style.cursor = "pointer";
    div.addEventListener("click", () => createPopup(item));
  }
});

// Tambah event listener ke menu Non-Juice
menuNonJuice.forEach(item => {
  const div = [...nonJuiceContainer.children].find(d => d.querySelector("p").textContent === item.name);
  if(div){
    div.style.cursor = "pointer";
    div.addEventListener("click", () => createPopup(item));
  }
});


// WA Order Button
document.getElementById('order-wa').onclick = ()=>window.open(`https://wa.me/${WA_NUMBER}`);

// Lihat Menu scroll to juice
document.getElementById('lihat-menu').onclick = ()=>juiceContainer.scrollIntoView({behavior:"smooth"});

})();
