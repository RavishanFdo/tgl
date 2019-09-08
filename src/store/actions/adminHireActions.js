export const addImportHire = (importHire) => {
    return(dispatch, getState) => {
        //db call

        dispatch({type: 'ADD_IMPORT', importHire});
    }
};