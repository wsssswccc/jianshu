import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HearderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style.js'


class Header extends Component {
  getListArea(){
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave ,handleChangePage} = this.props;
    const pageList = [];
    const newList = list.toJS();
    if(newList.length) {
      for (let i = (page-1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
    const { focused, list,  handleInputFocus, handleInputBlur } = this.props;
    return (
      <HearderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe637;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>
                写文章
              </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HearderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header','mouseIn']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate(' + originAngle + 360 + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
