import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    加载中。。。
  </div>
);
const LoadableHome = Loadable({
  loading: Loading,
  loader: () => import('../page/home'),
})
export default () => (
  <Fragment>
    <Route path="/" exact render={() => <Redirect to="/home" />} />
    <Route path="/home" component={LoadableHome} />
  </Fragment>
);
