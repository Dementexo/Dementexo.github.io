let introTextContainer = document.createElement('iTC');
let introText = document.createTextNode("Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.");
let introMC = document.getElementById("introMainContent");
let introImage = document.getElementById("introIMG");

function box1Expansion(){
    introMC.style.width = '90%';
    return;
}
function textAdditionContent(){
    introTextContainer.append(introText);
    introMC.append(introTextContainer);
    introMC.style.fontSize = '1.4vw';
    introTextContainer.style.marginTop = 'auto';
    introTextContainer.style.marginBottom = 'auto';
    return;
}
function textSubtractionOne(){
    introText.remove();
    introMC.style.width = '12vw';
    return;
}

introMC.addEventListener('mouseout', textSubtractionOne);
introMC.addEventListener('mouseover', box1Expansion);
introMC.addEventListener('mouseover', textAdditionContent);
