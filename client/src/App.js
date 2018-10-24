import React, { Component, Fragment } from 'react';
import GlobalStyle from './style';
import Header from './common/header';
import Footer from './common/footer';
import Router from './router';
import Layout from './page/layout';

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Layout>
          <Router />
        </Layout>
        <Footer />
      </Fragment>
    );
  }
}