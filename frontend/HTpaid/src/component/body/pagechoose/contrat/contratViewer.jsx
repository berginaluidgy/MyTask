import React from 'react'
import'./ContratViewer.css'
import {ArrowRight} from 'lucide-react';
import CardContrat from '../component/cardcontrat';
export default function ContratViewer() {
    const tab=[
        {level:'500 points',
            reward:'1000$',
            nbr:500,
            money:1000
        },
        {level:'1200 points',
            reward:'3200$'
            ,
            nbr:1200,
            money:3200

        },
        {level:'1800 points',
            reward:'4000$',
            nbr:1800,
            money:4000
        },
        {level:'2600 points',
            reward:'5000$',
            nbr:2600,
            money:5000
        }
    ]
   
  return (
    <>
    <CardContrat tab={tab} name={'GoViewer'} type={'Point'} issucces={false}


/>

    
    
    </>
  )}
