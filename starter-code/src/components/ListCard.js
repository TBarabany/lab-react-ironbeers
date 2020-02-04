import React from 'react'
import {Link} from 'react-router-dom'

const ListCard = ({image, title, body, url}) => (
  <div className='ListCard'>
    <Link to={url}>
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{body}</p>
    </Link>
  </div>
)


export default ListCard