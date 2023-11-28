import React, { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Navigate, Route } from 'react-router-dom';

export const AnonymousGuard: React.FC<RouteProps> = (
  props
): ReactElement | null => {
  // if (not logged in)) {
  //   return <Navigate to="/" />;
  // }

  return <Route {...props} />;
};
