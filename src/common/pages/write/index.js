import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(loginStatus) {
      return (
        <div>写文章页面</div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(Detail);
