import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { resources } from "./assets/ressurser";
import Layout from './components/Layout';
import './css/main.css'

function App() {

  return (
    <Layout navElements={resources}>

    </Layout>
  )
}

export default App
