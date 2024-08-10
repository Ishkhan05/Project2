import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Reviews from './Pages/Reviews/Reviews'
import Contacts from './Pages/Contacts/Contacts'
import Blog from './Pages/Blog/Blog'
import CurrentBlog from './Pages/CurrentBlog/CurrentBlog'
import PriceList from './Pages/PriceList/PriceList'
import ErrorPage from './Pages/Error/ErrorPage'
import ComputerRepair from './Pages/ComputerRepair/ComputerRepair'
import LaptopRepair from './Pages/LaptopRepair/LaptopRepair'
import MonoblocksRepair from './Pages/MonoblocksRepair/MonoblocksRepair'
import AppleRepair from './Pages/AppleRepair/AppleRepair'
import ComputerUpgrade from './Pages/ComputerUpgrade/ComputerUpgrade'
import ProgramInstalling from './Pages/ProgramInstalling/ProgramInstalling'
import VirusRemoval from './Pages/VirusRemoval/VirusRemoval'
import InternetSettings from './Pages/InternetSettings/InternetSettings'
import CorporateClients from './Pages/CorporateClients/CorporateClients'
import MyContext from '../src/Contexts/context'
import { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [consultation, setConsultation] = useState(false)
  const handleCall = () => {
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsDone(false)
    setIsOpen(false)
    setConsultation(false)
  }
  const handleDone = () => {
    setIsOpen(false)
    setIsDone(!isDone)
  }
  const needConsultation = () =>{
    setConsultation(true)
  }

  const consultationIsDone = ()=>{
    setConsultation(!consultation)
    setIsDone(!isDone)
  }
  return (
    <div className='App'>
      <Header/>
      
      <MyContext.Provider value={{handleCall, handleDone, needConsultation, consultationIsDone, handleClose, isOpen, isDone, consultation}}>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.ABOUT} element={<About/>}/>
          <Route path={ROUTES.REVIEWS} element={<Reviews/>}/>
          <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
          <Route path={ROUTES.BLOG} element={<Blog/>}/>
          <Route path={ROUTES.CURRENTBLOG} element={<CurrentBlog/>}/>
          <Route path={ROUTES.PRICE_LIST} element={<PriceList/>}/>
          <Route path={ROUTES.COMPUTER_REPAIR} element={<ComputerRepair/>}/>
          <Route path={ROUTES.LAPTOP_REPAIR} element={<LaptopRepair/>}/>
          <Route path={ROUTES.MONOBLOCS_REPAIR} element={<MonoblocksRepair/>}/>
          <Route path={ROUTES.APPLE_REPAIR} element={<AppleRepair/>}/>
          <Route path={ROUTES.COMPUTER_UPGRADE} element={<ComputerUpgrade/>}/>
          <Route path={ROUTES.PROGRAM_INSTALLING} element={<ProgramInstalling/>}/>
          <Route path={ROUTES.VIRUS_REMOVAL} element={<VirusRemoval/>}/>
          <Route path={ROUTES.INTERNET_SETTINGS} element={<InternetSettings/>}/>
          <Route path={ROUTES.CORPORATE_CLIENTS} element={<CorporateClients/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>

      </MyContext.Provider>
      
      <Footer/>
    </div>
  )
}
