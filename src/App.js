import React, { createContext, useState } from 'react'

import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/home'
import NotFound404 from './pages/404'
import Cart from './pages/cart'
import { Routes, Route } from 'react-router-dom'

// export const AppContext = createContext()

function App() {
    // const [searchValue, setSearchValue] = useState('')

    return (
        <div className='wrapper'>
            {/*<AppContext.Provider value={{ searchValue, setSearchValue }}>*/}
            <Header />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<NotFound404 />} />
                </Routes>
            </div>
            {/*</AppContext.Provider>*/}
        </div>
    )
}

export default App
