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
  transform-style: preserve-3d;
  transform-origin: 0 50% 0;
  transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;

  img {
    width: 150px;
    height: 150px;
  }

  &.is-inverse {
    transform: translate(180px) rotateY(180deg);
  }

  & .img-back {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 15px;
    overflow: auto;

    color: #a7a0a2;
    font-size: 18px;
    line-height: 1.25;
    text-align: left;

    background-color: #fff;

    box-sizing: border-box;
    transform: rotateY(180deg) translateZ(1px);
    backface-visibility: hidden;

    p {
      margin: 0;
    }
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
