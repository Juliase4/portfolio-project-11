import{A as v,S as p,N as f,i as _}from"./assets/vendor-84cdfaf6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const L=[{question:"What programming languages are most often used in your project?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"How can I contact you?",answer:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{question:"What are the deadlines for the project?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"Do you provide advice or support?",answer:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{question:"What payment methods do you accept?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{question:"What does the process of developing a software product look like from idea to implementation?",answer:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}];function P(e,s){const o=document.querySelector(s);let n="";e.forEach(t=>{const a=`
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
        `;n+=a}),o.innerHTML=n}P(L,".faq-list");new v(".faq-list",{duration:300,showMultiple:!0,elementClass:"faq-item",triggerClass:"faq-item__btn",panelClass:"faq-item__content"});const b=document.querySelector(".advantages"),x=[{title:"ABOUT ME",firstItem:"I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software. Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.",secondItem:" Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."},{title:"ROLE",firstItem:"Frontend development",secondItem:"HeadlessCMS,Wordpress",thirdItem:"Blender(enjoy)"},{title:"EDUCATION",firstItem:"2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York",secondItem:"2019 - 2020 / Advanced Web Development Certificate, GoIT IT School,New York",thirdItem:"2020 - 2022 / Advanced Blender Animation Techniques, Udemy"}];function S(){const e=x.map(({title:s,firstItem:o,secondItem:n,thirdItem:t=""})=>`<li class="advantages__item">
    <div class="advantages__ac">
      <h2 class="advantages__title">${s}</h2>
    </div>
    <div class="advantages__panel">
      <p class="advantages__text about">
        ${o}
      </p>
      <p class="advantages__text about">
       ${n}
      </p>
      <p class="advantages__text about">
       ${t}
      </p>
    </div>
  </li>`).join("");b.insertAdjacentHTML("afterbegin",e)}S();new v(b,{duration:400,showMultiple:!0,elementClass:"advantages__item",triggerClass:"advantages__ac",panelClass:"advantages__panel"});new p(".my-swiper",{modules:[f],loop:!0,navigation:{nextEl:".about__section .swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});const B=document.querySelector(".mobile-menu-close-btn"),A=document.querySelector(".header-mobile-open-btn"),l=document.querySelector(".mobile-menu"),j=document.querySelectorAll(".mob-menu-list-item"),T=document.querySelectorAll(".mob-button-link");j.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("is-open")})});T.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("is-open")})});B.addEventListener("click",()=>{l.classList.toggle("is-open")});A.addEventListener("click",()=>{l.classList.toggle("is-open")});const C=document.querySelector(".dropdown-nav-btn"),M=document.querySelector(".dropdown-nav-list");C.addEventListener("click",()=>{M.classList.toggle("visually-hidden")});const m=document.querySelector(".reviews-list"),V="https://portfolio-js.b.goit.study/api/reviews",O={method:"GET",headers:{Accept:"application/json"}};let h=[];async function D(){try{const e=await fetch(V,O);if(!e.ok)throw new Error(`Network response was not ok ${e.status}`);const s=await e.json();console.log("Reviews data:",s),h=s,N(h),H()}catch(e){_.warning({message:"An error occurred while fetching data from the server!",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),console.error("Fetch error:",e),$()}}function $(){m.innerHTML='<p class="not-found">Not found</p>',console.log("Error rendered: Not found")}function N(e){m.innerHTML="",e&&(m.innerHTML=e.map(({_id:s,author:o,avatar_url:n,review:t})=>`<li class="reviews-item swiper-slide">
            <img class="reviews-img" src="${n}" 
            alt="about-me" width="48" height="48" />
            <h3 class="reviews-name">${o}</h3>
            <p class="reviews-comment">${t}</p>
          </li>`).join(""))}function H(){new p(".reviews-cards",{modules:[f],navigation:{nextEl:".reviews .swiper-button-next",prevEl:".reviews .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}document.addEventListener("DOMContentLoaded",()=>{D()});new p(".project-swiper",{modules:[f],navigation:{nextEl:".project .swiper-button-next",prevEl:".project .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,slidesPerGroup:1,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}}});const W=document.querySelector(".covers-section"),I=document.querySelectorAll(".covers-list");let k=[];I.forEach(e=>{k.push(e.scrollWidth)});const r=Math.max(...k);let i=-r,d=!0;function q(){const e=W.getBoundingClientRect(),s=window.innerHeight;e.top<s&&e.bottom>0&&I.forEach(o=>{const n=(i+r)/r*100;o.style.transition="transform .5s",o.style.transform=`rotate(16deg) translateX(${-n}%)`,d?(i++,i>=0&&(d=!1)):(i--,i<=-r&&(d=!0))}),requestAnimationFrame(q)}q();const F="https://portfolio-js.b.goit.study/api",R=document.getElementById("btn-submit"),w=document.getElementById("email"),y=document.getElementById("form-text"),g=document.getElementById("modal"),U=document.querySelector(".close");R.addEventListener("click",async e=>{e.preventDefault();const s={email:w.value,comment:y.value};try{const o=await fetch(`${F}/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(o.ok){const n=await o.json();u(n.title+`
`+n.message),w.value="",y.value=""}else{const n=await o.text();u("Error: "+n)}}catch(o){console.error("Error:",o),u("An error occurred. Please check your internet connection and try again.")}});function u(e){document.getElementById("modal-message").textContent=e,g.style.display="block"}function E(){g.style.display="none"}U.addEventListener("click",E);window.addEventListener("click",e=>{e.target==g&&E()});
//# sourceMappingURL=commonHelpers.js.map
