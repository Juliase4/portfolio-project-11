import{A as w,S as p,N as f,i as k}from"./assets/vendor-84cdfaf6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const q=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function E(e,s){const a=document.querySelector(s);let n="";e.forEach(t=>{const o=`
            <li class="faq-item">
                <h3 class="faq-item__header">
                    <button type="button" class="faq-item__btn">${t.question}</button>
                </h3>
                <div class="faq-item__content">
                    <div class="faq-item__content-inner">
                        <p>${t.answer}</p>
                    </div>
                </div>
            </li>
        `;n+=o}),a.innerHTML=n}E(q,".faq-list");new w(".faq-list",{duration:300,showMultiple:!0,elementClass:"faq-item",triggerClass:"faq-item__btn",panelClass:"faq-item__content"});const y=document.querySelector(".advantages"),_=[{title:"ABOUT ME",firstItem:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.",secondItem:" Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"ROLE",firstItem:"Frontend development",secondItem:"HeadlessCMS,Wordpress",thirdItem:"Blender(enjoy)"},{title:"EDUCATION",firstItem:"2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York",secondItem:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School,New York",thirdItem:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}];function P(){const e=_.map(({title:s,firstItem:a,secondItem:n,thirdItem:t=""})=>`<li class="advantages__item">
    <div class="advantages__ac">
      <h2 class="advantages__title">${s}</h2>
    </div>
    <div class="advantages__panel">
      <p class="advantages__text about">
        ${a}
      </p>
      <p class="advantages__text about">
       ${n}
      </p>
      <p class="advantages__text about">
       ${t}
      </p>
    </div>
  </li>`).join("");y.insertAdjacentHTML("afterbegin",e)}P();const S=new w(y,{duration:400,showMultiple:!0,elementClass:"advantages__item",triggerClass:"advantages__ac",panelClass:"advantages__panel"});S.open(0);new p(".my-swiper",{modules:[f],loop:!0,navigation:{nextEl:".about__section .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});const x=document.querySelector(".mobile-menu-close-btn"),B=document.querySelector(".header-mobile-open-btn"),c=document.querySelector(".mobile-menu"),T=document.querySelectorAll(".mob-menu-list-item"),C=document.querySelectorAll(".mob-button-link");T.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("is-open")})});C.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("is-open")})});x.addEventListener("click",()=>{c.classList.toggle("is-open")});B.addEventListener("click",()=>{c.classList.toggle("is-open")});const A=document.querySelector(".dropdown-nav-btn"),j=document.querySelector(".dropdown-nav-list");A.addEventListener("click",()=>{j.classList.toggle("visually-hidden")});const m=document.querySelector(".reviews-list"),M="https://portfolio-js.b.goit.study/api/reviews",O={method:"GET",headers:{Accept:"application/json"}};let h=[];async function V(){try{const e=await fetch(M,O);if(!e.ok)throw new Error(`Network response was not ok ${e.status}`);const s=await e.json();console.log("Reviews data:",s),h=s,N(h),$()}catch(e){k.warning({message:"An error occurred while fetching data from the server!",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),console.error("Fetch error:",e),D()}}function D(){m.innerHTML='<p class="not-found">Not found</p>',console.log("Error rendered: Not found")}function N(e){m.innerHTML="",e&&(m.innerHTML=e.map(({_id:s,author:a,avatar_url:n,review:t})=>`<li class="reviews-item swiper-slide">
            <img class="reviews-img" src="${n}" 
            alt="about-me" width="48" height="48" />
            <h3 class="reviews-name">${a}</h3>
            <p class="reviews-comment">${t}</p>
          </li>`).join(""))}function $(){new p(".reviews-cards",{modules:[f],navigation:{nextEl:".reviews .swiper-button-next",prevEl:".reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}document.addEventListener("DOMContentLoaded",()=>{V()});new p(".project-swiper",{modules:[f],navigation:{nextEl:".project .swiper-button-next",prevEl:".project .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});const H=document.querySelectorAll(".covers-list"),d=document.querySelector(".covers-section");H.forEach(e=>{const a=-e.querySelectorAll(".covers-item").length*22+"%";e.style.setProperty("--elementsCount",a)});function b(){const e=d.getBoundingClientRect(),s=window.innerHeight;e.top<s&&e.bottom>0?d.classList.add("animation"):d.classList.remove("animation")}b();window.addEventListener("scroll",b);const R="https://portfolio-js.b.goit.study/api",W=document.getElementById("btn-submit"),i=document.getElementById("email"),l=document.getElementById("form-text"),g=document.getElementById("modal"),U=document.querySelector(".close"),v=document.querySelector(".error-message");W.addEventListener("click",async e=>{e.preventDefault();const s=i.value;if(!F(s)){i.classList.add("invalid-email"),v.style.display="block",i.focus(),setTimeout(()=>{v.style.display="none"},3e3);return}const n={email:s,comment:l.value};try{const t=await fetch(`${R}/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(t.ok){const o=await t.json();u(o.title,o.message),i.value="",l.value="";const r=document.getElementById("successMessage");r.textContent="Success!",r.style.color="green",r.style.display="block",i.classList.add("success-email"),i.classList.remove("invalid-email"),setTimeout(()=>{r.style.display="none",i.classList.remove("success-email"),i.classList.remove("invalid-email")},3e3)}else{const o=await t.text();u("Error",o)}}catch(t){console.error("Error:",t),u("Error","An error occurred. Please check your internet connection and try again.")}});function F(e){return/\S+@\S+\.\S+/.test(e)}function u(e,s){const a=document.getElementById("modal-title"),n=document.getElementById("modal-message");a.textContent=e,n.textContent=s,g.style.display="block"}function I(){g.style.display="none"}U.addEventListener("click",I);window.addEventListener("click",e=>{e.target==g&&I()});function L(e){return()=>{e.scrollWidth>e.clientWidth?(e.title=e.value,e.style.textOverflow="ellipsis"):(e.title="",e.style.textOverflow="clip")}}i.addEventListener("input",L(i));l.addEventListener("input",L(l));
//# sourceMappingURL=commonHelpers.js.map
