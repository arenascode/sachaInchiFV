
console.log('hello world!!');
 const nav = document.querySelector(".nav");
 const topOfNav = nav.offsetTop;

 function fixNav() {
   const offsetTop = window.scrollY;
   console.log({offsetTop});
   console.log({topOfNav});
   
   if (offsetTop >= topOfNav) {
     document.body.classList.add("fixed-nav");
     document.body.style.paddingTop = nav.offsetHeight + "px";
   } else {
     document.body.style.paddingTop = 0;
     document.body.classList.remove("fixed-nav");
   }
 }

 const moreinfoHeroBtn = document.getElementById('moreInfoHero'
 )

 const targetSection = document.getElementById('whatIsSachaInchi')

moreinfoHeroBtn.addEventListener('click', () => {
  targetSection.scrollIntoView({ behavior: "smooth", block:"start"})
 })
 window.addEventListener("scroll", fixNav);
