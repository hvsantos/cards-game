let actual_playercard = []
let actual_machinecard = []
function playerDraw() {
  document.querySelector('#img-gencard').setAttribute('hidden', '')
  let number = list_card.length
  actual_playercard = drawCard('#cards-player', number)
  let img_click = document.querySelectorAll('.img-click')
  for (let i = 0; i < img_click.length; i++) {
    img_click[i].removeAttribute('hidden')
  }
}
function drawCard(who, number) {
  let i = randomFunc(number)
  document.querySelector(who).innerHTML += `
    <div class='container-card'>
    <h2 class="main-subtitle -cardtitle">${list_card[i].name}</h2>
    <img class="img-card" src="${list_card[i].img}">
    <h3 class="main-subtitle -cardattribute">Ataque: ${list_card[i].attack}</h3>
    <h3 class="main-subtitle -cardattribute">Defense: ${list_card[i].defense}</h3>
    <h3 class="main-subtitle -cardattribute">Magic: ${list_card[i].magic}</h3>
    </div>`
  return list_card[i]
}
function machineDraw() {
  document.querySelector('#cards-machine').innerHTML = ''
  document.querySelector('#img-machinecard').setAttribute('hidden', '')
  let number = list_card.length
  actual_machinecard = drawCard('#cards-machine', number)
}
