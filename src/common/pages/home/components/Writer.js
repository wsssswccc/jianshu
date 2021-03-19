import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWriterTitle,
  RecommendWriterSwitch,
  WriterItem
} from './../style'

class Writer extends Component {
  render() {
    const { writerList } = this.props;
    return (
      <div>
        <RecommendWriterTitle>
          <span>推荐作者</span>
          <RecommendWriterSwitch>
          <span className="iconfont spin">&#xe851;</span>
            <span>换一批</span>
          </RecommendWriterSwitch>
        </RecommendWriterTitle>
        {
          writerList.map((item) => (
            <WriterItem key={item.get('id')}>
              <img
                alt=""
                className="writer-pic"
                src={item.get('imgUrl')}
              />
              <div className="writer-info">
                <h5 className="writer-name">{item.get('name')}</h5>
                <span>写了{item.get('zishu')}字·{item.get('followers')}喜欢</span>
              </div>
              <span className="follow">+关注</span>
            </WriterItem>
          ))
        }
        
      </div>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);
