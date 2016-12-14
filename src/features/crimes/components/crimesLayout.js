import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; 

import CrimesList from './crimesList';

class CrimesLayout extends Component {
    render(){
        return (
            <div id="crime-main"> 
                <div className="filters-container" id="crime-filters"> 
                    Filters
                </div>
                <div className="table-container" id="crime-list">
                    <CrimesList crimes={ this.props.crimes } />
                </div>                
            </div>
        );
    }
} 

const mapStateToProps = ({ crimes }) => {
    return { crimes }
};

export default connect(mapStateToProps, actions)(CrimesLayout);