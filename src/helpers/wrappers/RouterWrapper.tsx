import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouteWrapper: React.FC = props => {
  return <BrowserRouter>{props.children}</BrowserRouter>;
};

export default RouteWrapper;
