import"./assets/mob-menu-82f1e644.js";const s=document.querySelector(".loading-title"),i=document.querySelector(".hero-section");let l=0,d=setInterval(u,20);function u(){l++,l>99&&clearInterval(d),s.innerText=`${l}%`,s.style.opacity=r(l,0,100,1,0),i.style.filter=`blur(${r(l,0,60,30,0)}px)`}const r=(e,t,o,n,a)=>(e-t)*(a-n)/(o-t)+n,y=document.querySelectorAll('a[href^="#"]');for(let e of y)e.addEventListener("click",function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});const c=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?c.style.display="block":c.style.display="none"});c.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const f=document.querySelectorAll(".faq");f.forEach(e=>{const t=e.querySelector(".faq-toggle"),o=e.querySelector(".faq-text");t.addEventListener("click",()=>{e.classList.contains("active")?(e.classList.remove("active"),o.style.display="none"):(e.classList.add("active"),o.style.display="block")})});
//# sourceMappingURL=commonHelpers2.js.map