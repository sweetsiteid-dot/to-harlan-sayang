/* =========================
   PASSWORD
========================= */

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "0808"){

document.getElementById("passwordScreen")
.style.display="none";

document.getElementById("websiteContent")
.style.display="block";

}else{

alert("Password salah 🤍");

}

}

/* =========================
   OPEN GIFT
========================= */

function openGift(){

const music =
document.getElementById("music");

music.play();

document.getElementById("giftSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "🤍";

heart.style.position = "absolute";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top = "-40px";

heart.style.fontSize =
(Math.random()*18+18)+"px";

heart.style.opacity =
Math.random();

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);

/* =========================
   ANIMATION STYLE
========================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

.fade-in{

opacity:0;

transform:translateY(40px);

transition:all 1s ease;

}

.fade-in.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.glass-card,.reason-card,.letter-box,.final-section,.ending"
).forEach(el=>{

el.classList.add("fade-in");

observer.observe(el);

});

/* =========================
   GOOD NIGHT QUOTES
========================= */

const quotes=[

"Good night, mamas 🤍",

"Aku bangga sama kamu.",

"Semoga bobo kamu nyenyak 🌙",

"Terima kasih udah bertahan sejauh ini 🤍",

"You're doing really well.",

"Aku sayang kamu 🤍"

];

const quoteElement =
document.createElement("div");

quoteElement.className =
"floating-quote";

quoteElement.innerText =
quotes[0];

document.body.appendChild(
quoteElement
);

let currentQuote = 0;

setInterval(()=>{

currentQuote++;

if(currentQuote >= quotes.length){

currentQuote = 0;

}

quoteElement.style.opacity = 0;

setTimeout(()=>{

quoteElement.innerText =
quotes[currentQuote];

quoteElement.style.opacity = 1;

},500);

},4500);

/* =========================
   QUOTE STYLE
========================= */

const quoteStyle =
document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

position:fixed;

bottom:20px;

left:50%;

transform:translateX(-50%);

background:
rgba(255,255,255,.10);

backdrop-filter:blur(15px);

padding:12px 22px;

border-radius:40px;

font-size:14px;

color:white;

z-index:999;

transition:.5s;

box-shadow:0 10px 30px rgba(0,0,0,.2);

}

`;

document.head.appendChild(
quoteStyle
);
