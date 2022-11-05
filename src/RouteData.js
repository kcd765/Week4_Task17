import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Modules/Contact/Contact'
import Score from './Modules/Score/Score'
import Dashboard from './Modules/Dashboard/Dashboard'
import Header from './Modules/Header/Header'
import Players from './Modules/Players/Players'


const RouteData = () => {
    return (
        <BrowserRouter >
            <Header />
            <Routes >
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/players" element={<Players />} />
                <Route path="/score" element={<Score />} />
                <Route path="/contact" element={<Contact backgroundColor="#b87a7a" color="white" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteData