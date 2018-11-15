import React from 'react';
import PropTypes from 'prop-types';
import {
  ImgFigure,
  ImgFigcaption
} from './style';

const ImageFigure = ({ imgUrl, title }) => (
  <ImgFigure className="imgFigure">
    <img src={imgUrl} alt="" />
    <ImgFigcaption>
      <h2 className="img-title">
        { title }
      </h2>
    </ImgFigcaption>
  </ImgFigure>
);

ImageFigure.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
};

export default ImageFigure;
