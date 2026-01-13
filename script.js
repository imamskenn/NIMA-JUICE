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
  modal.className = `fixed inset-0 flex items-center justify-center z-50 p-4`;
  modal.innerHTML = `
    <div class="bg-white dark:bg-[#2d2c18] rounded-xl p-4 w-full max-w-xs text-center shadow-lg flex flex-col items-center gap-3">
      <button id="close-popup" class="absolute top-2 right-2 text-xl font-bold">&times;</button>
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
  modal.querySelector('#close-popup').addEventListener('click', ()=>{
    modal.firstElementChild.style.opacity='0';
    modal.firstElementChild.style.transform='scale(0.9)';
    overlay.remove();
    modal.remove();
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

(() => {
  if (window.innerWidth > 768) return;

  /* ===============================
     VIRTUAL PAGES (FINAL FLOW)
  =============================== */
  const pages = [
    document.querySelector('.min-h-screen'), // Header

    document.querySelector('.py-8.bg-background-light'), // Best Seller

    // Menu Juice + Non Juice
    (() => {
      const wrap = document.createElement('div');
      wrap.className = 'nima-page';
      document.querySelector('#menu-juice').parentElement.before(wrap);
      wrap.append(
        document.querySelector('#menu-juice').parentElement,
        document.querySelector('#menu-nonjuice').parentElement
      );
      return wrap;
    })(),

    document.querySelector('.m-4.p-6.bg-primary'), // QR

    // Alamat + Social Media (FINAL PAGE)
    (() => {
      const wrap = document.createElement('div');
      wrap.className = 'nima-page nima-last';
      document.querySelector('.px-4.py-8').before(wrap);
      wrap.append(
        document.querySelector('.px-4.py-8'),
        document.querySelector('footer')
      );
      return wrap;
    })()
  ].filter(Boolean);

  let index = 0;
  let startY = 0;
  let locked = false;

  /* ===============================
     LOCK SCROLL
  =============================== */
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  /* ===============================
     STYLE
  =============================== */
  const style = document.createElement('style');
  style.innerHTML = `
    .nima-page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .nima-anim {
      transition:
        filter .35s ease,
        transform .35s ease,
        opacity .35s ease;
      will-change: filter, transform, opacity;
    }

    .nima-out {
      filter: blur(16px);
      transform: scale(.95);
      opacity: .35;
    }

    @keyframes nimaHint {
      0% { transform: translate(-50%,0); opacity:.4 }
      50% { transform: translate(-50%,-10px); opacity:1 }
      100% { transform: translate(-50%,0); opacity:.4 }
    }
  `;
  document.head.appendChild(style);

  pages.forEach(p => p.classList.add('nima-anim'));

  /* ===============================
     SWIPE HINT
  =============================== */
  const hint = document.createElement('div');
  Object.assign(hint.style, {
    position: 'fixed',
    bottom: '26px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '12px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#fff',
    opacity: '.7',
    zIndex: '9999',
    pointerEvents: 'none',
    animation: 'nimaHint 1.4s infinite'
  });
  document.body.appendChild(hint);

  /* ===============================
     HAPTIC
  =============================== */
  const haptic = (ms = 20) => {
    navigator.vibrate && navigator.vibrate(ms);
  };

  /* ===============================
     UPDATE HINT
  =============================== */
  function updateHint() {
    if (index === pages.length - 1) {
      hint.innerText = 'End';
    } else if (index === 0) {
      hint.innerText = 'Swipe up';
    } else {
      hint.innerText = 'Swipe up / down';
    }
  }

  updateHint();

  /* ===============================
     NAVIGATION
  =============================== */
  function goTo(next) {
    // STOP swipe UP di last page
    if (index === pages.length - 1 && next > index) {
      haptic(10);
      return;
    }

    if (locked) return;
    locked = true;

    const prev = pages[index];
    index = Math.max(0, Math.min(next, pages.length - 1));
    const current = pages[index];

    prev.classList.add('nima-out');
    haptic(18);

    setTimeout(() => {
      current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      pages.forEach(p => p.classList.remove('nima-out'));
      updateHint();

      if (index === pages.length - 1) haptic(30);

      setTimeout(() => (locked = false), 650);
    }, 180);
  }

  /* ===============================
     TOUCH HANDLER
  =============================== */
  window.addEventListener(
    'touchstart',
    e => (startY = e.touches[0].clientY),
    { passive: true }
  );

  window.addEventListener(
    'touchend',
    e => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 60) return;

      diff > 0 ? goTo(index + 1) : goTo(index - 1);
    },
    { passive: true }
  );

  /* ===============================
     BLOCK WHEEL
  =============================== */
  window.addEventListener(
    'wheel',
    e => e.preventDefault(),
    { passive: false }
  );
})();
