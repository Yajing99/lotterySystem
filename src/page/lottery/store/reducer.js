import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  lotteryP : [],
  content : '',
  winningP : [],
  winning_ : []
});

export default(state=defaultState, action) => {
  const newLotteryP = state.get('lotteryP').toJS();
  switch(action.type) {
    case constants.GET_LOTTERY_LIST :
      return state.set('lotteryP', action.value);
  	case constants.GET_START :
      const account = action.account;
      let newLottery = newLotteryP[account].phonenumber.split('');
      newLottery.splice(3, 4, '*', '*', '*', '*');
  	  return state.set('content', newLotteryP[account].name + " " + newLottery.join(''));
    case constants.GET_LOTTERY_OUT : 
      for(let i = 0; i < newLotteryP.length; i++) {
        if(newLotteryP[i].phonenumber.slice(0,3) + newLotteryP[i].phonenumber.slice(7) === action.value) {
          let newWinning = newLotteryP[i].name + " " + newLotteryP[i].phonenumber;
          newLotteryP.splice(i, 1);
          return state.merge({
            winningP : state.get('winningP').concat(newWinning),
            lotteryP : fromJS(newLotteryP),
            winning_ : state.get('winning_').concat(action.content)        
          });
        }
      }
      return state;
    case constants.GET_DELL : 
      newLotteryP.splice(action.value, 1);
      return state.set('lotteryP', fromJS(newLotteryP));
    case constants.GET_ADD_PEOPLE : 
      newLotteryP.splice(newLotteryP.length, 0, fromJS(action.value));
      return state.set('lotteryP', fromJS(newLotteryP));
    case constants.GET_WINNER :
      return state.set('winningP', fromJS(action.value));
    default :
  	  return state;
  }
};