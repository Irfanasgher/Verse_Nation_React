import React from 'react';
import './LoginScreen.scss';
import { Tabs } from 'antd';
import LoginForm from '../../components/LoginForm';
import ArtistSignupForm from '../../components/ArtistSignupForm';

const { TabPane } = Tabs;

const LoginScreen = () => {
  return (
    <div id="bg">
      <div id="loginCard">
        <Tabs type="card">
          <TabPane tab="Sign up" key="1">
            <ArtistSignupForm />
          </TabPane>
          <TabPane tab="Login" key="2">
            <LoginForm />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default LoginScreen;
