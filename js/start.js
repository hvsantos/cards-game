let matchesN = 0
function startGame() {
  matchesN = document.querySelector('#input-matches').value
  matchesN = Number(matchesN)
  if (matchesN <= 0) {
    document.querySelector('#menu-subtitle').innerHTML =
      'Favor selecionar um valor maior que 0'
  } else {
    document.querySelector(
      '#menu-subtitle'
    ).innerHTML = `Selecionado ${matchesN} partidas`
    document.querySelector('#input-matches').setAttribute('hidden', '')
    document.querySelector('#button-start').setAttribute('hidden', '')
    let start_game = document.querySelectorAll('.start-game')
    for (i = 0; i < start_game.length; i++) {
      start_game[i].removeAttribute('hidden')
    }
  }
}
