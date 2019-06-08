import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import {
  LotteryPeopleWrapper,
  LotteryPeopleAll,
  LotteryPeopleTitle,
  LotteryPeoplePage,
  LotteryPeopleBlock,
  LotteryPeoplePhoto,
  LotteryPeopleName,
  LotteryPeopleNumber,
  LotteryPeopleChoose,
  LotteryPage,
  LotteryHomePage,
  LotteryPeopleUp,
  LotteryPeopleDown
} from './style.js';
import { actionCreators as loginActionCreators } from '../login/store';
import { actionCreators as lotteryActionCreators } from '../lottery/store';
import { actionCreators } from './store';

class LotteryPeople extends PureComponent {

  componentDidMount() {
    this.props.handleTotalPage(this.props.lotteryP);
  }

  getLotteryArea() {
    const newLottery = this.props.lotteryP.toJS();
    const pageLottery = [];
    if(newLottery.length) {
      for(let i = this.props.page * 20; i < ( this.props.page + 1 )*20 && i < newLottery.length; i++ ) {
        pageLottery.push(
          <LotteryPeopleBlock key={ newLottery[i].phonenumber } onClick={ () => this.props.handleDell(i, this.props.deleteP, this.props.lotteryP) }>
          <LotteryPeoplePhoto></LotteryPeoplePhoto>
          <LotteryPeopleName>{ newLottery[i].name }</LotteryPeopleName>
          <LotteryPeopleNumber>{ newLottery[i].phonenumber }</LotteryPeopleNumber>
          </LotteryPeopleBlock>
        )      
      }
      return pageLottery;
    } else {
      return null;
    }
  }

	render() {
    if(this.props.data === 1) {
  		return (
        <LotteryPeopleWrapper>
          <LotteryPeopleAll>
            <LotteryPeopleTitle>抽奖人员</LotteryPeopleTitle>
            <LotteryPeoplePage>
              { this.getLotteryArea() }
            </LotteryPeoplePage>
            <LotteryPeopleChoose>
              <Link to='/lottery' className='link'>                                                 
                <LotteryPage>抽奖页面</LotteryPage>
              </Link>
              <Link to='/' className='link'>
              <LotteryHomePage onClick={ this.props.handleToHome }>退出登录</LotteryHomePage>
              </Link>
              <LotteryPeopleUp onClick={ () => this.props.handleChangeUp(this.props.page, this.props.totalPage) }>
                上一批
              </LotteryPeopleUp>
              <LotteryPeopleDown onClick={ () => this.props.handleChangeDown(this.props.page, this.props.totalPage) }>
                下一批
              </LotteryPeopleDown>
              <Link to='/addPeople'>
                <span className="iconfont add">&#xe6a6;</span>
              </Link>
              <span 
                className="iconfont delete" 
                onClick={ () => this.props.handleDeleteP(this.props.deleteP) }
              >
                &#xe66b;
              </span>
            </LotteryPeopleChoose>
          </LotteryPeopleAll>
        </LotteryPeopleWrapper>
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
    page : state.getIn(['lotteryP', 'page']),
    totalPage : state.getIn(['lotteryP', 'totalPage']),
    lotteryP : state.getIn(['lottery', 'lotteryP']),
    deleteP : state.getIn(['lotteryP', 'deleteP'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleToHome() {
      dispatch(loginActionCreators.getHome());
    },

    handleTotalPage(lotteryP) {
      dispatch(actionCreators.getPage(lotteryP));
    },
    
    handleChangeUp(page, totalPage) {
      if(page === 0) {
        dispatch(actionCreators.getChange(totalPage-1));
      } else {
        dispatch(actionCreators.getChange(page-1));
      }
    },

    handleChangeDown(page, totalPage) {
      if(page < totalPage -1) {
        dispatch(actionCreators.getChange(page+1));
      } else {
        dispatch(actionCreators.getChange(0));
      }
    },

    handleDeleteP(deleteP) {
      if( !deleteP ) {
        dispatch(actionCreators.getDelete(!deleteP));
        alert('现在可以点击抽奖人信息进行删除操作, 若不进行删除操作请再次点击以免误删操作');
      } else {
        dispatch(actionCreators.getDelete(!deleteP));
        alert('已关闭删除操作，如进行删除操作请再次点击');
      }
    },

    handleDell(index, deleteP, lotteryP) {
      if( deleteP ) {
        dispatch(lotteryActionCreators.getDell(index));
        dispatch(actionCreators.getPageP(lotteryP));
      }
    }
  }
};

export default connect(mapState, mapDispatch)(LotteryPeople);