import { createStore, combineReducers} from 'redux';

const reducers = combineReducers({
  numeros: function(state, action) {
    switch (action.type) {
      case 'NUM_MIN_CHANGE':
        return {
          ...state,
          min: action.payload
        }
      case 'NUM_MAX_CHANGE':
        return {
          ...state,
          max: action.payload
        }    
      default:
        return {
          min: 1,
          max: 10
        }
    }
  }
});

export default function storeConfig() {
  return createStore(reducers);
}
