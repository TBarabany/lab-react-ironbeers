import React from 'react'
import {Link} from 'react-router-dom'

const BeerListElement = ({name, image_url, tagline, _id, contributed_by}) => (
  <div className='BeerListElement'>
    <Link to ={`/beers/${_id}`}>
      <h5>{name}</h5>
      <p>{tagline}</p>
      <img src={image_url}/>
      <p>Created by: {contributed_by}</p>
    </Link> 
  </div>
)

export default BeerListElement