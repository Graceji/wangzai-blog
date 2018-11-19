import styled from 'styled-components';

export const PhotoWrapper = styled.div`
  height: 100%;
`;

/* stage -- start */
export const StageWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;
/* stage -- end */

/* image -- start */
export const ImgSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: #ddd;
  overflow: hidden;
  persitive: 1800px;
`;
/* image -- start */

/* controller -- start */
export const ControllerNav = styled.nav`
  position: absolute;
  width: 100%;
  height: 20px;
  text-align: center;
  left: 0;
  bottom: 30px;
  background: pink;
`;
/* controller -- start */
