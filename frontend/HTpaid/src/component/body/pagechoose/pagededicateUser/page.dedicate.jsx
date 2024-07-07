import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageViewer from './pageViewer';
import Subscribe from './subscribe';
import PartenaireYoutube from './PartenaireYoutube';
import PageVideoMaker from './pageVideoMaker';
import ContratViewer from '../contrat/contratViewer';
import Contratvideomaker from '../contrat/contratvideomaker';
import action from '../component/onactionCompleted';
export default function PageD() {
  const [data,setdata]=useState('')
  const [MyView,setMyView]=useState('')
  useEffect(()=>{
axios.get('http://localhost:8000/Metier/'+localStorage.getItem('Aid@subtemps'))
.then(res=>{
  setdata(res.data)
  console.log(res.data.type)
  
 
}
)
.catch(error=>console.log(error))



  },[])
useEffect(()=>{
  if (data) {
  if (data.type=='Manager'){
    setMyView('YES')
  }
else if(data.type=='Video Maker'){
  setMyView(<PageVideoMaker/>)

}
else if(data.type=='Partenaire'){
  setMyView(<PartenaireYoutube/>)
  console.log('ui')
}
else if(data.type=='Viewer'){
  setMyView(<PageViewer/>)
  console.log('ui')
}
}
},[data])
  

console.log(MyView)
  

  return (
    
    <div>
      {/* <PartenaireYoutube/> */}
 {/* <PageVideoMaker/>       */}
{/* <ContratViewer/> */}
{/* <Contratvideomaker/> */}
       
{data==''?(<div>Chargement..</div>):(MyView)}
        </div>

  )
}
