import React, { Component } from 'react';
import Layouts from './layouts';
import MainLayout from './layouts/mainLayout'

export default class App extends Component {
	
	render() {
		console.log(Layouts)
		return (
			<div id="main">
				<h4>Where's my layout?</h4>
				<Layouts.MainLayout />
			</div>
		);
	}
}
