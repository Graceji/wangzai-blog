import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockWrapper,
  ListWrapper
} from './style';

const SideBlock = ({ title }) => (
  <BlockWrapper>
    <div className="title">{title}</div>
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

SideBlock.propTypes = {
  title: PropTypes.string,
};

export default SideBlock;
