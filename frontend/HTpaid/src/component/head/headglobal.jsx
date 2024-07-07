import React, { useEffect, useRef, useState } from 'react'
import './head.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircleUser, Menu, X,Gem} from 'lucide-react';
// import { HousePlus } from 'lucide-react';


export default function HeadGlobal() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const[Data,setData]=useState({})
    const navigateTo = useNavigate();
    
    const toggle = () => {
        toggleMenu()
        console.log(menuOpen)
        if (window.innerWidth <= 768) {
            // Si l'écran n'est pas un ordinateur (par exemple, téléphone), toggleMenu ajuste l'affichage.
            if (menuRef.current.style.display == 'block') {
                menuRef.current.style.display = 'none';
            } else {
                menuRef.current.style.display = 'block';
            }
        }else{
            menuRef.current.style.display ='flex'
        }
    }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    function openMetier(){
        
            navigateTo('/Metier')
       
    }
    function openaccount(){
        
        navigateTo('/User/Account')
   
}

function opencontrole(){

navigateTo('/User/Controle')


}
function gohistori(){
 
    navigateTo('/User');
  
}

useEffect(() => {
    axios.post('http://localhost:8000/Account',{id:localStorage.getItem('Aid@subtemps')})
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
}, []);
  return (
    <div id='bigstage' >
 <div id="menu-toggle" onClick={toggle} >
                {menuOpen ? <X /> : <Menu />}
            </div>
            <div id="onestage" >
    <div id="substage"><div id="icone">
        <p className="logo">MyTask</p>
    </div></div>
    <div id="substage1" ref={menuRef}>
        <div id="dividesetting" onClick={openMetier}>
            <p>Metier</p>
        </div>
        <div id="dividesetting" onClick={opencontrole}>
            <p> Cont./Message</p>
        </div>
        <div id="dividesettingnone">
            <p>Partenariat</p>
        </div>
        <div id="dividesetting" onClick={openaccount}>
            <p>Mon Compte</p>
        </div>
        <div id="dividesetting">
            <p>{Data.Point}</p>
        </div>
    </div>
</div>
<div id="twostage">
    
    <div id="nexto" onClick={openaccount}><p><CircleUser  className ='iconeuser' strokeWidth={0.5} color='orange' /></p> </div>
   
</div>
<div id="deuxiemepartie">
<div id="home" onClick={gohistori}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus"><path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"/><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M15 6h6"/><path d="M18 3v6"/></svg>
        </div>
<div id="incudesaferemove">
            <p>{Data.Point}  <Gem size={17}  color='darkgoldenrod'/> </p>
        </div>
</div>
    </div>
  )
}

