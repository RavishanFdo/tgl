import authReducer from './authReducer'
import adminHireReducer from './adminHireReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    hire: adminHireReducer
});

export default rootReducer
