let introTC = document.createElement("introTextContainer");
let introText = document.createTextNode("Whats brackin");
let introMC = document.getElementById("introMainContent");
let introImage = document.getElementById("introIMG");

function box1Expansion(){
    introMC.style.width = '90%';
    introTC.style.margin = 'auto';
    return;
}
function timer(){
    setTimeout(textAdditionContent, 400);
}
function textAdditionContent(){
    introTC.append(introText);
    introMC.appendChild(introTC);
    return;
}
function textSubtractionOne(){
    introMC.style.width = '12vw';
    introTC.remove();
    return;
}

introMC.addEventListener('mouseout', textSubtractionOne);
introMC.addEventListener('mouseover', box1Expansion);
introMC.addEventListener('mouseover', timer);