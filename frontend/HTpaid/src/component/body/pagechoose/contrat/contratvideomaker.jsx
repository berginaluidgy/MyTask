import React from 'react'
import './contratvideomaker.css'
import CardContrat from '../component/cardcontrat'
export default function Contratvideomaker() {
    const tab=[
        {level:'10 videos',
            reward:'700$',
            nbr:10,
            money:700
        },
        {level:'30 videos',
            reward:'2200$',
            nbr:30,
            money:2200
        },
        {level:'50 videos',
            reward:'4700$',
            nbr:50,
            money:4700
        },
        {level:'75 videos',
            reward:'6500$',
            nbr:75,
            money:6500
        }
    ]
   
  return (
    // idUser:id,idmission:id,MissionName:props.name,missionType:props.type,
    // ifMissionSuccesfully:props.issucces,predicateReceiveMone:props.predicate,
    // missionbut:props.but
    <div>

<CardContrat tab={tab} name={'GoVideo'} type={'video'} issucces={false}


/>

    </div>
  )
}
