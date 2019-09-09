const initState = {
    
}

const adminReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_VEHICLE':
            console.log('Vehicle added', action.vehicle)
            return state;
        case 'ADD_VEHICLE_ERROR':
            console.log('Add Import error',action.err)
            return state;
        default:
            return state
    }
    
}

export default adminReducer