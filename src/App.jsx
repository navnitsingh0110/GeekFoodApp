import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Quotes from './components/Quotes/Quotes'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <Main />
            <Cards />
            <Footer />
          </>
        } />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </Router>
  )
}

export default App
