
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import HeadGlobal from '../head/headglobal';
import Caroussel from './pagechoose/caroussel/caroussel';
import './body.css'
import PageD from './pagechoose/pagededicateUser/page.dedicate';
export default function Home() {
 
 
  return (
    <div>
  <div id="headerG">
   < HeadGlobal/>
   {/* <div id="cc"><Caroussel/></div> */}
   <div id="containerpagesetting"><PageD/></div>
  </div>
    </div>
  )
}
