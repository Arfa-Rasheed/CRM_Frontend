import React from 'react'
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Administration from '../components/Administration'
import Carriers from '../components/Carriers'
import Tools from '../components/Tools'
import Policies from '../components/Policies'
import Statements from '../components/Statements'
import Commissions from '../components/Commissions'
import Recruits from '../components/Recruits'
import AccountDetail from '../components/Account'

const AppRouter = () => {
  return (
    <div>
     <Router>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/accountDetails' element={<AccountDetail/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/administration' element={<Administration/>}></Route>
            <Route path='/carriers' element={<Carriers/>}></Route>
            <Route path='/tools' element={<Tools/>}></Route>
            <Route path='/policies' element={<Policies/>}></Route>
            <Route path='/statements' element={<Statements/>}></Route>
            <Route path='/commissions' element={<Commissions/>}></Route>
            <Route path='/recruits' element={<Recruits/>}></Route>            
        </Routes>
     </Router>


    </div>
  )
}

export default AppRouter