import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function IsMissiondo(props) {
const[isdo ,setisdo]=useState('')
useEffect(()=>{
axios.get('http://localhost:8000/Mission/'+localStorage.getItem('Aid@subtemps'))
.then(res=>{
    console.log(res)
    if(res.data==200){
setisdo(props.first)
    }
    else{
        setisdo(props.second)
    }
})
.catch(error=>{
    console.log()
})
},[isdo])
  return (
    <div id='rendu'>{isdo}</div>
  )
}

