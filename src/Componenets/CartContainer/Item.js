import React from 'react'
import { FaStar } from "react-icons/fa";



const Item = ({ data }) => {


    return (
        <>
            <div className='item-data'>
                <img src={data.photo}
                ></img>
                <div className='text-item'>
                    <div className={`${data.superHost ? "host-btn" : "disp-none"} `}>{data.superHost ? "SuperHost" : null}</div>
                    <h5>{data.type}</h5>
                    <h5>{data.beds ? (data.beds + " beds") : null}</h5>
                    <div className='flex-center'><FaStar className='ic-star' /> {data.rating}</div>
                </div>
                <div className='disp-start'>
                <h4>{data.title}</h4>
                </div>
            </div>
        </>
    )
}

export default Item
