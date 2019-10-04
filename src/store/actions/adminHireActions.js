export const addImportHire = (importHire) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('hires').add({
            containerType: importHire.containerType,
            pickupLocation: importHire.pickupLocation,
            pickupDatetime: importHire.pickupDatetime,
            cargoType: importHire.cargoType,
            weight: importHire.weight,
            unloadingPort: importHire.unloadingPort,
            vesselArrivalDatetime: importHire.vesselArrivalDatetime,
            destination: importHire.destination,
            driverId: importHire.driverId,
            driverName: importHire.driverName,
            customerId: importHire.customerId,
            customerName: importHire.customerName,
            vehicleId: importHire.vehicleId,
            vehicleNo: importHire.vehicleNo,
            remarks: importHire.remarks,
            hireType: 'import',
            hireStatus: 'driverPending',
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_IMPORT', importHire});
        }).catch((err) => {
            dispatch({type: 'ADD_IMPORT_ERROR', err});
        })

    }
};

export const addExportHire = (exportHire) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('hires').add({
            containerType: exportHire.containerType,
            pickupLocation: exportHire.pickupLocation,
            pickupDatetime: exportHire.pickupDatetime,
            cargoType: exportHire.cargoType,
            weight: exportHire.weight,
            loadingPort: exportHire.loadingPort,
            loadingDatetime: exportHire.loadingDatetime,
            driverId: exportHire.driverId,
            driverName: exportHire.driverName,
            customerId: exportHire.customerId,
            customerName: exportHire.customerName,
            vehicleId: exportHire.vehicleId,
            vehicleNo: exportHire.vehicleNo,
            remarks: exportHire.remarks,
            hireType: 'export',
            hireStatus: 'driverPending',
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_EXPORT', exportHire});
        }).catch((err) => {
            dispatch({type: 'ADD_EXPORT_ERROR', err});
        })

    }
};