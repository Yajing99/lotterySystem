import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  page : 0,
  totalPage : 0
});

export default (state=defaultState, action) => {
	switch (action.type) {
    case constants.GET_WINNING_PAGE :
      return state.set('totalPage', action.totalPage);
		case constants.GET_WINNING_CHANGE :
		  return state.set('page', action.page);
		default : 
		  return state;
	}
}