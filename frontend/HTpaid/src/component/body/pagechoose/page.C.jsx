
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './page.c.css';
import {  } from 'lucide-react';

export default function Pagec() {
  const navigateTo = useNavigate();
  const localtake=localStorage.getItem('Aid@subtemps')
  const newdate=new Date();
  const newdateformater=newdate.toDateString();
  console.log(newdateformater)


  const [datapost, setDatapost] = useState({
    id: '',
    type: '',
  
  });
  function setcareer(){
    axios.post('http://localhost:8000/setCareer',datapost)
    .then(res=>{
      console.log('envoye')
      navigateTo('/User')

    })
    .catch(console.error('There was an error!', error))

  


  }
  
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (index,name) => {
    setDatapost({
      id: localtake,
      type:name,
      CareerB:''
    })
    setSelectedDiv(index);
    
console.log(datapost)

  };

  const [data, setData] = useState([]);
  const [tab, setTab] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/info/true')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
console.log(data)

  return (
    <div>
      <div   id="choosetextdiv">
        <p>Quel Carriere choisissez vous?</p>
      </div>
      <div  id="bigdivcard">

{data.map((dataUnique,index)=>(
  <div id='carddecision4'
  key={index}
  className={selectedDiv === index ? 'faded' : 'selected'}
              onClick={() => handleClick(index,dataUnique?.[0])}>
  <div id="firstcardds">
            <div>{dataUnique?.[0]}</div>
            <div id=""></div>
          </div>
          <div id="secondcardds">
            <div id="">{dataUnique?.[1]}</div>
            <div id=""></div>
          </div>
</div>

))}


  




      </div>
      <div id="buttoncardsend" onClick={setcareer}>
        <div id="buttondiv">
          <p>Choisir</p>
        </div>
      </div>
    </div>
  );
}