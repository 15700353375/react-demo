import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import routes from './router'
// import './index.css';
// import App from './App';
// import Contexts from './advanced/Contexts'
import * as serviceWorker from './serviceWorker';

import { LocaleProvider, DatePicker, message, Button } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';


moment.locale('zh-cn');

ReactDOM.render((
  <Router history={browserHistory} routes={routes} >
  {/* <IndexRoute component={Home} /> */}
    {/* <Route path="/" breadcrumbName="Home" component={App}>
      <IndexRoute component={Home} />
      <Route path="main" breadcrumbName="Main" component={Main} />
      <Route path="advanced" breadcrumbName="Advanced" component={Advanced} />
      <Route path="todoList" breadcrumbName="TodoList" component={TodoList} />
    </Route> */}
  </Router>
), document.getElementById('root'))

serviceWorker.unregister();