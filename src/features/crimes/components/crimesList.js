import React from 'react';
import moment from 'moment';

const renderCrimes = (crimeDataList) => {
    if(!crimeDataList) { return null }
    return crimeDataList.map(crime => {
        return (
            <tr key={ crime.incident_report_number }>
                <ul>{ crime.address }</ul>
                <ul>{ crime.crime_type }</ul>
                <ul>{ crime.date }</ul>
                <ul>{ crime.time } - { moment(crime.time, "HH").format('hh:mm A') }</ul>
            </tr>
        )
    })
}

const CrimesList = (crimes) => {
    return(
        <div className="table"> 
            <li className="table-header">
                <ul className="cell">Address</ul>
                <ul className="cell">Crime</ul>
                <ul className="cell">Date</ul>
                <ul className="cell">Time</ul>
            </li>
            <div className="list-rows">
                <li className="table-row">
                    <ul className="cell">1234 Pl</ul>
                    <ul className="cell">Doin things</ul>
                    <ul className="cell">Today</ul>
                    <ul className="cell">12:00 PM</ul>
                </li>
                <li className="table-row">
                    <ul className="cell">1234 Pl</ul>
                    <ul className="cell left-align">Doin more things</ul>
                    <ul className="cell">Today</ul>
                    <ul className="cell">12:01 PM</ul>
                </li>
                <li className="table-row">
                    <ul className="cell">1234 Pl</ul>
                    <ul className="cell">Doin more things</ul>
                    <ul className="cell">Today</ul>
                    <ul className="cell">12:01 PM</ul>
                </li>
                <li className="table-row">
                    <ul className="cell">1234 Pl</ul>
                    <ul className="cell">Doin more things</ul>
                    <ul className="cell">Today</ul>
                    <ul className="cell">12:01 PM</ul>
                </li>
            </div>
        </div>
    );
}

export default CrimesList;