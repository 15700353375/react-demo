import React, { Component } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
// import { Menu, Icon } from 'antd';
import './index.css';
import routes from './router'

import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
export default class App extends Component {
  state = {
    current: 'home',
    pathSnippets: []
  };

  componentDidMount() {
    let current = this.props.location.pathname.split('/')[1] || 'home'
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i);
    // debugger
    this.setState({
      current,
      pathSnippets
    });

   
    // console.log(pathSnippets)
    
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}  style={{ lineHeight: '64px' }} mode="horizontal" theme="dark">
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="mail" />Home
            </Link>
            </Menu.Item>
            <Menu.Item key="todoList">
              <Link to="/todoList">
                Todo应用
            </Link>
            </Menu.Item>
            <Menu.Item key="main">
              <Link to="/main">
                <Icon type="appstore" />
                核心概念
            </Link>
            </Menu.Item>
            <Menu.Item key="advanced">
              <Link to="/advanced">
                <Icon type="appstore" />
                高级指引
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  高级组件
                </span>
              }
            >
              <Menu.ItemGroup title="组件练习">
                <Menu.Item key="highLevel:chess">
                  <Link to="/highLevel/chess">
                    三子棋
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Header>
        <Content style={{ padding: '0 20px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <Breadcrumb routes={routes} itemRender={itemRender} /> */}
            <Home />
            <div className='main'>
              {this.props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        
      </Layout>
    )
  }
}

// function itemRender(route, params, routes, paths) {

//   const last = routes.indexOf(route) === routes.length - 1;
//   return last ? (
//     <span>{route.breadcrumbName}</span>
//   ) : (
//     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
//   );
// }

const breadcrumbNameMap = {
  '/home': 'Home',
  '/todoList': 'TodoList',
  '/main': 'Main',
  '/advanced': 'Advanced',
  '/highLevel/chess': 'Chess',
};
const Home = withRouter(props => {
  const { location } = props;

  console.log(location)
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
});