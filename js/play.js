let attribute = ''
const attribute_attack = document.querySelector('#inputattack')
attribute_attack.addEventListener('input', setAttack)
function setAttack() {
  attribute = 'attack'
}

const attribute_defense = document.querySelector('#inputdefense')
attribute_defense.addEventListener('input', setDefense)
function setDefense() {
  attribute = 'defense'
}

const attribute_magic = document.querySelector('#inputmagic')
attribute_magic.addEventListener('input', setMagic)
function setMagic() {
  attribute = 'magic'
}

function playGame() {
  if (attribute == '') {
    document.querySelector('#announcer-title').innerHTML =
      'Favor selecionar um atributo'
  } else {
    document.querySelector('#announcer-title').innerHTML = ''
    machineDraw()
    matchesN += -1
    document.querySelector('#next-hand').removeAttribute('hidden')
    let button_play = document.querySelectorAll('.img-click')
    for (let i = 0; i < button_play.length; i++) {
      button_play[i].setAttribute('hidden', '')
    }
    compareAttribute()
  }
}
function nextHand() {
  document.querySelector('#announcer-title').innerHTML = ''
  document.querySelector('#announcer-player').innerHTML = ''
  document.querySelector('#announcer-machine').innerHTML = ''

  document.querySelector('#next-hand').setAttribute('hidden', '')

  document.querySelector('#img-gencard').removeAttribute('hidden')
  document.querySelector('#img-gencard').removeAttribute('onclick', '')
  document.querySelector('#cards-player').innerHTML = ''

  document.querySelector('#img-machinecard').removeAttribute('hidden')
  document.querySelector('#cards-machine').innerHTML = ''
  console.log(matchesN)
  if (matchesN == 0) {
    document.querySelector('#announcer-title').innerHTML =
      'O número de partidas chegou ao limite'
  } else {
    document
      .querySelector('#img-gencard')
      .setAttribute('onclick', 'playerDraw()')
  }
}

let player_wins = 0
let machine_wins = 0
let draw = 0

function compareAttribute() {
  let attrvalue = 0
  if (attribute == 'attack') {
    attrvalue = actual_playercard.attack
  } else if (attribute == 'defense') {
    attrvalue = actual_playercard.defense
  } else if (attribute == 'magic') {
    attrvalue = actual_playercard.magic
  }
  machinevalue = battleMachine()
  document.querySelector('#announcer-player').innerHTML =
    'O Jogador escolheu o atributo ' + attribute
  document.querySelector('#announcer-machine').innerHTML =
    'A Maquina escolheu o atributo ' + machinevalue[0]
  if (attrvalue > machinevalue[1]) {
    document.querySelector('#announcer-title').innerHTML = 'Você venceu'
    player_wins += 1
    document.querySelector('#scorewinplayer').innerHTML = player_wins
  } else if (attrvalue < machinevalue[1]) {
    document.querySelector('#announcer-title').innerHTML = 'Você perdeu'
    machine_wins += 1
    document.querySelector('#scorewinmachine').innerHTML = machine_wins
  } else if (attrvalue == machinevalue[1]) {
    document.querySelector('#announcer-title').innerHTML = 'Empatou'
    draw += 1
    let draw_score = document.querySelectorAll('.scoredraw')
    for (let i = 0; i < draw_score.length; i++) {
      draw_score[i].innerHTML = draw
    }
  }
}

function battleMachine() {
  let test = [
    actual_machinecard.attack,
    actual_machinecard.defense,
    actual_machinecard.magic
  ]
  let higher = 0
  let indexattr = ['attack', 'defense', 'magic']
  for (let i = 0; i < test.length; i++) {
    if (test[i] > higher) {
      higher = test[i]
      nameHigher = indexattr[i]
    }
  }
  let highest = [nameHigher, higher]
  return highest
}
