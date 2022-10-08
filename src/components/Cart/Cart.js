import React from 'react'

const Cart = ({cart,handleRemoveCart}) => {
  return (
    <div>
        <h1>Order Summary </h1>
        <h2>Cart Item: : {cart.length}</h2>

        {
          cart.map((tshirt)=>(
            <div>
              <p key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>handleRemoveCart(tshirt)}>X</button>
                </p>
              
            </div>
          ))
        }
    </div>
  )
}

export default Cart