import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default () => {
    return (
       <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<div>Página não encontrada</div>}/>
       </Routes> 
    )
}