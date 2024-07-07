import React from 'react'
import IsMissiondo from '../component/isMissiondo';
import { Outlet, Link } from 'react-router-dom';
import './pageViewer.css'

import ContratViewer from '../contrat/contratViewer';
export default function PageViewer() {
  
  return (
    <div>
    <IsMissiondo first={ <Second/>} second={<ContratViewer/>}/>
   
    
    </div>
  )
}

 function Second() {
  return (
    <div> 
      <div id="containerLink">
    <div id=""><Link to='/User'> Mission</Link></div>
    <div id=""><Link to='/User/Sub'> Souscrire</Link></div>
  
</div>
<div id="Outlet">  <div id=""> <Outlet/></div></div>
</div>
  )
}
