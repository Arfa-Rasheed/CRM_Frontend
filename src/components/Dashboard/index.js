import React from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div style={{marginTop:'65px'}}>
                <SideBar />
            </div>


        </div>
    )
}

export default Dashboard