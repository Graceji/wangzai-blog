import styled from 'styled-components';

export const ImgFigure = styled.figure`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: #fff;
  cursor: pointer;
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
