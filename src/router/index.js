import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Administration from '../components/Administration'
import Carriers from '../components/Carriers'
import Tools from '../components/Tools'
import Policies from '../components/Policies'
import Statements from '../components/Statements'
import Commissions from '../components/Commissions'
import Recruits from '../components/Recruits'
import AccountDetail from '../components/Account'
import Login from '../components/Login'
import Agents from '../components/Agents'
import AddNewAgent from '../components/Recruits/AddNewAgent'
import AgentDetail from '../components/Agents/detail'
import AddNewPolicy_Agent from '../components/Policies/AddNewPolicy_Agent'
import ApprovePolicy from '../components/Policies/ApprovePolicy'
import CommissionDetail from '../components/Commissions/CommissionDetail'
import StatementDetail from '../components/Statements/detail'
import LinearProgressWithLabel from '../shared-component/ProgressBar'


const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/accountDetails' element={<AccountDetail />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/administration' element={<Administration />}></Route>
          <Route path='/carriers' element={<Carriers />}></Route>
          <Route path='/tools' element={<Tools />}></Route>
          <Route path='/policies' element={<Policies />}></Route>
          <Route path='/statements' element={<Statements />}></Route>
          <Route path ='/statementDetail/:_id' element={<StatementDetail/>}></Route>
          <Route path='/commissions' element={<Commissions />}></Route>
          <Route path='/commissionDetail/:_id' element={<CommissionDetail/>}></Route>
          <Route path='/recruits' element={<Recruits />}></Route>
          <Route path='/agent' element={<Agents/>}></Route>
          <Route path='/addAgent' element={<AddNewAgent/>}></Route>
          <Route path='/addAgent/:id' element={<AddNewAgent/>}></Route>
          <Route path='/agentDetail/:_id' element={<AgentDetail/>}></Route>
          <Route path='/addNewPolicy_agent' element={<AddNewPolicy_Agent/>}></Route>
          <Route path='/approvePolicy' element={<ApprovePolicy/>}></Route>
          <Route path='/addNewPolicy_agent/:id' element={<AddNewPolicy_Agent/>}></Route>
          <Route path='/approvePolicy/:id' element={<ApprovePolicy/>}></Route>
          <Route path='/progress' element={<LinearProgressWithLabel/>}></Route>
        </Routes>
      </Router>


    </div>
  )
}

export default AppRouter