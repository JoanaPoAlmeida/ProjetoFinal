import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      
    </>
  )
}

export default Home