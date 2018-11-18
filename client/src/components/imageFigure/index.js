import React from 'react';
import PropTypes from 'prop-types';
import {
  ImgFigure,
  ImgFigcaption
} from './style';

const ImageFigure = ({ imgUrl, title, refProp, arrange }) => {
  if (arrange) {
    return (
      <ImgFigure className="imgFigure" ref={refProp} style={arrange}>
        <img src={imgUrl} alt="" />
        <ImgFigcaption>
          <h2 className="img-title">
            { title }
          </h2>
        </ImgFigcaption>
      </ImgFigure>
    );
  }
  return null;
};

ImageFigure.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  arrange: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool,
  ])),
  refProp: PropTypes.objectOf(PropTypes.object),
};

export default ImageFigure;
