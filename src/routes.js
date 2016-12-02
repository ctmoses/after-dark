import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './app';

export default(
	<Route path='/' component={ App }> 
		<Redirect from='*' to='/' />
	</Route>
);
