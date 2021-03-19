import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './../../store';
import {
  ListItem,
  ListInfo,
  LoadMore
} from './../style'

class List extends Component {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <div>
        {
          articleList.map((item) => (
            <ListItem key={item.get('id')}>
              <img 
                alt=""
                className="pic"
                src={item.get('imgUrl')}
              />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={()=>getMoreList(articlePage)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
})

export default connect(mapState, mapDispatch)(List);
