import React from 'react';
import {
  BlockWrapper,
  ListWrapper
} from './style';

const SideBlock = props => (
  <BlockWrapper>
    <div className="title">{props.title}</div>
    <ListWrapper>
      <li>
        <a href="http://www.baidu.com">关于旺仔</a>
      </li>
      <li>
        <a href="http://www.baidu.com">爸爸妈妈</a>
      </li>
      <li>
        <a href="http://www.baidu.com">我的闹钟</a>
      </li>
      <li>
        <a href="http://www.baidu.com">黄疸的故事</a>
      </li>
      <li>
        <a href="http://www.baidu.com">首秀</a>
      </li>
    </ListWrapper>
  </BlockWrapper>
);

export default SideBlock;
