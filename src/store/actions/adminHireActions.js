export const addImportHire = (importHire) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('hires').add({
            ...importHire,
            hireType: 'import',
            completed: '0',
            driverAccepted: '0',
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
            ...exportHire,
            hireType: 'export',
            completed: '0',
            driverAccepted: '0',
            hireStatus: 'driverPending',
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_EXPORT', exportHire});
        }).catch((err) => {
            dispatch({type: 'ADD_EXPORT_ERROR', err});
        })

    }
};