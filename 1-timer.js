import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as b,i as h}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".datatime-button"),y=document.querySelector(".timer"),d=document.querySelector(".datatime-input");let n;function T(e){const m=Math.floor(e/864e5),p=Math.floor(e%864e5/36e5),v=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:p,minutes:v,seconds:f}}b("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),n=e[0],n.getTime()<Date.now()?(s.setAttribute("disabled",""),h.show({title:"ERROR",message:"Please choose a date in the future"})):s.removeAttribute("disabled")}});let c,r,u;s.addEventListener("click",()=>{console.log("start"),c=setInterval(()=>{console.log("tick"),r=Date.now();const e=n.getTime()-r;u=T(e),y.innerHTML=g(u),d.setAttribute("disabled",""),s.setAttribute("disabled",""),e<1&&(clearInterval(c),d.removeAttribute("disabled"))},1e3)});function t(e){return String(e).padStart(2,"0")}function g(e){const a=t(e.days),o=t(e.hours),i=t(e.minutes),l=t(e.seconds);return`<div class="field">
              <span class="value" data-days>${a}</span>
              <span class="label">Days</span>
            </div>
            <div class="field">
              <span class="value" data-hours>${o}</span>
              <span class="label">Hours</span>
            </div>
            <div class="field">
              <span class="value" data-minutes>${i}</span>
              <span class="label">Minutes</span>
            </div>
            <div class="field">
              <span class="value" data-seconds>${l}</span>
              <span class="label">Seconds</span>
            </div>`}
//# sourceMappingURL=1-timer.js.map
