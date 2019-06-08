import * as constants from './constants';

export const getPage = (lotteryP) => {
	return (dispatch) => {
      const newLotteryP = lotteryP.toJS();
      const action = {
      	type : constants.GET_LOTTERY_PAGE,
      	totalPage : Math.ceil(newLotteryP.length / 20)
      };
      dispatch(action);
  }
};

export const getPageP = (lotteryP) => {
  return (dispatch) => {
      const newLotteryP = lotteryP.toJS();
      const action = {
        type : constants.GET_LOTTERY_PAGE,
        totalPage : Math.ceil(newLotteryP.length / 20 - 0.05)
      };
      dispatch(action);
  }  
};

export const getChange = (page) => {
  return (dispatch) => {
    const action = {
      type : constants.GET_LOTTERY_CHANGE,
      page : page
    };
    dispatch(action);
  }
};

export const getDelete = (deleteP) => {
  return (dispatch) => {
    const action = {
      type : constants.IF_DELETE_PEOPLE,
      value : deleteP
    };
    dispatch(action);
  }
};