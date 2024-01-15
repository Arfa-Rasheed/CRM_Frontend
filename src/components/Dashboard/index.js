import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import './style.scss'
import CRMDropdown from '../../shared-component/CRMDropdown'
import CRMButtons from '../../shared-component/CRMButtons'
import BarChart from './BarChart'
import { Box } from '@mui/system'
import httpClient from '../../_util/api'
const Dashboard = () => {
    const [year, setYear] = useState('2023')
    const [totalSoldPolicies, setTotalSoldPolicies] = useState(0)
    const [totalHealthInsurance, setTotalHealthInsurance] = useState(0)
    const [totalLifeInsurance, setTotalLifeInsurance] = useState(0)
    const [totalAnnuities, setTotalAnnuities] = useState(0)
    const [barChartData, setBarChartData] = useState()
    const [totalSalesCost, setTotalSalesCost] = useState(0)
    const [totalHealthInsuranceCost, setTotalHealthInsuranceCost] = useState(0)
    const [totaLifeInsuranceCost, setTotalLifeInsuranceCost] = useState(0)
    const [totalAnnuitiesCost, setTotalAnnuitiesCost] = useState(0)


    const [selectedOption, setSelectedOption] = useState({ label: "Sales Matrix", id: "Sales Matrix" },)
    const [adminDropdownOptions, setAdminDropdownOptions] = useState(
        [
            { label: "Sales Matrix", id: "Sales Matrix" },
            { label: "Policy Matrix", id: "Policy Matrix" },
            { label: "Revenue Matrix", id: "Revenue Matrix" }
        ]
    )


    const handleDropdownChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
        setSelectedOption(selectedOption)
        // Do something with the selected option in the parent component
    };

    const LoadDashboarData = async () => {
        const res = await httpClient.get("/dashboard/getPolicyMatrix")

        if (res.status === 200) {
            // console.log("Policy Matrix REs", res)
            // console.log("dash res" , res.data[year].totalSoldPolicies);
            setTotalSoldPolicies(res.data.yearlyPolicyData[year].totalSoldPolicies)
            setTotalHealthInsurance(res.data.yearlyPolicyData[year].Health.count)
            setTotalLifeInsurance(res.data.yearlyPolicyData[year].Life.count)
            setTotalAnnuities(res.data.yearlyPolicyData[year].Annuities.count)
            setBarChartData(res?.data.barChartData[year])

            //Sales Matrix
            setTotalSalesCost(res.data.yearlyPolicyData[year].totalSalesCost)
            setTotalHealthInsuranceCost(res.data.yearlyPolicyData[year].Health.totalSale)
            setTotalLifeInsuranceCost(res.data.yearlyPolicyData[year].Life.totalSale)
            setTotalAnnuitiesCost(res.data.yearlyPolicyData[year].Annuities.totalSale)


            console.log("bar chart data:", res?.data.barChartData[year])
        }
    }

    useEffect(() => {
        LoadDashboarData()
    }, [])
    return (
        <div>
            <Header />
            <div style={{ marginTop: '65px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                    overflowY: 'hidden'
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
                                <CRMDropdown options={adminDropdownOptions} onOptionChange={handleDropdownChange} />
                                <Grid container sx={{ justifyContent: 'center' ,marginBottom:'5px' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items' >
                                                {
                                                    selectedOption.label === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalHealthInsurance}
                                                            </>
                                                        ) : selectedOption.label === 'Revenue Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> { }
                                                                </>
                                                            ) :
                                                            (
                                                                <>
                                                                    <b>Total sales:</b> ${totalHealthInsuranceCost}
                                                                </>
                                                            )
                                                }
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}><b>Health Insurance</b></ListItemText>
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
                                                {
                                                    selectedOption.label === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalLifeInsurance}
                                                            </>
                                                        ) : selectedOption.label === 'Revenue Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> { }
                                                                </>
                                                            ) :
                                                            (
                                                                <>
                                                                    <b>Total sales:</b> ${totaLifeInsuranceCost}
                                                                </>
                                                            )
                                                }
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}><b>Life Insurance</b></ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                               <CRMButtons title='Previuos Months'/>
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                {
                                                    selectedOption.label === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalAnnuities}
                                                            </>
                                                        ) : selectedOption.label === 'Revenue Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> { }
                                                                </>
                                                            ) :
                                                            (
                                                                <>
                                                                    <b>Total sales:</b> ${totalAnnuities}
                                                                </>
                                                            )
                                                }
                                            </ListItem>
                                            <ListItem className='list-items'>
                                                <ListItemText sx={{ color: '#003478' }}><b>Annuities</b></ListItemText>
                                                {/* <ListItemIcon><img src={}></img></ListItemIcon> */}
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        {/* 2nd Container */}
                        <Grid container style={{ height: '47vh', width: '95%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid container style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item md="3"> <CRMButtons title='Sales Matrix' /></Grid>
                                <Grid item md="3" sx={{ marginTop: '-14px' }}><CRMButtons title='Sales Statistics 2023' /></Grid>
                                <Grid item md="3"><CRMButtons title='Previous Years' /> </Grid>
                            </Grid>
                            <Grid container style={{ height: '37vh', width: '91%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                                <Grid item md="6" sx={{ height: '30vh', flexDirection: 'column', alignContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #F08613', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #003478', borderBottom: '4px solid #003478', display: 'inline', width: '135px', paddingLeft: '38px' }}>
                                            {
                                                selectedOption.label === 'Policy Matrix' ?
                                                    (
                                                        <b>Total Policies:</b>
                                                    ) : selectedOption.label === 'Revenue Matrix' ?
                                                        (
                                                            <b>Total Revenue: </b>
                                                        ) :
                                                        (
                                                            <b>Total sales:</b>
                                                        )
                                            }
                                        </Box>
                                    </div>
                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>
                                        {
                                            selectedOption.label === 'Policy Matrix' ?
                                                (
                                                    <>{totalSoldPolicies}</>
                                                ) : selectedOption.label === 'Revenue Matrix' ?
                                                    (
                                                        <>${}</>
                                                    ) :
                                                    (
                                                        <>${totalSalesCost}</>
                                                    )
                                        }
                                    </p>

                                    <br />

                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #003478', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #F08613', borderBottom: '4px solid #F08613', display: 'inline', width: '135px', paddingLeft: '38px' }}><b>Auguat Sales:</b></Box>
                                    </div>

                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>$2,54,6537</p>
                                </Grid>
                                {/* <Grid item md="6" sx={{}}>
                                    <BarChart chartData={barChartData} />
                                </Grid> */}

                                {barChartData ? (
                                    <Grid item md="6" sx={{}}>
                                        <BarChart barChartData={barChartData} selectedOption={selectedOption.label}/>
                                    </Grid>
                                ) : (
                                    <div>Loading bar chart data...</div>
                                )}
                            </Grid>
                        </Grid>

                        {/* 3rd container */}
                        <Grid container style={{ backgroundColor: "#EDEDED", height: '19vh', width: '95%', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid item md='3'>
                                <CRMButtons title='Agents Matrix' />
                                <Grid container sx={{ justifyContent: 'center', marginTop: '9px' }} className='grid-inner-container'>
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
                            <CRMButtons title='Previous Months' /> 
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