import { Switch, Route } from 'react-router';
import React from 'react';
import GeneralLayout from '../Layout/GeneralLayout';
import LoginScreen from '../Screens/LoginScreen';
import LandingScreen from '../Screens/LandingPage';
import ProfileScreen from '../Screens/Profile';
import StoreScreen from '../Screens/Store';
import StreamingScreen from '../Screens/Streaming';
import StreamingLibraryScreen from '../Screens/StreamingLibrary';
import TimeLineScreen from '../Screens/TimeLines';
import Login from '../Screens/LoginScreen';

const Routes = () => {
  return (
    <>
      <Switch>
        <GeneralLayout path="/login" component={LoginScreen} />

        <GeneralLayout exact path="/" component={LandingScreen} />
        <GeneralLayout path="/profileScreen" component={ProfileScreen} />
        <GeneralLayout path="/storeScreen" component={StoreScreen} />
        <GeneralLayout path="/streamingScreen" component={StreamingScreen} />
        <GeneralLayout path="/streamingLibraryScreen" component={StreamingLibraryScreen} />
        <GeneralLayout path="/timeLineScreen" component={TimeLineScreen} />
      </Switch>
    </>
  );
};
export default Routes;
