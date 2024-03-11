import { useEffect, useState } from 'react'
import { resources } from "./assets/ressurser"
import Layout from './components/Layout'
import Home from './components/Home'
import './css/main.css'
import { Route, Routes } from 'react-router-dom'
import Infocard from './components/Infocard'

function App() {
  const [pageInfo, setPageInfo] = useState(null)
  
  return (
    <Layout navElements={resources} setPageInfo={setPageInfo}>
      <Routes>
        <Route index element={<Home />} />
        <Route path=':slug' element={<Infocard cardElement={pageInfo}/>} />
      </Routes>
    </Layout>
  )
}

export default App
