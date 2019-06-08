import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { 
	LotteryWrapper, 
	LotteryAll,
	LotteryLeft,
	LotteryRight,
  LotteryTitle,
  LotteryPage,
  LotteryBorder,
  LotteryStart,
  LotteryPause,
  WinningPage,
  WinningTitle,
  WinningBorder,
  Winner,
  LotteryPerson
} from './style.js';
import { actionCreators } from './store';

var myId, time = 0, win = [];

class Lottery extends PureComponent {

  componentDidMount() {
    this.props.handleLottery(this.props.lotteryP);
  }

  getWin() {
    const newWinner = this.props.winningP.toJS();
    const newWinner_ = this.props.winning_.toJS();
    if(window.localStorage && newWinner.length !== 0){
      window.localStorage.setItem('Winner', JSON.stringify(newWinner));
    } else {
      console.log("浏览器不支持localstorage");
    } 
    if((win.length === 0 && newWinner_.length === 1) && time === 0) {
      win.push(<Winner key={ newWinner_[newWinner_.length-1] } >{ newWinner_[newWinner_.length-1] }</Winner>); 
      if(win.length > 5) {
        win.shift();
    }
      return win;
    } else if(win.length > 0) {
      if(win[win.length-1].key !== newWinner_[newWinner_.length-1] && time === 0) {
        win.push(<Winner key={ newWinner_[newWinner_.length-1] } >{ newWinner_[newWinner_.length-1] }</Winner>); 
        if(win.length > 5) {
          win.shift();
        }
        return win;
      } else {
        return win;
      } 
    } else {
      return win;
    }
  }

  render () {
    if(this.props.data === 1) {
      let newLottery = this.props.lotteryP.toJS();
      let lengthP = newLottery.length;
    	return (
        <LotteryWrapper>
  	      <LotteryAll>
  	        <LotteryLeft>
  		        <LotteryTitle>任性开奖</LotteryTitle>
  			      <LotteryPage>
  			        <LotteryBorder>{ this.props.content }</LotteryBorder>
  			        <LotteryStart onClick={ () => this.props.handleStart(lengthP) }>
                  开始
                </LotteryStart>
  			        <LotteryPause onClick={ () => this.props.handlePause(this.props.content) }>
                  暂停
                </LotteryPause>
  			      </LotteryPage>
  		      </LotteryLeft>
  		      <LotteryRight>
  			      <WinningPage>
  			        <WinningTitle>随意中奖</WinningTitle>
  			        <WinningBorder>
                  { this.getWin() }             
                </WinningBorder>
  			      </WinningPage>
              <Link to='/lotteryPeople' className='link'>                                                                                                                
    			      <LotteryPerson>
                  抽奖名单
                </LotteryPerson>
              </Link>
  		      </LotteryRight>
  	      </LotteryAll>
        </LotteryWrapper>    
    	);
    } else if(this.props.data === 2) {
      return <Redirect to='/winningPeople' />                                                                                                                            
    }else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => {
  return {
    data : state.getIn(['login', 'data']),
    lotteryP : state.getIn(['lottery', 'lotteryP']),
    content : state.getIn(['lottery', 'content']),
    winningP : state.getIn(['lottery', 'winningP']),
    winning_ : state.getIn(['lottery', 'winning_'])
  }
};

const mapDispatch = (dispatch) => ({
  handleLottery(lotteryP) {
    (lotteryP.size === 0) && dispatch(actionCreators.getList());
  },

  handleStart(lengthP) {
    const action = actionCreators.getStart(lengthP-1);
    if(time === 0) {
      time ++ ;
      myId = setInterval(()=>dispatch(action), 80);
    }
  },

  handlePause(content) {
    if(time !== 0) {
      time = 0;
      clearInterval(myId);
      dispatch(actionCreators.getLotteryOutWinning(content));
    }
  }    
});

export default connect(mapState, mapDispatch)(Lottery);