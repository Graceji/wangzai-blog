import styled, { keyframes } from 'styled-components';
import cloudPng from '../../statics/images/cloud.png';

const rotate = keyframes`
  from {
    background-position: right top;
  }

  to {
    background-position: right 100px top 0;
  }
`;

export const HeaderWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
  background: url(${cloudPng}) no-repeat right top;
  .header-profile {
    display: flex;
  }
  animation-name: ${rotate};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; // 定义是否循环交替反向播放动画
  animation-play-state: running; // 指定正在运行的动画
`;

export const ProfileAvatar = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 5px;
  background: pink;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  .name {
    margin-left: 10px;
    font-size: 26px;
    color: #fff;
  }
`;

export const SocialLists = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  width: 32px;
  height: 32px;
  background: #176c86;
  margin-left: 10px;
  border-radius: 5px;
  span {
    display: none;
  }
`;

export const HeaderNav = styled.ul`
  width: 100%;
  display: flex;
  overflow: hidden;
  background: #63a1b4;
  line-height: 40px;
  height: 40px;
  margin: 20px 0;
  padding-left: 40px;
  border-radius: 5px;
`;

export const HeaderNavItem = styled.li`
  margin-right: 2px;
  &:hover {
    background: #1f7994;
  }
  a {
    color: #fff;
    display: block;
    padding: 0 20px;
  }
`;

