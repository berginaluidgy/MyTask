import React, { useEffect, useState } from 'react'
// import'./ContratViewer.css'
import axios from 'axios';
import {ArrowRight} from 'lucide-react';
import './cardcontrat.css'


export default function CardContrat(props) {
    const tab = props.tab;
const[isdoing,setisdoing]=useState('')
const[but,setbut]=useState('')
const [selected, setSelected] = useState(null);
var id=localStorage.getItem('Aid@subtemps')
    function postMission(select,selectbut){
      setisdoing(select)
      setbut(selectbut)
      setSelected(select);
      console.log(selected,selectbut)
    }
    function send(){
      const postform={
        idUser:id,idmission:id,MissionName:props.name,missionType:props.type,
        ifMissionSuccesfully:props.issucces,predicateReceiveMone:isdoing,
        missionbut:but
      }
axios.post('http://localhost:8000/Mission/'+id,postform,{   headers: {
  'Content-Type': 'multipart/form-data'
}})
.then(res=>{
console.log(isdoing,'isdo')
window.location.reload();

})
    }


  return (
    <div id='divcontratcontainer'>

        <div id="">
            <p>Quel Mission choisissez vous?</p>
        </div>
{tab.map((element)=>(
    <div key={element.level} id="containermeet"  className={selected == element.nbr ? 'selected' : ''} onClick={() => postMission(element.nbr, element.money)}>
        <div id="level">{element.level}</div>
        <div id="arrow">
        <ArrowRight />
        </div>
        <div id="reward">{element.reward}</div></div>
))}

<div id="buttonsend" onClick={send}>
  <p>Choisir</p>
</div>

    </div>
  )
}
