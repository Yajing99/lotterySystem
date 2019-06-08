import axios from 'axios';
import * as constants from './constants';

export const getLogin = (account, password) => {
	return (dispatch) => {
    axios.get('/api/login.json').then((res) => {
	    let result = res.data.information;
      let i;
	    for(i = 0; i < result.length; i++) {
	    	if(result[i].data === 1 && result[i].account === account && result[i].password === password ) {
	    		const action = {
	    			type : constants.CHANGE_SUCCESS_LOTTERY,
	    			data : 1
	    		};
	    		dispatch(action);
	    		break;
	    	} else if(result[i].data === 2 && result[i].account === account && result[i].password === password ) {
	    		const action = {
	    			type : constants.CHANGE_SUCCESS_WINNING,
	    			data : 2
	    		};
	    		dispatch(action);
	    		break;
	    	}
	    }
      if(i === result.length) {
        alert("用户名或密码错误");
        const action = {
        	type : constants.CHANGE_LOSE,
        	data : 0
        };
        dispatch(action);
      }
    }).catch((err) => {
      console.log('error');
    })	
	}
};

export const getHome = () => {
	return (dispatch) => {
	  const action = {
	    type : constants.GET_HOME,
	    data : 0
	  };
	  dispatch(action);
  } 
};