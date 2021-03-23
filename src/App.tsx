import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import './App.css';

const { Sider, Content } = Layout;

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout
        style={{ minHeight: '100vh' }}
      >
        <Sider
          collapsible
          collapsed={isSidebarCollapsed}
          onCollapse={(collapsed) => setIsSidebarCollapsed(collapsed)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
            >
              <Link to='/page-one'>Page one</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
            >
              <Link to='/page-two'>Page two</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Switch>
            <Route exact path={['/', '/page-one']} component={PageOne} />
            <Route exact path='/page-two' component={PageTwo} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
