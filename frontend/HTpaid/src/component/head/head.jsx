import React, { useState } from 'react'
import Connection from '../authconnect'
import Inscription from '../auth'
import './head.css'
export default function Head() {
    const [clicker ,setclicker]=useState('Connection')
    const [nameclicker ,setnameclicker]=useState('Inscription')
    const [clickerViewer ,setclickerViewer]=useState(<Inscription/>)
    function callins(){
setclicker('Inscription')
setnameclicker('Connection')

   setclickerViewer(<Connection/>)
    }
    function callcon(){
        setclicker('Connection')
        setnameclicker('Inscription')
     setclickerViewer(<Inscription/>)
    }
  return (
    <div>
        <div id="head">
            <div id='headSub'>
                <div id="title"><p>HTpaid</p></div>
                <div  onClick ={clicker !='Inscription'?callins:callcon } id="auth"><p>{clicker}</p></div>
            </div>
        </div>
        
        <div>
            <div id="indication">
            <p>{nameclicker}</p>
            </div> 
           {clickerViewer}
        </div>
       
    </div>
  )
}



