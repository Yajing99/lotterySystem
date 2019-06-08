import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { 
  LoginWrapper,
  LoginWrite, 
  LoginChoose, 
  Input, 
  LoginChooseAll, 
  LoginLoad,
} from './style';

class Login extends PureComponent {
  render() {
    if(!this.props.data) {
    	return (
        <LoginWrapper>
          <LoginWrite>
          <LoginChooseAll>
             <LoginChoose>登录</LoginChoose>
           </LoginChooseAll>
           <span className="iconfont people">&#xe602;</span>
           <Input placeholder='用户名' ref={(input) => { this.account=input }} />
           <span className="iconfont password">&#xe6df;</span>
           <Input placeholder='密码' type='password' ref={(input)=>{ this.password=input }} />
           <LoginLoad onClick={ () => this.props.handleInput(this.account, this.password) }>
             登录
           </LoginLoad>
          </LoginWrite>
        </LoginWrapper>
        );
    } else if(this.props.data === 1) {
      return <Redirect to='/lottery' />;                                                                                                  
    } else {
      return <Redirect to='/winningPeople' />;
    }
  }
}

const mapState = (state) => {
  return {
    data : state.getIn(['login', 'data'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    handleInput(accountElem, passwordElem) {
      dispatch(actionCreators.getLogin(accountElem.value, passwordElem.value));
    }
  }
};

export default connect(mapState, mapDispatch)(Login);