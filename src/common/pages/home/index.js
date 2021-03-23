import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {
  handleScollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { showScoll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className='banner-img' src="//upload-images.jianshu.io/upload_images/23488806-8ebae730d29122c4.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          <Topic>topic</Topic>
          <List>list</List>
        </HomeLeft>
        <HomeRight>
          <Recommend>Recommend</Recommend>
          <Writer>Writer</Writer>
        </HomeRight>
        { showScoll ? <BackTop onClick={this.handleScollTop}>顶部</BackTop> : null}
        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scoll',this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScoll: state.getIn(['home', 'showScoll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);

