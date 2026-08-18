import React from 'react'
import"./Cards.css"


function Cards({heading,images}) {
  return (
    
    <div className="Card">
        <h2>{heading}</h2>
        <div className="hovercard">
            <img
  src={images}
 
/>
        </div>
    </div>
  )
}

export default Cards;
