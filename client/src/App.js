import React, { Fragment } from 'react';
import GlobalStyle from './style';
import Header from './common/header';
import Footer from './common/footer';
import Router from './router';
import Layout from './page/layout';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Layout>
      <Router />
    </Layout>
    <Footer />
  </Fragment>
);

export default App;
