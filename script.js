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

    // blur body
    document.querySelector('.main-content').classList.add('blurred');

    // overlay blur
    const overlay = document.createElement('div');
    overlay.id = 'menu-overlay';
    overlay.className = 'fixed inset-0 bg-black/30 backdrop-blur-sm z-40';
    document.body.appendChild(overlay);

    // modal content
    const modal = document.createElement('div');
    modal.id = 'menu-popup';
    modal.className = `fixed inset-0 flex items-center justify-center z-50 p-4`;
   modal.innerHTML = `
  <div class="bg-white dark:bg-[#2d2c18] rounded-xl overflow-hidden w-[80vw] max-w-[280px] max-h-[80vh] text-center shadow-lg flex flex-col items-center">
  <div class="w-full h-[160px]">
    <img src="${menuImages[item.name] || ''}" 
         alt="${item.name}" 
         class="w-full h-full object-cover" />
  </div>
  <div class="p-4 flex flex-col items-center gap-3 overflow-y-auto">
    <p class="text-[#1c1b0d] dark:text-white text-lg font-bold">${item.name}</p>
    <p class="text-primary font-black mb-2">${item.price}</p>
    <div class="flex gap-2 items-center">
      <input type="number" min="1" value="1" id="order-qty"
             class="h-10 min-w-[50px] px-3 border rounded-full text-center shadow-sm" />
      <button type="button" id="order-btn"
              class="h-10 px-4 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold shadow-md transition">
        Order
      </button>
    </div>
  </div>
</div>
`;

    document.body.appendChild(modal);

   // animasi masuk
requestAnimationFrame(() => {
  modal.classList.add('show');
});

// cegah klik di dalam card menutup popup
modal.firstElementChild.addEventListener('click', e => e.stopPropagation());

// close popup saat klik overlay
overlay.addEventListener('click', () => {
  modal.firstElementChild.style.opacity = '0';
  modal.firstElementChild.style.transform = 'scale(0.9)';
  setTimeout(() => {
    overlay.remove();
    modal.remove();
    document.querySelector('.main-content').classList.remove('blurred');
  }, 200);
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

// Real-time scroll-based navbar morph (height, bottom radius, background opacity, title scaling)
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  const title = nav?.querySelector('h2');
  if (!nav) return;

  const maxScroll = 200;
  const s = Math.min(window.scrollY, maxScroll) / maxScroll;

  // Height from 96px (p-6 area) → 56px
  const baseH = 96;
  const minH = 56;
  const h = baseH - s * (baseH - minH);
  nav.style.height = h + 'px';

  // Bottom radius from 0 → 50px
  const maxRadius = 50;
  const r = s * maxRadius;
  nav.style.borderBottomLeftRadius = r + 'px';
  nav.style.borderBottomRightRadius = r + 'px';

  // Background opacity from 0.80 → 1.00 (more solid on scroll)
  const baseOpacity = 0.80;
  const currentOpacity = baseOpacity + s * 0.20;
  nav.style.backgroundColor = `rgba(244, 226, 37, ${currentOpacity})`;

  // Title scale and letter-spacing subtle
  if (title) {
    const scale = 1 - s * 0.08; // 1 → 0.92
    title.style.transform = `scale(${scale})`;
    title.style.letterSpacing = `${-0.015 + s * 0.010}em`;
    // Text color stays via Tailwind; no change needed for contrast
  }
});

// Parallax for particles (soft)
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.particle').forEach((el, i) => {
    const speed = 0.03 + i * 0.01;
    el.style.transform = `translateY(${-(y * speed)}px)`;
  });
});
