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
  constructor (props) {
    super(props);
    this.stage = React.createRef();
    this.imgFig = React.createRef();
    this.state = {
      imgsArrangeArr: [
        // {
        //   pos: {
        //     left: 0,
        //     top: 0,
        //   },
        //   rotate: 0, // 旋转角度
        //   isInverse: false,    // 图片正反面
        //   isCenter: false,    // 图片是否居中
        // }
      ],
    };
  }

  componentDidMount () {
    // 计算“舞台”大小
    const stageW = this.stage.current.scrollWidth;
    const stageH = this.stage.current.scrollHeight;
    const halfStageW = Math.ceil(stageW / 2);
    const halfStageH = Math.ceil(stageH / 2);

    // 初始化数据, imgsArrangeArr与imgDatas一一对应
    this.setState(() => ({
      imgsArrangeArr: imgDatas.map(() => ({
        pos: {
          left: 0,
          top: 0,
        },
        rotate: 0, // 旋转角度
        isInverse: false, // 图片正反面
        isCenter: false, // 图片是否居中
      })),
    }), () => {
      // 计算每张图片区域的大小
      const imgFigW = this.imgFig.current.scrollWidth;
      const imgFigH = this.imgFig.current.scrollHeight;
      const halfImgFigW = Math.ceil(imgFigW / 2);
      const halfImgFigH = Math.ceil(imgFigH / 2);

      // 计算中心图片的位置
      this.centerPos = {
        left: halfStageW - halfImgFigW,
        top: halfStageH - halfImgFigH,
      };

      // 计算左侧、右侧区域图片排布位置的取值范围
      this.hPosRange = {
        leftSecX: [-halfImgFigW, halfStageW - imgFigW * 3 / 2],
        rightSecX: [halfStageW + halfImgFigW, stageW - halfImgFigW],
        y: [-halfImgFigH, stageH - halfImgFigH],
      };

      // 计算上侧区域图片排布位置的取值范围
      this.vPosRange = {
        x: [halfStageW - imgFigW, halfStageW],
        topY: [-halfImgFigH, halfStageH - imgFigH * 3 / 2],
      };

      this.rearrange(0);
    });

    // 图片组件加载后，为每张图片计算其位置
    // this.rearrange(0);
  }

  // 取两个值之间的随机数
  getRangeRandom (low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
  }

  /*
    * 获取 0~30° 之间的一个任意正负值
  */
  get30DegRandom () {
    return Number(`${Math.random() > 0.5 ? '' : '-'}${Math.ceil(Math.random() * 30)}`);
  }

  /*
   * 重新布局所有图片
   * @param centerIndex 指定居中排布哪个图片
  */
  rearrange (centerIndex) {
    let imgsArrangeArr = this.state.imgsArrangeArr;
    // 居中图片数组
    const imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

    // 首先居中 centerIndex 的图片, 居中的 centerIndex 的图片不需要旋转
    imgsArrangeCenterArr[0] = {
      pos: this.centerPos,
      rotate: 0,
      isCenter: true,
    };

    const topImgNum = Math.floor(Math.random() * 2); // 上侧图片取一个或者不取
    const topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));

    // 上侧图片数组
    let imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

    // 布局位于上侧的图片
    imgsArrangeTopArr = imgsArrangeTopArr.map(() => ({
      pos: {
        left: this.getRangeRandom(this.vPosRange.x[0], this.vPosRange.x[1]),
        top: this.getRangeRandom(this.vPosRange.topY[0], this.vPosRange.topY[1]),
      },
      rotate: this.get30DegRandom(),
      isCenter: false,
    }));

    // 布局位于左右两侧的图片
    imgsArrangeArr = imgsArrangeArr.map((...args) => {
      let hPosRangeLORX;
      if (args[1] < imgsArrangeArr.length / 2) {
        hPosRangeLORX = this.hPosRange.leftSecX;
      } else {
        hPosRangeLORX = this.hPosRange.rightSecX;
      }

      return ({
        pos: {
          left: this.getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1]),
          top: this.getRangeRandom(this.hPosRange.y[0], this.hPosRange.y[1]),
        },
        rotate: this.get30DegRandom(),
        isCenter: false,
      });
    });

    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
    if (imgsArrangeTopArr.length) {
      imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
    }

    this.setState(() => ({
      imgsArrangeArr,
    }));
  }

  // 展示所有图片
  displayImages (datas) {
    return datas
      .map((data) => {
        data.imgUrl = require(`../../statics/images/${data.fileName}`);
        return data;
      })
      .map((data, index) => (
        <ImageFigure
          key={data.fileName}
          refProp={this.imgFig}
          arrange={this.state.imgsArrangeArr[index]}
          {...data}
        />
      ));
  }

  render () {
    return (
      <PhotoWrapper className="photo">
        <StageWrapper className="stage" ref={this.stage}>
          <ImgSection className="img-sec">
            {this.displayImages(imgDatas)}
          </ImgSection>
          <ControllerNav className="controller-nav" />
        </StageWrapper>
      </PhotoWrapper>
    );
  }
}
