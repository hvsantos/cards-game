function genCard(who) {
  for (i = 0; i < list_card.length; i++) {
    document.querySelector(who).innerHTML += `
    <div class='container-card'>
    <h2 class="main-subtitle -cardtitle">${list_card[i].name}</h2>
    <img class="img-card" src="${list_card[i].img}">
    <h3 class="main-subtitle -cardattribute">Ataque: ${list_card[i].attack}</h3>
    <h3 class="main-subtitle -cardattribute">Defense: ${list_card[i].defense}</h3>
    <h3 class="main-subtitle -cardattribute">Magic: ${list_card[i].magic}</h3>
    </div>`
  }
}
genCard('#cards-player')
genCard('#cards-machine')
