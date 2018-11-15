import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    Loading
  </div>
);

const LoadableHome = Loadable({
  loader: () => import('../page/home'),
  loading: Loading,
});

const LoadablePhoto = Loadable({
  loading: Loading,
  loader: () => import('../page/photo'),
});

export default () => (
  <Fragment>
    <Route path="/" exact render={() => <Redirect to="/home" />} />
    <Route path="/home" component={LoadableHome} />
    <Route path="/photos" component={LoadablePhoto} />
    {/* <Route path="/freshnews" component={} />
    <Route path="/photos" component={} />
    <Route path="/time" component={} />
    <Route path="/aboutme" component={} />
    <Route path="/gbook" component={} /> */}
  </Fragment>
);
