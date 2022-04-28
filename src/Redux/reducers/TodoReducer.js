const initialData={
    list:[]
}


const listReducer = (state=initialData, action)=>{

    switch(action.type){

        case 'GET_LIST':
            return {
                ...state,
                list: action.payload
            }
        case 'ADD_ROW':
            return {
                ...state,
                }
            
        case 'DEL_ROW':
            return {
                ...state,
                }
            
        case 'EDIT_ROW':
            return {
                ...state,
                }
            
        default:
            return state;
    }
}

export default listReducer