let advList = document.getElementById('advList');
let disAdvList = document.getElementById('disAdvList');
let vsIMG = document.getElementById('vsIMG');

function advListExpansion(){
    advList.style.transition = 'all 0.5s ease-in-out';
    advList.style.borderRadius = 0;
    advList.style.width = '30%';
}
function advListShrink(){
    advList.style.transition = 'all 0.5s ease-in-out';
    advList.style.borderRadius = '12vw';
    advList.style.width = '15%';
}
function disAdvListExpansion(){
    disAdvList.style.transition = 'all 0.5s ease-in-out';
    disAdvList.style.borderRadius = 0;
    disAdvList.style.width = '30%';
}
function disAdvListShrink(){
    disAdvList.style.transition = 'all 0.5s ease-in-out';
    disAdvList.style.borderRadius = '12vw';
    disAdvList.style.width = '15%';
}

advList.addEventListener('mouseover', advListExpansion);
advList.addEventListener('mouseout', advListShrink);
disAdvList.addEventListener('mouseover', disAdvListExpansion);
disAdvList.addEventListener('mouseout', disAdvListShrink);