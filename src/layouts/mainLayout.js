import React, { Component } from 'react';
import { connect } from 'react-redux';
import features from '../features';

export default class MainLayout extends Component { 
    render(){
        console.log(features.crimes.components.crimesList)
        return (
            <div id="main">
                <div id="header">
                    <div className="header-title" >Austin Crime Map</div>
                </div>
                <div id="map-container" className="section"></div>
                <div id="crime-container" className="section">
                    <features.crimes.components.crimesLayout />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state; 
};

const mapDispatchToProps = () => {
    return {
        crimesActions: features.crimes.actions
    }
}

//export default connect(mapStateToProps)(MainLayout);