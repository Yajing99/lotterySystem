import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	data : 0
});

export default(state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_SUCCESS_LOTTERY : 
      return state.set('data', action.data);
    case constants.CHANGE_SUCCESS_WINNING :
      return state.set('data', action.data);
    case constants.CHANGE_LOSE : 
      return state.set('data', action.data);
    case constants.GET_HOME : 
      return state.set('data', action.data);
		default :
		  return state;
	}
}