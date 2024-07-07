import React,{useState,useEffect} from 'react'
import HeadGlobal from '../../../head/headglobal'
import axios from 'axios'
import './menuMain.css'

export default function MenuMain() {
  return (
    <div>
  < HeadGlobal/>
<div id="Metier">
    
<Metier/>
</div>
    </div>
  )
}

function Metier() {
    const [metier, setMetier] = useState(null);

    useEffect(() => {
      // Simuler l'appel API
      const fetchData = async () => {
        const response = await fetch('http://localhost:8000/Metier/'+localStorage.getItem('Aid@subtemps'));
        const data = await response.json();
        setMetier(data);
      };
  
      fetchData();
    }, []);
  
    if (!metier) {
      return <div>Chargement...</div>;
    }
  
    return (
        <div id="bigparentM">
            <div id="buttonChangeCareer">
                <p>Changer de Carriere</p>
            </div>
      <div className="metier-container">
        <h1>Informations du Métier</h1>
        <p><strong>Type :</strong> {metier.type}</p>
        <p><strong>Début de carrière :</strong> {metier.CareerB}</p>
        <p><strong>Date du contrat :</strong> {metier.contratdate}</p>
        <p><strong>Contrat :</strong> {metier.Contrat}</p>
        <p><strong>Contrat en cours :</strong> {metier.contratEnCours ? 'Oui' : 'Non'}</p>
        <p><strong>Contrat renouvelable :</strong> {metier.ContratRenouvelable ? 'Oui' : 'Non'}</p>
        <p><strong>Type de travail :</strong> {metier.typeOfWork}</p>
        <p><strong>Revenu précédent :</strong> {metier.previousMoney} €</p>
        <p><strong>Revenu actuel :</strong> {metier.money} €</p>
      </div>
</div>

    );
  };

