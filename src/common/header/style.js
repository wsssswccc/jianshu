import styled from 'styled-components'
import logoPic from './../../statics/logo.png'

export const HearderWrapper = styled.div`
  position: relative;
  height:58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  margin: 0 auto;
  left: 200px;
  height: 100%;
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  font-size: 17px;
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color: #969696;
  }
  &.active{
    color: #ea6F5a;
  }
`

export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom {
    position:absolute;
    width:30px;
    right: 5px;
    bottom: 5px;
    border-radius:15px;
    line-height:30px;
    text-align:center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`
export const SearchInfoList =  styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 14px;
  line-height: 15px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  height: 38px;
  width: 160px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline:none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  top:0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`