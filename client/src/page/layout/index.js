import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './style';

// export default class Layout extends Component {
//   render () {
//     return (
//       <ContentWrapper>
//         { this.props.children }
//       </ContentWrapper>
//     );
//   }
// }

const Layout = ({ children }) => (
  <ContentWrapper>
    { children }
  </ContentWrapper>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
