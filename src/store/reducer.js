import { SET_FIRST_COLOR, SET_LAST_COLOR, DIRECTION_TO_LEFT, DIRECTION_TO_RIGHT, NEW_DIRECTION } from 'src/actions';
import {  } from 'src/actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case DIRECTION_TO_LEFT:
    // on crée une copie du state, et on aplique les modifications sur la copie
    return  {
      ...state,
      direction: '270deg',
    };

    case DIRECTION_TO_RIGHT:
    return  {
      ...state,
      direction: '90deg',
    };
    case SET_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        firstColor: action.color,

      };
    case SET_LAST_COLOR:
      return {
         ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.color,
      };
    case NEW_DIRECTION:
      return {
        ...state,
        direction: action.direction,
      };
    default:
      return state;
  }
}

export default reducer;
