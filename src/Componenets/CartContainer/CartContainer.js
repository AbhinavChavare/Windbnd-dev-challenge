import React from 'react'
import Item from './Item'
import "./CartContainer.css"
import { useItemContext } from '../../Context/ItemContext';

const CartContainer = () => {
 
const {guestdata}=useItemContext()

  return (
    <div className='item-head'>

<h2>Stays in Finland</h2>
<div className='container-items'>
{
  guestdata.map((ele ,ind)=>{
    return(
        <div key={ind} >
     <Item data={ele}  />
        </div>
    )

})
}
</div>
    </div>
  )
}

export default CartContainer
