const initState = {
    hires: [
        {id: '1', hireType: 'import', containerType: '20ft', cargoType: 'tea', destination: 'colombo', driver: 'paul'},
        {id: '2', hireType: 'export', containerType: '40ft', cargoType: 'metal', loadingPort: 'colombo', driver: 'paul'},
        {id: '3', hireType: 'import', containerType: '20ft', cargoType: 'copper', destination: 'colombo', driver: 'paul'},
    ]
}

const adminHireReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_IMPORT':
            console.log('Import added', action.importHire)
            return state;
        case 'ADD_IMPORT_ERROR':
            console.log('Add Import error',action.err)
            return state;
        case 'ADD_EXPORT':
            console.log('Export added', action.importHire)
            return state;
        case 'ADD_EXPORT_ERROR':
            console.log('Add Export error',action.err)
            return state;
        default:
            return state
    }
    
}

export default adminHireReducer