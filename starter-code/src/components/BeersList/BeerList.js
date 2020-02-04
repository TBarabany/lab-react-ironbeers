import React from 'react'
import BeerListElement from './BeerListElement'


const BeerList = ({beerArray}) => (
  <div className='BeerList'>
    {beerArray.map(e =>(
      <BeerListElement {...e}/>
    ))}
  </div>
)

export default BeerList