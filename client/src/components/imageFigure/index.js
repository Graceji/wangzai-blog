import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  ImgFigure,
  ImgFigcaption
} from './style';

const ImageFigure = ({ imgUrl, title, refProp, arrange, handleClick, index }) => {
  if (arrange) {
    return (
      <ImgFigure
        className={classNames('img-figure', { 'is-inverse': arrange.isInverse })}
        ref={refProp}
        style={arrange}
        onClick={() => handleClick(index)}
      >
        {
          !arrange.isInverse
            ? (
                <Fragment>
                  <img src={imgUrl} alt="" />
                  <ImgFigcaption>
                    <h2 className="img-title">
                      { title }
                    </h2>
                  </ImgFigcaption>
                </Fragment>
              )
            : <h2>123</h2>
        }
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
  handleClick: PropTypes.func,
  index: PropTypes.number,
};

export default ImageFigure;
