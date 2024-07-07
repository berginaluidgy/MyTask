import React from 'react'
import'./ContratViewer.css'
import {ArrowRight} from 'lucide-react';
import CardContrat from '../component/cardcontrat';
export default function ContratPartenaire() {
    const tab=[
        {level:' >= 2000 Abonnees',
            reward:'2000$',
            nbr:2000,
            money:2000
        },
        {level:' > 3000 Abonnees',
            reward:'4000$',
            nbr:3000,
            money:4000
        },
        {level:' > 10000 Abonnees',
            reward:'6200$',
            nbr:10000,
            money:6200

        },
        {level:' > 20000 Abonnees',
            reward:'7000$',
            nbr:20000,
            money:7000
        },

        
    ]
   
  return (
    <>
    <CardContrat tab={tab} name={'Gopartenaire'} type={'nonepoint'} issucces={false}/>

    </>
  )}
