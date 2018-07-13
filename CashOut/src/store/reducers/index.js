import { combineReducers } from 'redux';
import { reducer } from '../reducers/place';

const rootReducer = combineReducers({
    place: reducer
});

export default rootReducer;