import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
);

const GeneralLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default GeneralLayout;
