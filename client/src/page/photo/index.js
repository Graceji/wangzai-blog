import React, { Component } from 'react';
import {
  PhotoWrapper,
  StageWrapper,
  ImgSection,
  ControllerNav
} from './style';
import ImageFigure from '../../components/imageFigure';
import imgDatas from '../../mock/imageData.json';

export default class Photo extends Component {
  componentDidMount () {
  }

  // 展示所有图片
  displayImages (datas) {
    return datas
      .map((data) => {
        data.imgUrl = require(`../../statics/images/${data.fileName}`);
        return data;
      })
      .map(data => (
        <ImageFigure
          {...data}
        />
      ));
  }

  render () {
    return (
      <PhotoWrapper className="photo">
        <StageWrapper className="stage">
          <ImgSection className="img-sec">
            {this.displayImages(imgDatas)}
          </ImgSection>
          <ControllerNav className="controller-nav" />
        </StageWrapper>
      </PhotoWrapper>
    );
  }
}
