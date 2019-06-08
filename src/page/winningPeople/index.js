import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import {
  WinningPeopleWrapper,
  WinningPeopleAll,
  WinningPeopleTitle,
  WinningPeoplePage,
  WinningPeopleBlock,
  WinningPeoplePhoto,
  WinningPeopleInfo,
  WinningPeopleChoose,
  WinningClear,
  WinningHomePage,
  WinningPeopleUp,
  WinningPeopleDown
} from './style.js';
import { actionCreators as loginActionCreators } from '../login/store';
import { actionCreators as lotteryActionCreators } from '../lottery/store';
import { actionCreators } from './store';

class WinningPeople extends PureComponent {

  componentWillMount() {
    const newWinner = JSON.parse(window.localStorage.getItem('winner'));
    if(newWinner) {
      this.props.handleWinner(newWinner);
    }
  }

  componentDidMount() {
    this.props.handleTotalPage(this.props.winningP);
  }

  getWinnerArea() {
    const { page } = this.props;
    const newWinner = this.props.winningP.toJS();
    const pageWinner = [];
    if(newWinner != null) {
      for(let i = page * 21; i < (page+1) * 21  && i < newWinner.length; i++){
        pageWinner.push(
          <WinningPeopleBlock key={ newWinner[i] }>
          <WinningPeoplePhoto></WinningPeoplePhoto>
          <WinningPeopleInfo>{ newWinner[i] }</WinningPeopleInfo>
          </WinningPeopleBlock>
        )
    }
      return pageWinner;
    } else {
      return null;
    }
  }

  getClear() {
    window.localStorage.removeItem('winner');
  }

	render() {
    if(this.props.data === 2) {
  		return (
        <WinningPeopleWrapper>
          <WinningPeopleAll>
            <WinningPeopleTitle>中奖人员</WinningPeopleTitle>
            <WinningPeoplePage> 
              { this.getWinnerArea() }
            </WinningPeoplePage>
            <WinningPeopleChoose>
              <WinningClear onClick={ this.getClear() }>清除数据</WinningClear>
              <Link to='/' className='link'>
              <WinningHomePage onClick={ this.props.handleToHome }>退出登录</WinningHomePage>
              </Link>
              <WinningPeopleUp onClick={ () => this.props.handleWinUp(this.props.page, this.props.totalPage) }>
                上一批
              </WinningPeopleUp>
              <WinningPeopleDown onClick={ () => this.props.handleWinDown(this.props.page, this.props.totalPage) }>
                下一批
              </WinningPeopleDown>
            </WinningPeopleChoose>
          </WinningPeopleAll>
        </WinningPeopleWrapper>
  		);
    } else if(this.props.data === 1) {
      return <Redirect to='/lottery' />                                                                                                                            
    }else {
      return <Redirect to='/' />
    }
	}
}

const mapState = (state) => {
  return {
    data : state.getIn(['login', 'data']),
    winningP : state.getIn(['lottery', 'winningP']),
    page : state.getIn(['winningP', 'page']),
    totalPage : state.getIn(['winningP', 'totalPage'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleToHome() {
      dispatch(loginActionCreators.getHome());
    },

    handleWinner(winningP) {
      dispatch(lotteryActionCreators.getWin(winningP));
    },

    handleTotalPage(winningP) {
      dispatch(actionCreators.getPage(winningP));
    },

    handleWinUp(page, totalPage) {
      if(page === 0) {
        dispatch(actionCreators.getWin(totalPage-1));
      } else {
        dispatch(actionCreators.getWin(page-1));
      }
    },

    handleWinDown(page, totalPage) {
      if(page < totalPage -1) {
        dispatch(actionCreators.getWin(page+1));
      } else {
        dispatch(actionCreators.getWin(0));
      }
    },
  }
};

export default connect(mapState, mapDispatch)(WinningPeople);