import { createContext, useContext, useReducer } from "react";
import Itemdata from "../Componenets/CartContainer/stays.json";
import reducer from "../Reducer/ItemReducer";


const initialState={
    totaldata:Itemdata,
    itdata:Itemdata,
    guestdata:Itemdata,
    indata:{
        fname:"",
        gname:"",
    }
   }

const ItemContext=createContext()

const ItemContextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

const lochandler=(e)=>{
  let fname=e.target.value;
  state.indata.fname=fname
  dispatch({type:"SETLOCATION",payload:{fname}})

}
const guesthandler=(e)=>{
  let gname=e.target.value;
  state.indata.gname=gname
  dispatch({type:"SETGUEST",payload:{gname}})
//    console.log(e.target.name)
}


    return(
<ItemContext.Provider value={{...state,lochandler,guesthandler}} >
            {children}
</ItemContext.Provider>

    )
}

const useItemContext=()=>{
    return useContext(ItemContext)
}

export {ItemContext,ItemContextProvider,useItemContext }