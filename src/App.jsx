import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { resources } from "./assets/ressurser";
import Layout from './components/Layout';

function App() {

  return (
    <Layout Navbar={resources}>

    </Layout>
  )
}

export default App
