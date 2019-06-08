import * as constants from './constants';

export const getPage = (winningP) => {
	return (dispatch) => {
      const newwinningP = winningP.toJS();
      const action = {
      	type : constants.GET_WINNING_PAGE,
      	totalPage : Math.ceil(newwinningP.length / 24)
      };
      dispatch(action);
  }
};

export const getWin = (page) => {
  return (dispatch) => {
    const action = {
      type : constants.GET_WINNING_CHANGE,
      page : page
    };
    dispatch(action);
  }
};