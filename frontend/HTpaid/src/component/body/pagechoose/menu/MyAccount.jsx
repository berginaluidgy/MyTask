import React,{useState,useEffect} from 'react'
import './MyAccount.css'
import  HeadGlobal from '../../../head/headglobal';
import axios from 'axios';



export default function MyAccount() {
  return (
    <div>
< HeadGlobal/>

<div id="Body"><Account/></div>

<div id="Disconnect"></div>
    </div>
  )
}


const Account = () => {
    const [accountData, setAccountData] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:8000/Account',{id:localStorage.getItem('Aid@subtemps')})
            .then(response => {
                setAccountData(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    if (!accountData) {
        return <div className="loading">Chargement...</div>;
    }

    return (
        <div>
        <div className="account-container">
            <div className="account-card">
                <div className="avatar">
                    <span className="avatar-icon">👤</span>
                </div>
                <h2>Account Information</h2>
                <p><strong>User:</strong> {accountData.User}</p>
                <p><strong>Email:</strong> {accountData.email}</p>
                <p><strong>Phone:</strong> {accountData.Phone}</p>
                <p><strong>Career Money:</strong> {accountData.CareerMoney}</p>
                <p><strong>Mission Date:</strong> {new Date(accountData.MissionDate).toLocaleDateString()}</p>
                <p><strong>Point:</strong> {accountData.Point}</p>
               <p><strong>Mission Successfully Completed:</strong> {accountData.ifMissionSuccesfully ? 'Yes' : 'No'}</p>
            </div>
            </div>
            <div id="Disconnect">
            <Disconnect/>
            </div>
        </div>
    );
};



function Disconnect() {
  return (
    <div>Disconnect</div>
  )
}


