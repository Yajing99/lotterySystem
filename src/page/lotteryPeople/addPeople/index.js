import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as lotteryActionCreators } from '../../lottery/store';
import { Redirect, Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { 
  AddPeopleWrapper,
  AddPeopleWrite, 
  AddPeopleChoose, 
  Input, 
  AddPeopleChooseAll, 
  AddPeopleLoad,
} from './style';

class AddPeople extends PureComponent {
  render() {
    if( this.props.data === 1 ) {
    	return (
        <AddPeopleWrapper>
          <AddPeopleWrite>
          <AddPeopleChooseAll>
             <AddPeopleChoose>添加名单</AddPeopleChoose>
           </AddPeopleChooseAll>
           <span className="iconfont people">&#xe602;</span>
           <Input placeholder='姓名' ref={(input) => { this.account=input }} />
           <span className="iconfont password">&#xe600;</span>
           <Input placeholder='手机号' ref={(input)=>{ this.password=input }} />
           <AddPeopleLoad  className='sure' onClick={ () => this.props.handleInputP(this.account, this.password, this.props.lotteryP) }>
             确定
           </AddPeopleLoad>
           <Link to='/lotteryPeople' className='link'>                                                    
	           <AddPeopleLoad className='cancel' onClick={ () => this.props.handleReturn(this.props.lotteryP) }>
	             取消
	           </AddPeopleLoad>
           </Link>
          </AddPeopleWrite>
        </AddPeopleWrapper>
        );
    } else if(this.props.data === 2) {
      return <Redirect to='/winningPeople' />                                                                                                                            
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => {
  return {
    data : state.getIn(['login', 'data']),
    lotteryP : state.getIn(['lottery', 'lotteryP'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleInputP(accountElem, passwordElem, lotteryP) {
      const phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    	if(passwordElem.value.match(phone) && accountElem.value !== '') {
        const people = {
        	name : accountElem.value,
        	phonenumber : passwordElem.value
        };
        dispatch(lotteryActionCreators.getAdd(people));
        alert('您已成功添加, 如不需再添加请按取消返回抽奖名单页面');
      } else if(accountElem.value === '') {
        alert('姓名不能为空');
      } else {
      	alert('请输入合法的手机号码');
      }
    },

    handleReturn(lotteryP) {
      dispatch(actionCreators.getPage(lotteryP));
    }
  }
};

export default connect(mapState, mapDispatch)(AddPeople);