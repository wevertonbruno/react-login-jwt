import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ErrorPage } from './styles';

const NotFound = () => (
    <ErrorPage>
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </ErrorPage>
);

export default withRouter(NotFound);
