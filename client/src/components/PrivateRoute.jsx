import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { customer } = useApp();

  console.log("Current User: ", customer.customerName)

  return (
    <Route
      {...rest}
      render={(props) => {
        return customer.customerName !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
