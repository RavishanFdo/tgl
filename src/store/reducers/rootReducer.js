import authReducer from './authReducer'
import adminHireReducer from './adminHireReducer'
import adminReducer from './adminReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    hire: adminHireReducer,
    vehicle: adminReducer,
});

export default rootReducer
