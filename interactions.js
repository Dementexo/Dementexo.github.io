let introTextContainer = document.createElement('iTC');
let introText = document.createTextNode("Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.");
let introMC = document.getElementById("introMainContent");
let introImage = document.getElementById("introIMG");
introTextContainer.style.opacity = 0;

function box1Expansion(){
    introMC.style.width = '90%';
    introMC.style.height = '12vw';
    return;
}
function fadeIn(){
    introTextContainer.style.opacity = 1;
    introTextContainer.style.transition = "2.5s opacity";
}
function textAdditionContent(){
    introTextContainer.append(introText);
    introMC.append(introTextContainer);
    introMC.style.fontSize = '1.2vw';
    introTextContainer.style.marginTop = 'auto';
    introTextContainer.style.marginBottom = 'auto'; 
    setTimeout(fadeIn, 800);
}
function textSubtractionOne(){
    introTextContainer.style.opacity = 0;
    introText.remove();
    introMC.style.width = '12vw';
    return;
}

introMC.addEventListener('mouseout', textSubtractionOne);
introMC.addEventListener('mouseover', box1Expansion);
introMC.addEventListener('mouseover', textAdditionContent);
