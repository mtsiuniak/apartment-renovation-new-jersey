import"./assets/styles-d15b0f6b.js";const u=document.querySelector(".mobile-open-btn"),r=document.querySelector(".mobile-menu"),d=document.querySelector(".button-close"),m=()=>r.classList.toggle("is-open"),g=()=>r.classList.toggle("is-open");u.addEventListener("click",m);d.addEventListener("click",g);const i=document.querySelectorAll(".panel");i.forEach(e=>{e.addEventListener("click",()=>{v(),e.classList.add("active")})});function v(){i.forEach(e=>{e.classList.remove("active")})}const f=document.querySelectorAll(".faq-toggle");f.forEach(e=>{e.addEventListener("click",()=>{e.parentNode.classList.toggle("active")})});const l=document.querySelector(".loading-title"),L=document.querySelector(".hero-section");let t=0,b=setInterval(y,30);function y(){t++,t>99&&clearInterval(b),l.innerText=`${t}%`,l.style.opacity=s(t,0,100,1,0),L.style.filter=`blur(${s(t,0,60,30,0)}px)`}const s=(e,o,n,c,a)=>(e-o)*(a-c)/(n-o)+c,h=document.querySelectorAll('a[href^="#"]');for(let e of h)e.addEventListener("click",function(o){o.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})});
//# sourceMappingURL=commonHelpers2.js.map
