//======================Bubbly-Button=====================
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

//======================Jokes-content=====================

const url = 'https://api.chucknorris.io/jokes/random'
const text = document.querySelector ('.text-chuck')
const button = document.querySelector ('.bubbly-button')
const explosion = document.querySelector ('.main-container')
const shadow = document.querySelector ('.text-chuck')
const hero = document.querySelector ('.chuck')

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data)
}

getData()
button.addEventListener('click', getData)

function showData(data) {
    text.textContent = data.value.replace(/&quot;/g, "''");
}

function showEffects() {
    explosion.classList.add('explosion');
    shadow.classList.add('shadow');
    hero.classList.add('hero')
    setTimeout (function () {
        explosion.classList.remove('explosion')
        shadow.classList.remove('shadow');
        hero.classList.remove('hero')
    }, 800)
}

button.addEventListener ('click', showEffects)

