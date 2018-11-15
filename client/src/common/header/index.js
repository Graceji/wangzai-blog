import React from 'react';
import {
  HeaderWrapper,
  ProfileAvatar,
  ProfileInfo,
  SocialLists,
  SocialItem,
  HeaderNav,
  HeaderNavItem
} from './style';

const Header = () => (
  <HeaderWrapper className="header">
    <div className="header-profile">
      <ProfileAvatar>
        <img src="" alt="" />
      </ProfileAvatar>
      <ProfileInfo>
        <div className="name">旺仔の小时光</div>
        <SocialLists>
          <SocialItem>
            <img src="" alt="" />
            <span>生日：2018-11-23</span>
          </SocialItem>
          <SocialItem>
            <img src="" alt="" />
            <span>中国·上海</span>
          </SocialItem>
          <SocialItem>
            <img src="" alt="" />
            <span>QQ: 80709412</span>
          </SocialItem>
          <SocialItem>
            <img src="" alt="" />
            <span>4</span>
          </SocialItem>
        </SocialLists>
      </ProfileInfo>
    </div>
    <HeaderNav className="header-nav">
      <HeaderNavItem>
        <a href="http://www.baidu.com">小家首页</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="http://www.baidu.com">新鲜事儿</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="http://www.baidu.com">我的相册</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="http://www.baidu.com">时光机</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="http://www.baidu.com">关于我</a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a href="http://www.baidu.com">留言</a>
      </HeaderNavItem>
    </HeaderNav>
  </HeaderWrapper>
);

export default Header;
