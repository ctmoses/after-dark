import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import moment from 'moment';

const renderCrimes = (crimeDataList) => {
    return crimeDataList.map(crime => {
        return (
            <tr key={ crime.incident_report_number }>
                <td>{ crime.address }</td>
                <td>{ crime.crime_type }</td>
                <td>{ crime.date }</td>
                <td>{ crime.time } - { moment(crime.time, "HH").format('hh:mm A') }</td>
            </tr>
        )
    })
}

class CrimesList extends Component {
    componentWillMount(){
        this.props.fetchCrimeData();
    }

    render(){
        return(
            <div> 
                <table className="table table-striped">
                    <thead>
                        <th>Address</th>
                        <th>Crime</th>
                        <th>Date</th>
                        <th>Time</th>
                    </thead>
                    <tbody>
                        { renderCrimes(this.props.crimes.crimeDataList) }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ crimes }) => {
    console.log(crimes);
    return { crimes }
};

export default connect(mapStateToProps, actions)(CrimesList);