import React,{useState}from 'react'
import {Trophy,Star} from 'lucide-react';
import './pagevideoMaker.css'
import axios from 'axios';
import Contratvideomaker from '../contrat/contratvideomaker';
import CardContrat from '../component/cardcontrat';
import IsMissiondo from '../component/isMissiondo';

export default function PageVideoMaker() {
 

return(
<div id="">
  <IsMissiondo first={ <PGBis />} second={<Contratvideomaker/>}/>
 
</div>

)}

 function PGBis() {
  const[issended,setissended]=useState(0)
  const[ishide,setishide]=useState('none')
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [video, setvideo] = useState('');
  const [videobis, setvideobis] = useState('');
  const [image, setimage] = useState('');
 const [datapost, setDatapost] = useState({
  title: title,
  desc: desc,
  video: video,
  image: image,

});
var id=localStorage.getItem('Aid@subtemps')
console.log(typeof(id))


function videofunc(event){

setvideo(event.target.files[0])
console.log(event.target.files[0])  
}
function imagefunc(event){

  setimage(event.target.files[0])
  console.log(event.target.files[0])  
  }
   
  

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(localStorage.getItem('videos'))
      console.log(JSON.parse(localStorage.getItem('videos')))

      const truedatapost={
          title: title, desc: desc, video: video, image: image,idUser:id
      }
      console.log(truedatapost,'....yesago')
      axios.post('http://localhost:8000/publish',truedatapost,{   headers: {
          'Content-Type': 'multipart/form-data'
      }})

      .then(res=>{console.log('succes')
        setissended(1) 
      })
      .catch(error=>console.log(error))
  
    console.log('titre:', title);
    console.log('description :',desc);
    console.log('video :', video);
    console.log('Miniature :', image);
  };
  function ishidefunct(){
    if(ishide=='none'){
      setishide('block')
    }else{
      setishide('none')
    }
  }

return (
<div id='pagevideaste'> 
{/* <IsMissiondo first={/> */}
<div id="barrecommande">
{/* <div id="trophe"><div id=""><Trophy/></div>
<div id=""><Star color='blue' backgroundColor='green'/></div></div> */}
<div id="" onClick={ishidefunct}>
<p>Ajouter Une video</p>
</div>
</div>

  {issended==0?(<div id="ajoutervideo">

<form style={{display:ishide}} action="" onSubmit={handleSubmit}>
 
 <div id=""> <label htmlFor=" Titre_de_la_video"> Titre</label><input type="text" name='Titre_de_la_video'  value={title} onChange={(event) => settitle(event.target.value)} /></div>

 <div id="descripdiv"> <label htmlFor="description_de_la_video"> Description</label><input type="text" name='description_de_la_video' value={desc} onChange={(event) => setdesc(event.target.value)}  /></div>
 <div id="videodiv"> <label htmlFor="putvideo">AJouter une video</label><input type='file'  required name='putvideo'   onChange={videofunc} /></div>
 <div id="imagediv"> <label htmlFor="putimage">Ajouter Une Miniature</label><input type="file"   required name='putimage'  onChange={imagefunc} /></div>
 
 <div id="submitvideaste"> <button>Publier la video</button></div>
</form>
</div>):(<div>formulaire envoyer</div>)}



</div>
)
}