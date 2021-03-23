import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return (
      <div>正在加载中...</div>
    )
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <LoadableComponent/>;