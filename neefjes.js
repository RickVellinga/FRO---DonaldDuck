const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', klik);
    plaatjes[i].addEventListener('dblclick', dubbelklik);
}

function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
    document.getElementById('duck').innerText = ": "+this.alt;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}

  function klik(){
    document.getElementById('informatie').innerHTML = this.dataset.info;
    document.getElementById('informatie').style.color  = this.dataset.kleur;
    document.getElementById('titel').style.color  = this.dataset.kleur;
    document.getElementById('rand').style.border = "thick solid"  + this.dataset.kleur;
    this.style.border = "thick solid " + this.dataset.kleur;

  }



  function dubbelklik() {
    this.dataset.clicks++;
    this.parentElement.querySelector(".like").innerText = this.dataset.clicks

    var bolletje = document.createElement("div");
    bolletje.className = "bolletje";
    bolletje.style.backgroundColor = this.dataset.kleur;
    bolletjes.appendChild(bolletje);
}
