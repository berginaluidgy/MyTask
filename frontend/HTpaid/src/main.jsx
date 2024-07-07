import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Account from './component/body/account.jsx'
import './index.css'
import MenuMain from './component/body/pagechoose/menu/menuMain.jsx'
import Controle from './component/body/pagechoose/menu/Controle.jsx'
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import Home from './component/body/body.jsx'
import Pagec from './component/body/pagechoose/page.C.jsx'
import {createBrowserRouter,RouterProvider} from'react-router-dom'
import Subscribe from './component/body/pagechoose/pagededicateUser/subscribe.jsx'
import MissionViewer from './component/body/pagechoose/pagededicateUser/MissionViewer.jsx'
import MyAccount from './component/body/pagechoose/menu/MyAccount.jsx'
import Dashboard from './component/body/pagechoose/pagededicateUser/dashboard/dashbord.jsx'

const route=createBrowserRouter([
  {path:"/",
element:<App/>

},
{path:"/User",
element:<Home/>
,children:[
  {
    path:'/User',
    element:<MissionViewer/>
  
  }
  ,
  {
    path:'/User/Sub',
    element:<Subscribe/>
  
  }]

},
{path:"/Account",
element:<Account/>

},
{
  path:'/Career',
  element:<Pagec/>

},
{path:"Metier",
  element:<MenuMain/>
  
  },
  {path:"User/Controle",
    element:<Controle/>
    
    },
    {path:"User/Account",
      element:<MyAccount/>
      
      },
      {path:"admin/dashboard",
        element:<Dashboard/>
        
        },



])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
    <ToastContainer /> 

  </React.StrictMode>,
)
