import styled from 'styled-components';

export const ImgFigure = styled.figure`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: #fff;
  cursor: pointer;
  left: ${props => props.style.pos.left}px;
  top: ${props => props.style.pos.top}px;
  transform: rotate(${props => props.style.rotate}deg);
  z-index: ${props => props.style.isCenter ? 10 : 0};
  img {
    width: 150px;
    height: 150px;
  }
`;

export const ImgFigcaption = styled.figcaption`
  .img-title {
    color: #a7a0a2;
    font-size: 16px;
    position: relative;
    top: 6px;
  }
`;
