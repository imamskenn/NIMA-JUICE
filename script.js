(function(){
const WA_NUMBER = '6281234567890';

// Best Seller Cards
const bestSellers = [
  {name:"Alpukat Kocok",desc:"Extra Creamy & Sweet",price:"Rp 18.000",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuB51TUNn_XgbdiyOUVNJlrSLW5BVnNLgC4sfheXHQ1Mnp6bYm0Pq6k_Gv1SZL0zU6iVrsI_OsMw7OemZAZjzCNGYh0efYel993HK4FnE3Lsy29I1kB5GSW7ljOTwhgOscKUHdZBT7Ndmx5QgG_6FMPsYN6H81cxSVTEbVYh-q9ZYbpBjaMSWZo9nwt1OBiR_vhFIaT0uLjdCRA89D4QB4Q62z70iElI7OStAtg6G9nlIpvBVzdf2PgFWcoBNfA7-MfS-bEgF-wMIXV7"},
  {name:"Mango Thai",desc:"Fresh Mango Puree",price:"Rp 22.000",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuCvR2OKAySiH_JDT0Qcs0lu2FzGDtbVQWUB0iryFTkA2QJGKm57lG-nTBWJUWwOT4oaI1Wh8aUleAPEdq2hR-1p0_EWBL4Ye-Do5gSNLeDiDxlJZ9qU3IEXox2xiKwM8KBowZDn_lXjL-n2FmbV7ov0S83Vbs6z8xjjLS9zBTaBPETQTQDRNnq4UoNIx2DcGY0Mij7neawcRK4V0Kh-H1OrH-wi3EC2bLVkCpaCmEE2Ul2SMzBDuQpl0TMlvLNDpm3hqGT1vDR8ONpu"},
  {name:"Jus Jeruk Murni",desc:"100% Sunkist Fresh",price:"Rp 15.000",img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAuSj1uDMPJIUX5nQgfP0-7IAej7RNDT6UxRctuQhqYGABShkarnaA5amFRyjb7mudtN5qfyN8NFp46c0B1DqIScSJFPn-7fsOvrSKDgkQv-muru6TE_Dg99cbg933Q-dyydeNw9sJlgWNNhGEKaIgM723ZlpYqlNzwbc-v2tb0apfpNakOwg1QCgPfhqbxbp602qQEmr43JYGq-4mzS2LvSPqN67Ge1rKn-dYyCkXVoXO7Az4X92DErVaGLQ0D_aJU9i-bMndHsPPs"}
];

// loop untuk marquee
const cardsContainer = document.getElementById('best-seller-cards');
bestSellers.concat(bestSellers).forEach((item,index)=>{
    const div = document.createElement('div');
    div.className = "flex h-full flex-col gap-4 rounded-xl w-[50%] snap-center bg-white dark:bg-[#2d2c18] p-3 shadow-sm";
    div.innerHTML = `
      <div class="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-xl relative" style='background-image:url("${item.img}")'>
        <div class="absolute top-3 left-3 bg-primary px-3 py-1 rounded-full text-xs font-bold text-[#1c1b0d]">#${index+1}</div>
      </div>
      <div class="px-1">
        <p class="text-[#1c1b0d] dark:text-white text-lg font-bold">${item.name}</p>
        <p class="text-[#9c9549] text-sm font-medium">${item.desc}</p>
        <div class="flex justify-between items-center mt-3">
          <span class="text-lg font-black text-primary">${item.price}</span>
          <button class="bg-primary/20 p-2 rounded-full text-[#1c1b0d] dark:text-white">
            <span class="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    `;
    cardsContainer.appendChild(div);
});

// Menu Juice Example
const menuJuice = [
  {name:"Jus Apel",price:"Rp 12.000"},
  {name:"Jus Mangga",price:"Rp 15.000"},
  {name:"Jus Jeruk",price:"Rp 10.000"},
  {name:"Jus Melon",price:"Rp 14.000"}
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
  {name:"Es Teh",price:"Rp 5.000"},
  {name:"Air Mineral",price:"Rp 3.000"}
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
