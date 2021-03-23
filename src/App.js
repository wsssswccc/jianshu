import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './common/pages/home';
import Login from './common/pages/login';
import Detail from './common/pages/detail/loadable';
import Write from './common/pages/write';
import store from './store';

class App extends Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
