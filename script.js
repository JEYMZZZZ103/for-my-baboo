// ---------- ELEMENTS ----------

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const startBtn = document.getElementById("startBtn");

const envelope = document.getElementById("envelope");

const typedText = document.getElementById("typedText");


const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

const heartsContainer = document.getElementById("hearts");
const petalsContainer = document.getElementById("petals");
const sparklesContainer = document.getElementById("sparkles");

// =============================

startBtn.addEventListener("click", () => {

    intro.style.display = "none";

    mainContent.style.display = "flex";

    createHeartRain();

    createPetals();

    createSparkles();

});

// =============================

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    envelope.style.transform = "translateY(-20px) rotateX(15deg)";

    document.querySelector(".letter").style.transform =
      "translateY(-310px)";

    startTyping();

});

// =============================

const message = `

Hi, Baboo!

We have came to this far, but I guess, things really needs to end and let go. Entering into your life was the best decision I have made. 
Your beautiful face was once my fuel. Your presence was my favorite of mine and your love and care towards me was once my serenity. 
But, a lot of things change that eagers me let go of things. I have thinking this for the last few days, and I think this is the right time. 

Sobrang naapektuhan ako sa actions na pinapakita mo at kung paano ka makipag-communicate saakin.
Alam ko sa sarili ko na hindi ka na interesado saakin pero nagiging indenial ako. 
Sobrang nasasaktan lang ako sa part na I still need to push myself to you hoping that things will get better and mababalik tayo sa dati.
But I was wrong, mas lalo lang pala akong nasasaktan. 

I know na sinabi ko na maghihintay ako, pero paano ako maghihintay kung ganito naman ang pinaparamdam at pinapakita mo sa'kin? 
Hindi naman kita masisisi kasi sa simula palang kasalanan ko na talaga. Sorry dahil nagawa kong sabihin sayo lahat yun, 
gusto ko lang sabihin na pinagsisisihan ko lahat ng nagawa kong mali sayo.

I'm not blaming you Baboo just because you've change, I know it was all my fault all along. 
But I wanted you to know that I love you so much that I can sacrifice all just to be with you again.
But, that just life and a part of loving someone. Sometimes we just need to end things for the better. For my last act of love, I will not bother you anymore. 
I want you to be strong. Lagi mong tatandaan na nandito lang ako susuportahan kita palagi. Sana marating mo mga pinapangarap mo. 
I hope someone will love you more than what I can give. I will always your silent cheerleader in your every battle. 

No matter how many days pass, my heart will always choose you.
This is the hardest decision I've ever made, but I think it's for the best. 
Mahal na mahal po kita. I will always love you, and I will miss you po. 🩷

`;

let index = 0;

function startTyping() {

    typedText.innerHTML = "";

    index = 0;

    type();

}

function type() {

    if (index < message.length) {

        typedText.innerHTML += message.charAt(index);

        index++;

        setTimeout(type, 40);

    }

}

// =============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 35) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

function createHeartRain() {

    setInterval(createHeart, 180);

}

// -----------------------------

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100+"vw";

    petal.style.fontSize =
        (20 + Math.random()*20)+"px";

    petal.style.animationDuration =
        (6 + Math.random()*5)+"s";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

function createPetals(){

    setInterval(createPetal,500);

}

// -----------------------------

function sparkle(){

    const s = document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    sparklesContainer.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

function createSparkles(){

    setInterval(sparkle,250);

}

// -----------------------------

surpriseBtn.addEventListener("click",()=>{

    finalMessage.style.opacity="1";

    finalMessage.style.transform="scale(1.2)";

    heartExplosion();

});

// -----------------------------

function heartExplosion(){

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.pointerEvents="none";

        heart.style.fontSize=
            (15+Math.random()*35)+"px";

        const x=(Math.random()-0.5)*800;

        const y=(Math.random()-0.5)*800;

        heart.style.transition="2s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${x}px,${y}px) rotate(720deg)`;

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}

// -----------------------------

const stars = document.getElementById("stars");

function createStar() {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.borderRadius = "50%";
    star.style.background = "white";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = Math.random();

    star.style.boxShadow = "0 0 10px white";

    star.style.animation = "twinkle 3s infinite";

    stars.appendChild(star);

}

for(let i = 0; i < 120; i++){

    createStar();

}

// -----------------------------

const photos = document.querySelectorAll(".photos img");

let currentPhoto = 0;

function autoGallery(){

    photos.forEach(photo=>{

        photo.style.opacity = ".45";
        photo.style.transform = "scale(.9)";

    });

    photos[currentPhoto].style.opacity = "1";
    photos[currentPhoto].style.transform = "scale(1.1)";

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

}

autoGallery();

setInterval(autoGallery,2500);

// -----------------------------

document.addEventListener("mousemove",(e)=>{

    const heart = document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.pointerEvents="none";

    heart.style.fontSize="16px";

    heart.style.transition="1.5s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-80px) scale(2)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1500);

});

// -----------------------------

const introTitle = document.querySelector(".intro h1");

let glow = true;

setInterval(()=>{

    if(glow){

        introTitle.style.textShadow =
        "0 0 40px white, 0 0 80px pink";

    }else{

        introTitle.style.textShadow =
        "0 0 15px white";

    }

    glow = !glow;

},900);

// -----------------------------

const quotes = [

"Every love story is beautiful, but ours is my favorite ❤️",

];

setInterval(()=>{

    if(opened){

        const random = Math.floor(Math.random()*quotes.length);

        document.querySelector(".paper h2").innerHTML =
        quotes[random];

    }

},8000);

// -----------------------------

const galleryImages = document.querySelectorAll(".photos img");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        const viewer=document.createElement("div");

        viewer.style.position="fixed";
        viewer.style.left="0";
        viewer.style.top="0";
        viewer.style.width="100%";
        viewer.style.height="100%";
        viewer.style.background="rgba(0,0,0,.85)";
        viewer.style.display="flex";
        viewer.style.justifyContent="center";
        viewer.style.alignItems="center";
        viewer.style.zIndex="99999";
        viewer.style.cursor="pointer";

        const img=document.createElement("img");

        img.src=image.src;

        img.style.maxWidth="90%";
        img.style.maxHeight="90%";
        img.style.borderRadius="20px";
        img.style.boxShadow="0 0 40px white";

        viewer.appendChild(img);

        document.body.appendChild(viewer);

        viewer.addEventListener("click",()=>{

            viewer.remove();

        });

    });

});

// -----------------------------

const loveIcons=[

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝"

];

function createConfetti(){

    const item=document.createElement("div");

    item.innerHTML=

    loveIcons[Math.floor(Math.random()*loveIcons.length)];

    item.style.position="fixed";

    item.style.left=Math.random()*100+"vw";

    item.style.top="-50px";

    item.style.fontSize=(15+Math.random()*25)+"px";

    item.style.transition="7s linear";

    item.style.pointerEvents="none";

    document.body.appendChild(item);

    setTimeout(()=>{

        item.style.transform=

        `translateY(${window.innerHeight+100}px)
         rotate(${Math.random()*720}deg)`;

    },20);

    setTimeout(()=>{

        item.remove();

    },7000);

}

setInterval(createConfetti,600);

// -----------------------------

const loveWords=[

"I Love You ❤️",

"Forever ♾️",

"My Home 🏡",

"My Happiness 🥰",

"You're Beautiful 🌸",

"My Favorite Person 💖",

"Always & Forever ❤️"

];

function floatingWords(){

    const word=document.createElement("div");

    word.innerHTML=

    loveWords[Math.floor(Math.random()*loveWords.length)];

    word.style.position="fixed";

    word.style.left=Math.random()*80+"vw";

    word.style.bottom="-40px";

    word.style.color="white";

    word.style.fontWeight="bold";

    word.style.fontSize="18px";

    word.style.pointerEvents="none";

    word.style.transition="8s linear";

    word.style.textShadow="0 0 12px white";

    document.body.appendChild(word);

    setTimeout(()=>{

        word.style.transform="translateY(-120vh)";

        word.style.opacity="0";

    },50);

    setTimeout(()=>{

        word.remove();

    },8000);

}

setInterval(floatingWords,4000);

// -----------------------------

setInterval(()=>{

    if(finalMessage.style.opacity==="1"){

        finalMessage.style.transform=

        "scale(1.15)";

        setTimeout(()=>{

            finalMessage.style.transform=

            "scale(1)";

        },500);

    }

},1000);

// -----------------------------

function smoothScroll(target){

    target.scrollIntoView({

        behavior:"smooth"

    });

}

startBtn.addEventListener("click",()=>{

    setTimeout(()=>{

        smoothScroll(document.querySelector(".envelope-container"));

    },600);

});

// -----------------------------

function launchFirework(x, y){

    for(let i = 0; i < 40; i++){

        const particle = document.createElement("div");

        particle.innerHTML = "❤️";

        particle.style.position = "fixed";
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.pointerEvents = "none";
        particle.style.fontSize = (12 + Math.random()*18) + "px";
        particle.style.transition = "1.8s ease-out";

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 180;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        setTimeout(() => {

            particle.style.transform =
                `translate(${dx}px, ${dy}px) rotate(720deg)`;

            particle.style.opacity = "0";

        },20);

        setTimeout(() => {

            particle.remove();

        },2000);

    }

}

// Click anywhere to create heart fireworks

document.addEventListener("click",(e)=>{

    launchFirework(e.clientX,e.clientY);

});

// -----------------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1.5s";

        document.body.style.opacity="1";

    },100);

});

// -----------------------------

const popupMessages=[

"❤️ I Love You",

"🌹 You're Amazing",

"🥰 Thank You For Everything",

"💕 You're My Favorite Person",

"💖 Forever Starts With You",

"✨ You Make My World Better"

];

function showPopup(){

    const popup=document.createElement("div");

    popup.innerHTML=

    popupMessages[
        Math.floor(Math.random()*popupMessages.length)
    ];

    popup.style.position="fixed";

    popup.style.right="20px";

    popup.style.bottom="20px";

    popup.style.background="rgba(255,255,255,.9)";

    popup.style.color="#ff4f81";

    popup.style.padding="15px 25px";

    popup.style.borderRadius="20px";

    popup.style.fontWeight="bold";

    popup.style.boxShadow="0 0 25px white";

    popup.style.zIndex="9999";

    popup.style.transition=".6s";

    document.body.appendChild(popup);

    setTimeout(()=>{

        popup.style.opacity="0";

        popup.style.transform="translateY(40px)";

    },3500);

    setTimeout(()=>{

        popup.remove();

    },4200);

}

setInterval(showPopup,25000);

// -----------------------------

let secretCount = 0;

document.addEventListener("keydown",(event)=>{

    if(event.key.toLowerCase()==="l"){

        secretCount++;

    }

    if(secretCount===5){

        secretCount=0;

        alert(
`❤️ Secret Unlocked ❤️

Thank you for being part of my life.

No matter what happens,
I'll always treasure every memory
we've shared together.

I Love You Forever ❤️`
        );

    }

});

// -----------------------------

const titles=[

"For My Baboo ❤️",

"I Love You ❤️",

"My Forever ❤️",

"My Favorite Person ❤️",

"You Are My Home ❤️"

];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},3000);

// -----------------------------

console.log(
"❤️ Romantic Website Loaded Successfully ❤️"
);
