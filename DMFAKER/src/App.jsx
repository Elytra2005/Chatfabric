import { useEffect } from 'react'

import './App.css'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
     document.title = "chatfabric";
  }, []);
  
  return (
    <>
      <Container />
      <Footer />
    </>
  )
}

export default App
