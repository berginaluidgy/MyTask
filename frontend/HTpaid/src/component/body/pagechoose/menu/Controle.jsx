import React,{useState,useEffect} from 'react'
import './controle.css'
import axios from 'axios';
axios.defaults.withCredentials = true; // Pour les cookies
import HeadGlobal from '../../../head/headglobal'
export default function Controle() {
  return (
    <div>
    <HeadGlobal/>
    <div id="main">

        <Controlemain/>
    </div>
    </div>
  )
}




function Controlemain() {
    const[messages,setmessages]=useState([])
    const[findMessage,setfindMessage]=useState(null)
useEffect(()=>{
axios.get('http://localhost:8000/Message/1')
.then(res=>{
    console.log(res.data)
    setmessages([res.data])
   
})
 
},[])
console.log(messages)
function handleSendMessage(){
    const formdata={
        send:1,
        receive:2,
        userid:localStorage.getItem('Aid@subtemps'),
        content:findMessage
    }
    axios.post('http://localhost:8000/Message/1',formdata)
    .then(res=>{
        console.log(res.data)
        setfindMessage('')
    })
    .catch(error=>{
        console.log(error)
        setfindMessage('')
    })
}

  
    return (
      <div>
<div className="App">
      <div className="messages">
        {messages.length>0?(messages.map((message) => (
            <div key={message.id} className="message">
            <div className="message-header">
             
              <span className="message-profession">{message.Send}</span>
            </div>
            <div className="message-text">{''}</div>
          </div>
  ))):(<div>Aucun message</div>)}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={findMessage}
          onChange={(e) => setfindMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
      </div>
    );
  }
  