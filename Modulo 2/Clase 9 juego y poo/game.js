const options = ['Piedra', 'Papel', 'Tijeras'];
let bot = null;
let player = null;

const getRandomValue = () => {
  return Math.floor(Math.random() * 3);
};

const showResultMessage = (result, indexBot, indexPlayer, optionsList) => {
  return `${result}!!! \nEl bot elije = ${optionsList[indexBot]}. \nVos elegiste = ${optionsList[indexPlayer]}`;
};

const startGame = () => {
  player = parseInt(
    prompt('Elije tu opción: \nPiedra = 0\nPapel = 1\nTijeras = 2')
  );
  bot = getRandomValue();

  if (player >= 0 && player <= 2) {
    switch (true) {
      case bot === player:
        alert('EMPATE!');
        break;
      case player === 0 && bot === 2:
        alert(showResultMessage('Ganaste!!', bot, player, options));
        break;
      case player === 1 && bot === 0:
        alert(showResultMessage('Ganaste!!', bot, player, options));
        break;
      case player === 2 && bot === 1:
        alert(showResultMessage('Ganaste!!', bot, player, options));
        break;
      default:
        alert(showResultMessage('Perdiste!!', bot, player, options));
        break;
    }
  }
};
