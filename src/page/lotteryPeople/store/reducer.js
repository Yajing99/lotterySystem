import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
   page : 0,
   totalPage : 0,
   deleteP : false
});

export default(state=defaultState, action) => {
	switch(action.type) {
    case constants.GET_LOTTERY_PAGE :
      return state.set('totalPage', action.totalPage);
    case constants.GET_LOTTERY_CHANGE :
      return state.set('page', action.page);
    case constants.IF_DELETE_PEOPLE : 
      return state.set('deleteP', action.value);
    default :
      return state;
  }
}