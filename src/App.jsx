import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Quotes from './components/Quotes/Quotes'
import Restaurants from './components/Restaurants/Restaurants'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar /> {/* Now Navbar is outside and only once */}
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Main />
            <Cards />
            <Footer />
          </>
        } />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/restaurants' element={<Restaurants />} />
      </Routes>
    </Router>
  )
}

export default App
