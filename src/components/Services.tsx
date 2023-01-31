import React from 'react'

interface services{
    service: string;
    price: number;
}
function Services(props:services) {
  return (
    <div>
      <h3>service : <span>{props.service}</span></h3>
      <h3>price : <span>{props.price}</span></h3>
    </div>
  )
}

export default Services
