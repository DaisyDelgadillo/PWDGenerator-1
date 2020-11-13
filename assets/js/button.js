let clickW = document.getElementById('words');
let clickV = document.getElementById('verb');
let clickN = document.getElementById('noun');
let clickA = document.getElementById('adjective');
let clickDefault = document.getElementById('default');
let clickSimple = document.getElementById('simple');
let clickWifi = document.getElementById('wifi');
let clickSocials = document.getElementById('socials');
let clickImpossible = document.getElementById('impossible');

// stores the fetched data in array
let wordBank = [];
let nounBank = [];
let adjBank = [];
let verbBank = [];


// randomWord Button
clickW.addEventListener('click', function () {
wordEvent();
});
// randomVerb Button
clickV.addEventListener('click', function () {
  verbEvent();
});
// randomNoun Button
clickN.addEventListener('click', function () {
nounEvent();
});
// randomAdjective Button
clickA.addEventListener('click', function () {
adjectiveEvent();
});
// Number button
document.getElementById('num').addEventListener('click', function () {
numEvent();
});
// emoji button
document.getElementById('emoji').addEventListener('click', function () {
emojiEvent();
});
// specialC Button
document.getElementById('special').addEventListener('click', function () {
specialEvent();
});


// Preset section
clickDefault.addEventListener('click', function (){
    verbEvent();
    nounEvent();
    specialEvent();
    numEvent();
    numEvent();
    numEvent();
    numEvent();
    specialEvent();
});