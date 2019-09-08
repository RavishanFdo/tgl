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
    }
    return state
}

export default adminHireReducer