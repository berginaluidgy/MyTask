import axios from "axios";

export default function action(imp){
    const bool=imp;
    if(bool==0 || bool==1){
       const id=localStorage.getItem('Aid@subtemps')
    const form={
        id:id,
        isimp:bool
    }
    axios.post('http://localhost:8000/ActionsDo',form)
    .then(res=>{
        console.log(1)
        return{succes:1}

    }).catch(error=>{
        console.log('erreur')
        return{erreur:error}
    })
    }else{
        console.log('rir')
    }
    
}