import React from 'react'
import Services from './Services'
interface companies {
    companyName: string;
    employers: number;
    establishedAt:number
     
  }
function Companies(props: companies) {

  return (
    <div className='border'>
       <h3>company name: <span>{props.companyName}</span></h3>
       <h3>number of employers :<span> {props.employers}</span></h3>
       <h3>established At : <span>{props.establishedAt}</span></h3>
       <Services service='Bootcamp training' price={300} />
       
       
         

      </div>
  )
}

export default Companies
