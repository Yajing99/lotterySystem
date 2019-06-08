import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getList = () => {
	return (dispatch) => {
    axios.get('/api/lotteryPeople.json').then((res) => {
      const result = res.data.lotteryP;
      const action = {
      	type : constants.GET_LOTTERY_LIST,
      	value : fromJS(result)
      }
      dispatch(action);
    }).catch((err) => {
      console.log("error");
    })
  }
};

export const getStart = (lengthP) => {
  return (dispatch) => {
    const account = Math.ceil(Math.random() * lengthP);
    const action = {
      type : constants.GET_START,
      account : account
    };
    dispatch(action);
  }
};

export const getLotteryOutWinning = (content) => {
  return (dispatch) => {
    const value = content.replace(/[^0-9]/ig, '');
    const action = {
      type : constants.GET_LOTTERY_OUT,
      value : value,
      content : content
    };
    dispatch(action);
  }
};

export const getDell = (index) => {
  return (dispatch) => {
    const action = {
      type : constants.GET_DELL,
      value : index
    };
    dispatch(action);
  }
};

export const getAdd = (people) => {
  return (dispatch) => {
    const action = {
      type : constants.GET_ADD_PEOPLE,
      value : people
    };
    dispatch(action);
  }
};

export const getWin = (newWinner) => {
  return (dispatch) => {
    const action = {
      type : constants.GET_WINNER,
      value : newWinner
    };
    dispatch(action);
  }
}