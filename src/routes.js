import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './app';
import MainLayout from './layouts/mainLayout'; 

export default(
	<Route path='/' component={ MainLayout }> 
		<Redirect from='*' to='/' />
	</Route>
);
