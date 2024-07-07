import { useState } from 'react'

import './App.css'
import Head from './component/head/head'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='apps'>
      <Head/>
    </div>
  )
}

export default App
