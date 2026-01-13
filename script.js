(function(){
const WA_NUMBER = '6283829560114';

// Best Seller Cards
const bestSellers = [
  {name:"Jus Alpukat",desc:"Hayang Deui!!",img:"https://img.freepik.com/free-photo/refreshing-avocado-smoothie_23-2151954260.jpg"},
  {name:"Cappucino Cincau",desc:"Madep Pokonamah!!",img:"https://img.freepik.com/free-photo/iced-coffee-latte_23-2151961339.jpg"},
  {name:"Jus Mangga",desc:"100% Mangga Aseli!!",img:"https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg"}
];

// Best Seller Carousel
const cardsContainer = document.getElementById('best-seller-cards');
const cards = [];

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

let current = 0;
cards[current].classList.add('active');

function nextCard() {
  const prev = current;
  current = (current + 1) % cards.length;
  cards[prev].classList.remove('active');
  setTimeout(() => cards[current].classList.add('active'), 500);
}

setInterval(nextCard, 3500);

// Menu Juice
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
  div.className="flex justify-between items-center bg-white dark:bg-[#2d2c18] rounded-xl p-3 shadow-sm hover:bg-primary/10 cursor-pointer transition";
  div.innerHTML=`<p class="font-bold">${item.name}</p><p class="text-primary font-black">${item.price}</p>`;
  juiceContainer.appendChild(div);
});

// Menu Non-Juice
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
  div.className="flex justify-between items-center bg-white dark:bg-[#2d2c18] rounded-xl p-3 shadow-sm hover:bg-primary/10 cursor-pointer transition";
  div.innerHTML=`<p class="font-bold">${item.name}</p><p class="text-primary font-black">${item.price}</p>`;
  nonJuiceContainer.appendChild(div);
});

// Menu Images
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

// Create Popup Function
function createPopup(item){
  const old = document.getElementById("menu-popup");
  if(old) old.remove();

  // overlay blur
  const overlay = document.createElement('div');
  overlay.id = 'menu-overlay';
  overlay.className = 'fixed inset-0 bg-black/30 backdrop-blur-sm z-40';
  document.body.appendChild(overlay);

  // modal content
  const modal = document.createElement('div');
  modal.id = 'menu-popup';
 modal.className = `fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none`;
  modal.innerHTML = `
    <div class="bg-white dark:bg-[#2d2c18] rounded-xl p-4 w-full max-w-xs text-center shadow-lg flex flex-col items-center gap-3">
      <img src="${menuImages[item.name] || ''}" alt="${item.name}" class="w-40 h-40 object-contain mx-auto mb-2">
      <p class="text-[#1c1b0d] dark:text-white text-lg font-bold">${item.name}</p>
      <p class="text-primary font-black mb-2">${item.price}</p>
      <div class="flex gap-2 items-center">
        <input type="number" min="1" value="1" id="order-qty" class="border rounded px-2 w-16 text-center" />
        <button id="order-btn" class="bg-green-500 text-white px-3 py-1 rounded">Order</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // animasi masuk
  requestAnimationFrame(()=>{
    overlay.style.opacity='1';
    modal.firstElementChild.style.transform='scale(1)';
    modal.firstElementChild.style.opacity='1';
  });

  // close popup
 overlay.addEventListener('click', (e) => {
  if (e.target === overlay) { // pastikan klik di luar modal
    modal.firstElementChild.style.opacity='0';
    modal.firstElementChild.style.transform='scale(0.9)';
    setTimeout(() => {
      overlay.remove();
      modal.remove();
    }, 200); // sesuai durasi transition CSS
  }
});

  // Order button ke WA
  modal.querySelector('#order-btn').addEventListener('click', ()=>{
    const qty = modal.querySelector('#order-qty').value || 1;
    const msg = encodeURIComponent(`Halo, saya ingin pesan ${qty} x ${item.name} (${item.price})`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });
}

// Tambah event listener ke menu Juice
menuJuice.forEach(item => {
  const div = [...juiceContainer.children].find(d => d.querySelector("p").textContent === item.name);
  if(div){
    div.style.cursor='pointer';
    div.addEventListener('click', ()=>createPopup(item));
  }
});

// Tambah event listener ke menu Non-Juice
menuNonJuice.forEach(item => {
  const div = [...nonJuiceContainer.children].find(d => d.querySelector("p").textContent === item.name);
  if(div){
    div.style.cursor='pointer';
    div.addEventListener('click', ()=>createPopup(item));
  }
});

// WA Order Button
document.getElementById('order-wa')?.addEventListener('click', ()=>window.open(`https://wa.me/${WA_NUMBER}`));

// Lihat Menu scroll to juice
document.getElementById('lihat-menu')?.addEventListener('click', ()=>juiceContainer.scrollIntoView({behavior:"smooth"}));

})();

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  const maxScroll = 200;
  const scrollTop = Math.min(window.scrollY, maxScroll);

  // tinggi dari 80 → 50
  const baseHeight = 435;
  const minHeight = 50;
  const currentHeight = baseHeight - (scrollTop / maxScroll) * (baseHeight - minHeight);
  nav.style.height = currentHeight + 'px';

  // radius bawah dari 0 → 16px
  const maxRadius = 50;
  const currentRadius = (scrollTop / maxScroll) * maxRadius;
  nav.style.borderBottomLeftRadius = currentRadius + 'px';
  nav.style.borderBottomRightRadius = currentRadius + 'px';
});

