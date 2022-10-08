import React from 'react'
import "./Tshirt.css"

const Tshirt = ({tshirt}) => {
    const {picture,name,price} = tshirt;
  return (
    <div className='tshirt-details'>
        <img src={picture} alt="" />
        <h2>{name}</h2>
        <h4>{price}</h4>
        <button>Buy This</button>
    </div>
  )
}

export default Tshirt