import React, { Component } from 'react';
import { ContentWrapper } from './style';

export default class Layout extends Component {
  render () {
    return (
      <ContentWrapper>
        { this.props.children }
      </ContentWrapper>
    );
  }
}
