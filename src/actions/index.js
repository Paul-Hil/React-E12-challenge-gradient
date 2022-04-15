// annuaire des actions

// === action types
export const SET_FIRST_COLOR = 'SET_FIRST_COLOR';
export const SET_LAST_COLOR = 'SET_LAST_COLOR';
export const DIRECTION_TO_LEFT = 'DIRECTION_TO_LEFT';
export const DIRECTION_TO_RIGHT = 'DIRECTION_TO_RIGHT';

export const NEW_DIRECTION = 'NEW_DIRECTION';

// === action creators
// fonction qui retourne une action avec le bon type, en facilitant l'utilisation
// des informations de payload

// export const setFirstColor = (colorValue) => {
//   return {
//     type: SET_FIRST_COLOR,
//     color: colorValue,
//   };
// };

// si la seule instruction est un return on peut enlever return et les accolades
// du corps de la fonction (return implicite)
// mais si ce qu'on retourne c'est un objet, alors Javascript croit que c'est
// le début du corps de la fonction => on rajoute des parenthèses autour des accolades 
// de l'objet pour éviter la confusion avec les accolades de corps de fonction
export const setFirstColor = (colorValue) => ({
  type: SET_FIRST_COLOR,
  color: colorValue,
});

export const setLastColor = (colorValue) => ({
  type: SET_LAST_COLOR,
  color: colorValue,
});

export const directionToLeft = () => ({
  type: DIRECTION_TO_LEFT,
});

export const directionToRight = () => ({
  type: DIRECTION_TO_RIGHT,
});

export const newDirection = (value) => ({
  type: NEW_DIRECTION,
  direction: value,
});
