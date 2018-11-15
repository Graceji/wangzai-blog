import React, { Component } from 'react';
import SideBlock from '../../common/sideBlock';
import {
  HomeWrapper,
  LeftWrapper,
  RightWrapper,
  ListItem,
  ItemLeft
} from './style';

export default class Home extends Component {
  state = {};

  render () {
    return (
      <HomeWrapper>
        <LeftWrapper>
          <ListItem>
            <ItemLeft>
              <a className="title">第一张照片</a>
              <p className="description">
                第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片
                第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片
                第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片
                第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片第一张照片
              </p>
              <div className="info">
                info
              </div>
            </ItemLeft>
            {/* <img src="" alt="" /> */}
            <div className="img" style={{ width: '150px', height: '105px', background: 'lightblue' }} />
          </ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
        </LeftWrapper>
        <RightWrapper>
          <SideBlock title="最近更新" />
          <SideBlock title="点击排行" />
          <SideBlock title="分类" />
          <SideBlock title="友情链接" />
        </RightWrapper>
      </HomeWrapper>
    );
  }
}
