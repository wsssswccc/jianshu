import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper } from './../style';

class Recommend extends PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) => (
            <div key={item.get('id')}>
              <img
                alt=""
                src={item.get('imgUrl')}
                className="recommend-pic"
              />
            </div>
          ))
        }
        111
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);
