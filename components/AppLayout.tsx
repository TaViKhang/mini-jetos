'use client';

import React, { useState } from 'react';
import { Layout, Menu, Avatar, Typography } from 'antd';
import {
  PieChartOutlined,
  RocketOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Sider, Header, Content } = Layout;
const { Text } = Typography;

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const menuItems = [
    {
      key: 'dashboard',
      icon: <PieChartOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'fleet',
      icon: <RocketOutlined />,
      label: 'Fleet',
    },
    {
      key: 'schedule',
      icon: <CalendarOutlined />,
      label: 'Schedule',
    },
    {
      key: 'passengers',
      icon: <UserOutlined />,
      label: 'Passengers',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="dark"
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* Logo Area */}
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 16px',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {!collapsed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RocketOutlined style={{ fontSize: 24, color: '#1677ff' }} />
              <Text
                strong
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  letterSpacing: '0.5px',
                }}
              >
                Mini JetOS
              </Text>
            </div>
          ) : (
            <RocketOutlined style={{ fontSize: 24, color: '#1677ff' }} />
          )}
        </div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => setSelectedKey(key)}
          style={{ marginTop: 16 }}
        />
      </Sider>

      {/* Main Layout */}
      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'all 0.2s' }}>
        {/* Header */}
        <Header
          style={{
            background: '#ffffff',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          {/* Toggle Button */}
          <div
            style={{ cursor: 'pointer', fontSize: 18 }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          {/* User Profile Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Text>Admin User</Text>
            <Avatar
              size="large"
              style={{ backgroundColor: '#1677ff' }}
              icon={<UserOutlined />}
            />
          </div>
        </Header>

        {/* Content Area */}
        <Content
          style={{
            margin: 24,
            padding: 24,
            minHeight: 280,
            background: '#ffffff',
            borderRadius: 4,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
