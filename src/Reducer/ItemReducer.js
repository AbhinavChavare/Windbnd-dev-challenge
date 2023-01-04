import React from 'react'

const ItemReducer = (state,action) => {
 switch(action.type){

    case "SETLOCATION":
   let fname=action.payload.fname   
//    console.log(fname)
let filterlocation=state.totaldata.filter((ele)=>{
    return(ele.city.includes(fname))
})
return{
    ...state,itdata:filterlocation, guestdata:filterlocation,
}
    case "SETGUEST":
   let gname=parseInt(action.payload.gname)   
   console.log(gname)
   if(gname>0){
let filterguest=state.itdata.filter((ele)=>{
    console.log(ele.maxGuests)
    // console.log(state.itdata.beds)
         return(ele.maxGuests==gname)

})
return{
    ...state, guestdata:filterguest,
}
   }
else{
   
    return{
        ...state,guestdata:state.itdata
    }
}
    

    default:return{
        ...state
    }
 }
}

export default ItemReducer
