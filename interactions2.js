let benefitsIMG = document.getElementById('bbImage');
let benefitsButton = document.getElementById('benefitsButton');
let balanceIMG = document.getElementById('balBImage');
let balanceButton = document.getElementById('balanceButton');
let payIMG = document.getElementById('payImage');
let payButton = document.getElementById('payButton');
let reqIMG = document.getElementById('reqImage');
let reqButton = document.getElementById('requirementsButton')
let expIMG = document.getElementById('expImage');
let expButton = document.getElementById('experienceButton');
let difIMG = document.getElementById('difImage');
let difbutton = document.getElementById('difficultyButton');

function buttonVanish1(){
    benefitsIMG.style.opacity = 0;
    benefitsIMG.style.transition = '0.5s opacity';
    benefitsIMG.style.transition = 'all 1s ease-in-out';
    benefitsIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear1(){
    benefitsIMG.style.opacity = 1;
    benefitsIMG.style.transition = 'all 1s ease-in-out';
    benefitsIMG.style.transform = 'rotate(-360deg)';
}
function buttonVanish2(){
    balanceIMG.style.opacity = 0;
    balanceIMG.style.transition = '0.5s opacity';
    balanceIMG.style.transition = 'all 1s ease-in-out';
    balanceIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear2(){
    balanceIMG.style.opacity = 1;
    balanceIMG.style.transition = 'all 1s ease-in-out';
    balanceIMG.style.transform = 'rotate(-360deg)';
}
function buttonVanish3(){
    payIMG.style.opacity = 0;
    payIMG.style.transition = '0.5s opacity';
    payIMG.style.transition = 'all 1s ease-in-out';
    payIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear3(){
    payIMG.style.opacity = 1;
    payIMG.style.transition = 'all 1s ease-in-out';
    payIMG.style.transform = 'rotate(-360deg)';
}
function buttonVanish4(){
    reqIMG.style.opacity = 0;
    reqIMG.style.transition = '0.5s opacity';
    reqIMG.style.transition = 'all 1s ease-in-out';
    reqIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear4(){
    reqIMG.style.opacity = 1;
    reqIMG.style.transition = 'all 1s ease-in-out';
    reqIMG.style.transform = 'rotate(-360deg)';
}
function buttonVanish5(){
    expIMG.style.opacity = 0;
    expIMG.style.transition = '0.5s opacity';
    expIMG.style.transition = 'all 1s ease-in-out';
    expIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear5(){
    expIMG.style.opacity = 1;
    expIMG.style.transition = 'all 1s ease-in-out';
    expIMG.style.transform = 'rotate(-360deg)';
}
function buttonVanish6(){
    difIMG.style.opacity = 0;
    difIMG.style.transition = '0.5s opacity';
    difIMG.style.transition = 'all 1s ease-in-out';
    difIMG.style.transform = 'rotate(360deg)';
}
function buttonReappear6(){
    difIMG.style.opacity = 1;
    difIMG.style.transition = 'all 1s ease-in-out';
    difIMG.style.transform = 'rotate(-360deg)';
}
benefitsButton.addEventListener('mouseover', buttonVanish1);
benefitsButton.addEventListener('mouseout', buttonReappear1);
balanceButton.addEventListener('mouseover', buttonVanish2);
balanceButton.addEventListener('mouseout', buttonReappear2);
payButton.addEventListener('mouseover', buttonVanish3);
payButton.addEventListener('mouseout', buttonReappear3);
reqButton.addEventListener('mouseover', buttonVanish4);
reqButton.addEventListener('mouseout', buttonReappear4);
expButton.addEventListener('mouseover', buttonVanish5);
expButton.addEventListener('mouseout', buttonReappear5);
difbutton.addEventListener('mouseover', buttonVanish6);
difbutton.addEventListener('mouseout', buttonReappear6);