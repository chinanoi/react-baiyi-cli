import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import Logo from './assets/images/bq.jpg';
import './App.scss';

const { Header, Content, Sider } = Layout;

function App() {

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
            const key = String(index + 1);

            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,

                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: `option${subKey}`,
                    };
                }),
            };
        },
    );

    console.log('items2', items2);

    return (
        <Layout className="homeLayOut">
            <Sider width={200} className="site-layout-background">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span className="logoText">Management</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items2}
                />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout >
    );
}

export default App;