import React, {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import './ProductCard.scss'

function ProductCard({ item }) {
  const [active, setActive] = useState(false);
  const [view, setView] = useState(false);
  return (
    <div onMouseEnter={()=>{setView(true)}} onMouseLeave={()=>{setView(false)}}  className='productsContainer'>
      {
        !active ? 
        <FavoriteBorderIcon onClick={()=>{setActive(true)}} className='icon'/>:
        <FavoriteIcon onClick={()=>{setActive(false)}} className='icon' style={{color: 'red'}} />
      }

      <img src={item.image} alt="" />
      <h3>{item.name}</h3>
      <div>
        <p className='price'>Rs. 599 </p><span className='priceW'>Rs. {item.price}</span>
      </div>
      <p><Rating name="size-large" defaultValue={item.rating} size="small" />
        <span className='reviews'>(200)</span></p>
        <p className={view ? 'view': 'uView'}>View Product</p>
    </div>
  )
}

export default ProductCard