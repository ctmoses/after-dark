//crimes reducer
import * as crimes from './actionTypes';

const setInit = () => {
    return { crimeDataList: [], err: null };
};

export default (state = setInit(), action) => {
    switch(action.type){
        case crimes.SET_CRIME_DATA:
            let crimeDataList = action.payload;
            return {crimeDataList, err: null};
        case crimes.ERR_HANDLER:
            return { crimesDataList: [], err: action.payload }
    }
    return state;
}