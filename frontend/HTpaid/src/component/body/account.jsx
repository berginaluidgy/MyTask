import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Account() {
    const[userinfo,setuserinfo]=useState({})
 
     var getaccount=localStorage.getItem('Aid@subtemps')
     console.log(getaccount)

useEffect(()=>{
  const fetchConversations = async () => { try {
    const response = await axios.post("http://localhost:8000/account", {
      identifiant: getaccount,
    });

   
  setuserinfo(response.data)
  console.log(userinfo)
  
  } catch (error) {
    console.error("Error while fetching data", error);
  }
};

fetchConversations()
},[])

  return (
    <div>

        <div id="accountente">
            <div id='backpage'></div>
            <div id='Progressebar'></div>
        </div>
        <div id='money'>
            <p className="">Widhraw</p>
            <p className="">Gagner Plus</p>
        </div>
        <div id="AccountBody">
            <div className="first"></div>
            <div className=""><div id="">
                <p></p>
            </div>
            <div id="">
                <p>Nom</p>
                <p>{userinfo.name}</p>
            </div>
          
            <div id="">
                <p>Numero de paiement</p>
                <p>{userinfo.telephone}</p>
            </div>
            <div id="">
                <p>Social Network</p>
            </div>
            <div id="">
                <p> Nombre de partage</p>
                <p>{userinfo.howmanydoyoushare}</p>
            </div></div>
        </div>
    </div>
  )
}
