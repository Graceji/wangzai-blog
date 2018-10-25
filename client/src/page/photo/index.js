import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import img1 from '../../statics/images/1.jpg';

export default class Photo extends Component {
  componentDidMount () {
    ScrollReveal()
      .reveal('.list1', {
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
        distance: '50px',
        reset: true,
      });
  }

  render () {
    return (
      <div className="headline">
        <ul style={{display: 'flex', flexWrap: 'wrap' }}>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
          <li className="list1" style={{marginRight: '15px'}}>
            <img src={img1} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
