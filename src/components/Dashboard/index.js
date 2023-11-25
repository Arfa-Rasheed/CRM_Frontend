import React, { useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import './style.scss'
import CRMDropdown from '../../shared-component/CRMDropdown'
import CRMButtons from '../../shared-component/CRMButtons'
import BarChart from './BarChart'
import { SalesData } from '../../constants'
import { Box } from '@mui/system'
const Dashboard = () => {
    const [salesData, serSalesData] = useState({
        labels: SalesData.map((data) => data.month),
        datasets: [
            {
                data: SalesData.map((data) => data.sales),
                backgroundColor: [
                    '#4dc9f6',
                    '#f67019',
                    '#f53794',
                    '#537bc4',
                    '#acc236',
                    '#166a8f',
                    '#00a950',
                    '#58595b',
                    '#8549ba'
                ],
            }
        ]

    })
    return (
        <div>
            <Header />
            <div style={{ marginTop: '65px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                }}>
                    <SideBar />
                    <Grid container direction={'column'}
                        justifyContent="space-around"
                        spacing={3}
                        sx={{
                            marginTop: '0px',
                            marginLeft: '0px'
                        }}>

                        {/* 1st Container */}
                        <Grid container style={{ backgroundColor: "#EDEDED", height: '19vh', width: '95%', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid item md='3'>
                                <CRMDropdown menuItems={['Revenue Matrix', 'Sales Matrix']} />
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items' >
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Health Insurance</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMButtons title='Sales Statistics' />
                                <Grid container sx={{ justifyContent: 'center', marginTop: '9px' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Life Insurance</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMDropdown menuItems={['Revenue Matrix', 'Sales Matrix']} />
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Annuities</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        {/* 2nd Container */}
                        <Grid container style={{height: '47vh', width: '95%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid container style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item md="3"> <CRMDropdown menuItems={['Revenue Matrix', 'Sales Matrix']} /></Grid>
                                <Grid item md="3" sx={{marginTop:'-14px'}}><CRMButtons title='Sales Statistics' /></Grid>
                                <Grid item md="3"> <CRMDropdown menuItems={['Previous Year', 'Sales Matrix']} /></Grid>
                            </Grid>
                            <Grid container style={{height: '37vh', width: '91%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                                <Grid item md="6" sx={{height: '30vh', flexDirection: 'column', alignContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #F08613', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #003478', borderBottom: '4px solid #003478', display: 'inline', width: '135px', paddingLeft: '38px' }}><b>Auguat Sales:</b></Box>
                                    </div>
                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>$2,54,6537</p>


                                    <br />

                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #003478', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #F08613', borderBottom: '4px solid #F08613', display: 'inline', width: '135px', paddingLeft: '38px' }}><b>Auguat Sales:</b></Box>
                                    </div>

                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>$2,54,6537</p>
                                </Grid>
                                <Grid item md="6" sx={{}}>
                                    <BarChart chartData={salesData} />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* 3rd container */}
                        <Grid container style={{ backgroundColor: "#EDEDED", height: '19vh', width: '95%', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid item md='3'>
                                <CRMDropdown menuItems={['Revenue Matrix', 'Sales Matrix']} />
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items' >
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Health Insurance</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMButtons title='Sales Statistics' />
                                <Grid container sx={{ justifyContent: 'center', marginTop: '9px' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Life Insurance</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMDropdown menuItems={['Revenue Matrix', 'Sales Matrix']} />
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                Sales:$214,345.80
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}>Annuities</ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>



                </div>
            </div>


        </div>
    )
}

export default Dashboard