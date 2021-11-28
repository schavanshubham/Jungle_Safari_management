const reducer=(state,action)=> {
    switch(action.type)
    {
        case 'LOGGEDIN' :
            return{...state,loggedin: true}
        case 'LOGGEDIN' :
            return{...state,loggedin: false}
    }
    
}
export default reducer;