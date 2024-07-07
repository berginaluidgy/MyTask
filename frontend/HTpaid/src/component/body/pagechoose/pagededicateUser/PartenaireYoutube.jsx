import React, { useState } from 'react'
import DiagrammeExample from './pagecharts'
import {MailCheck,Cable,ShieldOff,BookmarkX,MousePointerClick} from 'lucide-react';
import './partenaireYoutube.css'
import axios from 'axios';
import CardContrat from '../component/cardcontrat';

import ContratPartenaire from '../contrat/Contratpartenaire';
import IsMissiondo from '../component/isMissiondo';
export default function PartenaireYoutube() {
const[view,setview]=useState(<IsMissiondo first={<HomePY/>} second={<ContratPartenaire/>}/>)

function setadd(){
setview(<HomePY/>)
}
function setdetail(){
    setview(<Detail/>)
    }
    function setmission(){
        setview(<ContratPartenaire/>)
        }
        function setControle(){
            setview(<Controle/>)
        }
  return (
    <div id='Youtubepartenaire'>

      <div id="tab">
<div id="AddwebYoutube" onClick={setadd}><p id="">Ajouter </p></div>
<div id="Addweb" onClick={setControle}><p id="">Controle</p></div>
<div id="Addweb" onClick={setdetail}><p id="">Detail</p></div>
<div id="Addweb" onClick={setmission}><p id="">Mission</p></div>
</div>

{/* 
<ContratPartenaire/>
        <HomePY/>
        <Detail/> */}
      
            {view}
      

    </div>
  )
}


function HomePY() {
    const[check,setcheck]=useState('False')
    const[nom,setnom]=useState('')
    const[email,setemail]=useState('')
    const[nmbr,setnmbr]=useState('')
    const[password,setpassword]=useState('')

function submit(event){
    event.preventDefault();
    console.log(nom,nmbr,password,check)
    const sendform={
        nom:nom,sub:nmbr,password:password,email:email,check:check ,Userid:localStorage.getItem('Aid@subtemps')
    }
    axios.post('http://localhost:8000/social',sendform,{
         headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res=>{
        console.log('success')
    })
    .catch(error=>{console.log(error)})
}
  return (
    <div id='chaineYoutube'>
<form action="Post" onSubmit={submit}>
<div id=""><label htmlFor="nomcheck">La chaine youtube est monetisee?</label><input type="checkbox"  onChange={(event)=>{setcheck(check=='False'?'True':'false')}} name='nomcheck'/></div>
    <div id="nom"><label htmlFor="nom">Chaine Youtube</label><input type="text" name='nom' value={nom} onChange={(event)=>{setnom(event.target.value)}}/></div>
    <div id="sub"><label htmlFor="sub">Nombre d'abonnes</label><input type="number" name='sub' value={nmbr} onChange={(event)=>{setnmbr(event.target.value)}}/></div>
    <div id="email"><label htmlFor="email">Votre Email</label><input type="email" name='email' value={email} onChange={(event)=>{setemail(event.target.value)}} /></div>
    <div id="password"> <label htmlFor="password">Votre Mot de passe</label><input type="password"  name='password' value={password}  onChange={(event)=>{setpassword(event.target.value)}}/></div>

<div id="sendinfo"><button>send</button></div>
</form>




    </div>
  )
}
function Detail() {
  return (
    <div>
        
<div id="info">
    <div id="info">
        <details>
            <summary>Desactive le facteur a Double Authentification</summary>
            <ol>
  <li>Connectez-vous à votre compte Google.</li>
  <li>Cliquez sur "Sécurité" dans le menu de gauche.</li>
  <li>Faites défiler vers le bas jusqu'à la section "Connexion à Google" et cliquez sur "Vérification en deux étapes".</li>
  <li>Connectez-vous à nouveau si nécessaire.</li>
  <li>Cliquez sur "Désactiver" pour désactiver la vérification en deux étapes.</li>
</ol>
        </details>
        <details>
            <summary>Comment recuperer votre chaine Youtube?</summary>
Pour desactier le facteur 
        </details>
        <details>
            <summary>combien d'argent vais je Gagner?</summary>
Pour desactier le facteur 
        </details>
        <details>
            <summary>Comment recuperer votre chaine Youtube?</summary>
Pour desactier le facteur 
        </details>
        <details>
            <summary>pourquoi vous ne pourez pas monter sur votre chaine Youtube en fesant partie de ce programme?</summary>
Pour desactier le facteur 
        </details>
    </div>
</div>
    </div>
  )
}
 function rules(){
    return(
        <div id="">

        </div>
    )
 }
 function Controle() {
    return (
      <div className='controle'>
        <h2>Partenaire Youtube</h2>
        <div>
          <h3><ShieldOff  color='gold'/> -1. Récupérer ma chaîne Youtube</h3>
          {/* Ajoutez ici le code pour récupérer la chaîne Youtube */}
        </div>
        <div>
          <h3><BookmarkX  color='gold'/> -2. Fermer mon compte</h3>
          {/* Ajoutez ici le code pour fermer le compte */}
        </div>
        <div>
          <h3><MousePointerClick  color='gold'/> -3. Vendre définitivement ma chaîne</h3>
          {/* Ajoutez ici le code pour vendre la chaîne */}
        </div>
        <div>
          <h3> <Cable color='gold' /> -4. Membres</h3>
          {/* Ajoutez ici le code pour afficher les membres */}
        </div>
      </div>
    );
  }
  