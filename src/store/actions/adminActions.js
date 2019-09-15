export const addVehicle = (vehicle) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('vehicles').add({
            ...vehicle,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_VEHICLE', vehicle});
        }).catch((err) => {
            dispatch({type: 'ADD_VEHICLE_ERROR', err});
        })
    }
};