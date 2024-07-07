import React, { useEffect, useState } from 'react'
import {Eye,Signal,Share2 ,CircleX,Copy,Share} from 'lucide-react';
import './pagededicate.css'
import axios from 'axios';
import istimek from '../component/istimek';
import action from '../component/onactionCompleted';


export default function MissionViewer() {
  const [data,setdata]=useState('')
  var[timer,settimer]=useState(0)
  const [ifview,setifview]=useState(false)

  useEffect(()=>{
    axios.get('http://localhost:8000/Xapi'+localStorage.getItem('Aid@subtemps'))
    .then(res=>{
setdata(res.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])
  
  const handleRedirect = (link,name) => {
    const cleanup = istimek((timer) => {
      console.log(`L'utilisateur a été déconnecté pendant ${timer} secondes`);
    if(timer>=180){
    console.log('bravo')
    const form={
      name:name,
      idUser:localStorage.getItem('Aid@subtemps')
    }
    axios.post('http://localhost:8000/Check',form)
    .then(res=>{
      console.log(res.data)

    })
    .catch(error=>{
      console.log(error)
    })
    action(0)
    }else{
      
      console.log('regarder 3 minutes de la video')
    }
    
    });

    window.open(link, '_blank', 'noopener,noreferrer');

    // Nettoyer l'écouteur d'événements lors du démontage
    return cleanup;
  };

  function partager(){ 
setifview(true)
  }
  const handleCopy = async (linkshare) => {
    try {
      await navigator.clipboard.writeText(linkshare);
      alert('Texte copié dans le presse-papier !');
    } catch (err) {
      console.error('Erreur lors de la copie du texte : ', err);
    }
  }
  function close(){
    // setprps(false)
    setifview(false)
    
  }
  return (
    
    <div id='bigparentsMission'>
 {
        data==''?(
          <div id="">Wait...</div>
        ):(
data[0].map((video)=>(
  <div id="MissionViewer" key={video.video_id} >
<div id="img"><img src={video.thumbnails} alt="" /></div>
<div id="iconeMission">
    <div id="">
        <div id="EYE"  onClick={()=>{handleRedirect(video.youtube_video_link,video.video_id)}}>   <Eye /></div>
        {/* <div id=""><Signal /></div> */}
        <div id="Shareimp" onClick={partager}><Share2 /></div>
    </div>
</div>
{ifview==true?( <div id='bigup'>
     
      <div id="close" onClick={close} ><CircleX /></div>

      <div id="link"  > <Share />{video.linkshare}</div>
     <div id="clique" onClick={()=>{handleCopy(video.linkshare)}}> <Copy />Copier et partager</div>
    </div>):(<div>'</div>)}
        </div>
))
        )

      }
        
        
    </div>
  )
}

 function Sharefunction(props) {
  var[prps ,setprps]=useState(false)
prps=props.open
console.log(prps)
function close(){
  // setprps(false)
  setprps(false)
  console.log(prps)
}
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText('rire');
    alert('Texte copié dans le presse-papier !');
  } catch (err) {
    console.error('Erreur lors de la copie du texte : ', err);
  }
};

  return (
    
    <div id={prps==true?'bigup':'bigdown'}>
      {prps}
      <div id="close" onClick={close} ><CircleX /></div>

      <div id=""  >{linkshare}</div>
     <div id="clique" onClick={handleCopy}>Copier et partager</div>
    </div>
  )
}

