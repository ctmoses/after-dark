import { combineReducers } from 'redux';
import features from './features';

const rootReducer = combineReducers({
    [features.crimes.constants.NAME]: features.crimes.reducer
});

export default rootReducer;
