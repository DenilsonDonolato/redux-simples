import { createStore, combineReducers} from 'redux';

import numerosReducer from "./reducers/numeros";

const reducers = combineReducers({
  numeros: numerosReducer
});

export default function storeConfig() {
  return createStore(reducers);
}
