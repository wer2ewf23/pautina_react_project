import Header from './components/Header/Header'
import Footer from'./components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import {Routes, Route} from 'react-router-dom'



function App() {
  

  return (
    <>
     <Header />
     
     <Routes>
        <Route path="/" element = { <HomePage /> }></Route>
        <Route path="/catalog" element = { <CatalogPage /> }></Route>
     </Routes>
     <Footer />
    </>
  )
}

export default App
