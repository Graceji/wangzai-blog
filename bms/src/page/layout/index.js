import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import MarkDownArea from '../../common/markArea';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={(() => (
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
          ))()}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={(
                <span>
                  <Icon type="user" />
                  <span>用户</span>
                </span>
              )}
            >
              <Menu.Item key="3">用户列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="team" />
                  <span>文章</span>
                </span>
              )}
            >
              <Menu.Item key="6">文章列表</Menu.Item>
              <Menu.Item key="8">添加文章</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            旺仔博客后台管理系统
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Bill
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <MarkDownArea />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
