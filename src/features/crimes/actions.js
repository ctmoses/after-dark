//crimes actions
import * as crimes from './actionTypes';
import axios from 'axios';

export const setCrimeData = (crimeData) => ({
    type: crimes.SET_CRIME_DATA,
    payload: crimeData
});

export const errHandler = (err) => ({
    type: crimes.ERR_HANDLER,
    payload: err
});

export function fetchCrimeData(){
    const URL = `/crimes`;
    return dispatch => {
        axios.get(URL)
            .then(response => {
                dispatch(setCrimeData(response.data));
            }).catch(err => { dispatch(errHandler(err)); });
    }
}