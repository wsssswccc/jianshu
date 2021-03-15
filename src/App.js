import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './common/pages/home'
import Detail from './common/pages/detail'
import store from './store';

class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    )
  }
}

export default App;
