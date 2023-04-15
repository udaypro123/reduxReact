let initialdata={
    name:"",
    products:[],
}
const inputReducer=(storedata=initialdata,action)=>{

    if(action.type==="name"){
        return {
            name:action.username,
        }
    }else if(action.type==="products"){
        return {
            ...storedata,
            products:action.payload
        }
    }
    return storedata

}
export default inputReducer;