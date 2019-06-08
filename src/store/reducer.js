import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../page/login/store';
import { reducer as lotteryReducer } from '../page/lottery/store';
import { reducer as lotteryPeopleReducer } from '../page/lotteryPeople/store';
import { reducer as winningPeopleReducer } from '../page/winningPeople/store';

const reducer = combineReducers({
	login : loginReducer,
	lottery : lotteryReducer,
	lotteryP : lotteryPeopleReducer,
	winningP : winningPeopleReducer
});

export default reducer;