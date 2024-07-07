import React from 'react'

export default function CardView( key,item) {
  return (
    <div>
<div id="imagecard"><img src={item.image} alt="imgyoutuhbe" /></div>
<div id="cardinformation">
 
  <div><p>{item.prixview}$US</p></div>
  <div><p>{item.prixshare}$US</p></div>
</div>
<div id="descr">
  <p>{item.description}</p>
</div>
    </div>
  )
}
