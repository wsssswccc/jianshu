import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 240px;
  padding-top: 30px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  /* overflow: hidden; */
  padding-bottom: 10px;
  .recommend-pic {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 39px;
    border-radius: 4px;
    margin-bottom: 6px;
  }
`;
export const RecommendWriterTitle = styled.div`
  width: 100%;
  height: 20px;
  padding-bottom: 10px;
  margin-top: 12px;
  font-size: 13px;
  color: #969696;
`;
export const RecommendWriterSwitch = styled.div`
  display: block;
  float: right;
  cursor: pointer;
  .iconfont {
    font-size:12px;
    padding-right:6px;
  }
`;
export const WriterItem = styled.div`
  width: 100%;
  height: 47px;
  margin-bottom: 8px;
  font-size: 14px;
  .writer-pic {
    float: left;
    width: 41px;
    height: 41px;
    margin: 3px 0;
    border: 1px solid #969696;
    border-radius: 50%;
  }
  .writer-info {
    float: left;
    overflow: hidden;
    height: 47px;
    width: 140px;
    margin-left: 10px;
    .writer-name {
      font-weight: bold;
      margin: 9px 0;
    }
    span {
      font-size: 13px;
      color: #969696;
    }
  }
  .follow {
    float: right;
    line-height: 47px;
    color: #AAC7A5;
    cursor: pointer;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  background-color: #a5a5a5;
  margin: 30px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
