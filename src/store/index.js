import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

// le store est le gardien  de notre stat 

const store = createStore(
  reducer,
  devToolsEnhancer(),
  );
export default store;
