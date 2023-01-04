import React, { useState } from 'react'
import { FaSearch,FaTimes } from 'react-icons/fa';
import { useItemContext } from '../../Context/ItemContext';
import { MdLocationOn } from "react-icons/md";

const HeaderSearch = () => {
    const [showSearch,setShowSearch]=useState(false)

    const {indata, guestdata,lochandler,guesthandler}=useItemContext()

  return (
    <>
      {
           showSearch?

<div className='search-cont'>
<div className='search-data-loc' >
<section>
<FaTimes onClick={()=>{setShowSearch(false)}} className='iconz-times' />
<span>
<label htmlFor="loc">LOCATION</label>
<input onChange={(e)=>lochandler(e)} name="Location" value={indata.fname} id='loc' placeholder='Location'></input>   
</span>
<span>
<label htmlFor="guest">GUEST</label>
<input onChange={(e)=>guesthandler(e)} value={indata.gname} id='guest' placeholder='Add guests'></input>   
</span>
</section>
<button className='btn-search' onClick={()=>{setShowSearch(false)}}> <FaSearch className='iconz' /> Search</button>   
</div>
<div className='search-city' >
{
  guestdata.map((ele,ind)=>{
    return(
<h4 key={ind}><MdLocationOn/> {ele.city}, {ele.country }</h4>
    )
  })
}
</div>
</div>
      :
    <div className='header-search'>
<input value={indata.fname} onClick={()=>setShowSearch(true)} readOnly placeholder='loction'></input>   
<input value={indata.gname} onClick={()=>setShowSearch(true)}  readOnly  placeholder='Add guests'></input>   
<button onClick={()=>setShowSearch(true)} > <FaSearch className='iconz' /></button>   
</div>
      }
    </>
  )
}

export default HeaderSearch
