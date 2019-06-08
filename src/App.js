import React, { PureComponent } from 'react';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './page/login';
import Lottery from './page/lottery';
import LotteryPeople from './page/lotteryPeople';
import WinningPeople from './page/winningPeople';
import AddLotteryPeople from './page/lotteryPeople/addPeople';

class App extends PureComponent {
  render() {
  return (
  	  <Provider store={ store }>
      <GlobalStyle />
      <IconfontStyle />
      <HashRouter>
        <Route exact path='/' component={ Login } />
        <Route exact path='/lottery' component={ Lottery } />
        <Route exact path='/lotteryPeople' component={ LotteryPeople } />
        <Route exact path='/winningPeople' component={ WinningPeople } />
        <Route exact path='/addPeople' component={ AddLotteryPeople } />
      </HashRouter>
      </Provider>
  );
  }
}

export default App;
