import { useEffect, useState } from 'react'
import { resources } from "./assets/ressurser"
import Layout from './components/Layout'
import Home from './components/Home'
import './css/main.css'
<<<<<<< Updated upstream
=======
import { Route, Routes } from 'react-router-dom'
import Infocard from './components/Infocard'
>>>>>>> Stashed changes

function App() {
  const [pageInfo, setPageInfo] = useState(null)
  
  return (
<<<<<<< Updated upstream
    <Layout Navbar={resources}>

=======
    <Layout navElements={resources} setPageInfo={setPageInfo}>
      <Routes>
        <Route index element={<Home />} />
        <Route path=':slug' element={<Infocard cardElement={pageInfo}/>} />
      </Routes>
>>>>>>> Stashed changes
    </Layout>
  )
}

export default App
