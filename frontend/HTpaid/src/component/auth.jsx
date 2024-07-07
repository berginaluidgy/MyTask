import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ins.css'
import {Mail,CircleUser,UserRoundSearch,EyeOff,Phone} from 'lucide-react';


export default function Inscription() {
const navigateTo =useNavigate()
    const[names,setnames]=useState('')
    const[Prenoms,setprenoms]=useState('')
    const[Passwords,setpasswords]=useState('')
    const[emails,setemails]=useState('')
    const[telephones,settelephones]=useState('')
    const [successend,setsuccessend]=useState('')
    const handlechange=(e)=>{
setnames(e.target.value)
console.log(e.target.value)
    }
    const handlechangeprenom=(e)=>{
        setprenoms(e.target.value)
        console.log(e)
            }
           
                    const handlechangepassword=(e)=>{
                        setpasswords(e.target.value)
                        console.log(e)
                            }  
                            const handlechangeemail=(e)=>{
                                setemails(e.target.value)
                                console.log(e)
                                    }
                                    const handlechangetelephone=(e)=>{
                                        settelephones(e.target.value)
                                        console.log(e)
                                            }  

 const submit=(sub)=>{ console.log('here')
 sub.preventDefault()
    axios.post('http://localhost:8000/register',{
  'name':names,
    'email':emails,
    'password':Passwords,
    'username':names,
    'telephone':telephones,
   
}).then( 
res=>{navigateTo('/Career'),
localStorage.setItem('Aid@subtemps',res.data.id),
setsuccessend('Inscription reussi')


}

).catch(res=>{console.log('regno'),
setsuccessend('Inscription echouer')}
)
setInterval(() => {
    setsuccessend('')
}, 8000);


  }                                          
  return (
    <div id='formIn'>
<form  onSubmit={submit}>
 <div>

    <input name='idname'  placeholder='Nom'  type='text' id='idname' onChange={handlechange} value={names}/>
    <div id="icone"><CircleUser strokeWidth={0.5} /></div>
 </div>
 <div>

    <input name='idlastname'  placeholder='Prenom' type='text' id='idlastname' onChange={handlechangeprenom} value={Prenoms}/>
    <div id="icone">    <UserRoundSearch strokeWidth={0.5} /></div>

</div>
<div>

    <input name='idemail'  placeholder='Email' type='email' id='idemail' onChange={handlechangeemail} value={emails}/>
    <div id="icone"><Mail strokeWidth={0.5} /></div>
</div>

<div>

    <input name='idpassword' placeholder='Mot de passe' type='text' id='idpassword' onChange={handlechangepassword} value={Passwords}/>
    <div id="icone"> <EyeOff strokeWidth={0.5} /></div>
</div>
<div>
 
    <input name='idlastname'placeholder='Telephone'  type='text' id='idlastname' onChange={handlechangetelephone} value={telephones}/>
    <div id="icone">   <Phone strokeWidth={0.5} /></div>
</div>
<button id='btnIn' type="submit" onClick={submit}>Envoyer</button>
</form>

<div id="sucesssend">
        <p>{successend}</p>
    </div>
    </div>
    
  )
}


