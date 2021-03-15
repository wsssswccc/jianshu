import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className='banner-img' src="https://upload-images.jianshu.io/upload_images/23488806-8ebae730d29122c4.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          <Topic>topic</Topic>
          <List>list</List>
        </HomeLeft>
        <HomeRight>
          <Recommend>Recommend</Recommend>
          <Writer>Writer</Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;

