// == Imports
import { randomHexColor, generateSpanColor } from './utils';
import { setFirstColor, setLastColor, directionToLeft, directionToRight, newDirection } from './actions';
import store from 'src/store';

console.log(store);
// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}

function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {

    const firstColor = setFirstColor(randomHexColor());
    store.dispatch(firstColor);

    const lastColor = setLastColor(randomHexColor());
    store.dispatch(lastColor);
    

    // store.dispatch({
    //   type: 'SET_LAST_COLOR',
    //   color: randomHexColor(),
    // });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const action = setFirstColor(randomHexColor());
    store.dispatch(action);
    // const action = {
    //   type: 'SET_FIRST_COLOR',
    //   color: randomHexColor(),
    // }
    // store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = setLastColor(randomHexColor());
    store.dispatch(action);
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {

    const action = directionToLeft();
    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = directionToRight();
    store.dispatch(action);
  });

document.getElementById('to45')
  .addEventListener('click', () => {
    const action = newDirection('45deg');
    store.dispatch(action);
  });

document.getElementById('to135')
  .addEventListener('click', () => {
    const action = newDirection('135deg');
    store.dispatch(action);
});

document.getElementById('to225')
  .addEventListener('click', () => {
    const action = newDirection('225deg');
    store.dispatch(action);
});

document.getElementById('to315')
  .addEventListener('click', () => {
    const action = newDirection('315deg');
    store.dispatch(action);
});

