import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Conn.css'
import {Mail,CircleUser,UserRoundSearch,EyeOff,Phone} from 'lucide-react';


export default function Connection() {
  const navigateTo = useNavigate();
  const[email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [successend,setsuccessend]=useState('')
  const trying=(e)=>{

    
    
e => e.preventDefault()
axios.post('http://localhost:8000/login',{
 
    'email':email,
    'password':password,
   
   
}).then( 
  res=>{console.log('reg',res),
  localStorage.setItem('Aid@subtemps',res.data.id),
  navigateTo('/User'),
  console.log(res.data.id),


  setsuccessend('Inscription reussi')}
  
  ).catch(res=>{console.log('regno',res),
  setsuccessend('Inscription echouer')}
  )


  }
const handlechangeemail=(e)=>{
setemail(e.target.value)
console.log(e)
    }
    const handlechangepassword=(e)=>{
        setpassword(e.target.value)
        console.log(e)
            }


  

    

    return (
      <div id='formIn'>
        
         <form onSubmit={trying}>
    <div>
     <input name='idname'  placeholder='Email'  type='email' id='idname' onChange={handlechangeemail} value={email}/>

     <div id="icone"><Mail strokeWidth={0.5} /></div>

   </div>
   <div>
      <input name='idpassword' placeholder='Mot de passe' type='text' id='idpassword' onChange={handlechangepassword} value={password}/>
      <div id="icone"><EyeOff strokeWidth={0.5} /></div>

 
 
  </div>  
  <div id="snd"> <button  id='sendinput'    value="Envoyer" onClick={trying} > Envoyer</button></div>
 
  </form>
  <div id="sucesssend">
        <p>{successend}</p>
    </div>
      </div>
    )
  }
   