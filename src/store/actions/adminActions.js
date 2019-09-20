import firebase from 'firebase/app';
import 'firebase/firestore';

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

export const addCustomer = (newCustomer) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        var config = {apiKey: "AIzaSyB0_LTBs3_DdQN17AVfkWKP82oL-2WwXFw",
        authDomain: "trans-global-logistics-969a7.firebaseapp.com",
        databaseURL: "https://trans-global-logistics-969a7.firebaseio.com"};

        var secondaryApp = firebase.initializeApp(config, "Secondary");

        secondaryApp.auth().createUserWithEmailAndPassword(
            newCustomer.email,
            newCustomer.password
        ).then((resp) => {
            var docRef = firestore.collection('users').doc(resp.user.uid)
            secondaryApp.auth().signOut();
            return docRef.set({
                userType: 'customer'
            }).then(() => {
                return firestore.collection('customers').doc(docRef.id).set({
                    firstName: newCustomer.firstName,
                    lastName: newCustomer.lastName,
                    email: newCustomer.email,
                    mobile: newCustomer.mobile,
                    dob: newCustomer.dob,
                    visibility: '1',
                    createdAt: new Date()
                })
            })
        }).then(() => {
            dispatch({type: 'CUSTOMER_ADDED'})
            
        }).catch(err => {
            dispatch({type: 'FAILED_TO_ADD_CUSTOMER', err})
        })
    }
}

export const addDriver = (newDriver) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        var config = {apiKey: "AIzaSyB0_LTBs3_DdQN17AVfkWKP82oL-2WwXFw",
        authDomain: "trans-global-logistics-969a7.firebaseapp.com",
        databaseURL: "https://trans-global-logistics-969a7.firebaseio.com"};

        var secondaryApp = firebase.initializeApp(config, "Secondary");

        secondaryApp.auth().createUserWithEmailAndPassword(
            newDriver.email,
            newDriver.password
        ).then((resp) => {
            var docRef = firestore.collection('users').doc(resp.user.uid)
            secondaryApp.auth().signOut();
            return docRef.set({
                userType: 'driver'
            }).then(() => {
                return firestore.collection('drivers').doc(docRef.id).set({
                    firstName: newDriver.firstName,
                    lastName: newDriver.lastName,
                    email: newDriver.email,
                    mobile: newDriver.mobile,
                    licenseNo: newDriver.licenseNo,
                    nic: newDriver.nic,
                    dob: newDriver.dob,
                    onHire: '0',
                    visibility: '1',
                    createdAt: new Date()
                })
            })
        }).then(() => {
            dispatch({type: 'DRIVER_ADDED'})
            
        }).catch(err => {
            dispatch({type: 'FAILED_TO_ADD_DRIVER', err})
        })
    }
}

export const editCustomer = (customerId, data) => {

    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('customers').doc(customerId).update({
            ...data
        }).then(() => {
            dispatch({type: 'CUSTOMER_UPDATED'});
        }).catch((err) => {
            dispatch({type: 'ERROR_UPDATING_CUSTOMER', err});
        })
    }
}