import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Avatar, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import './style.scss'
import CRMDropdown from '../../shared-component/CRM-Dropdown/index'
import CRMButtons from '../../shared-component/CRMButtons'
import BarChart from './BarChart'
import { Box } from '@mui/system'
import httpClient from '../../_util/api'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar'
import { hideLoader, showLoader } from '../../Store/mainSlice'
import { useDispatch } from 'react-redux'
const Dashboard = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const snackbar_Ref = useRef(null)
    const dispatch = useDispatch()
    const [year, setYear] = useState('2024')
    const [month, setMonth] = useState('February')
    const [currentMonth, setCurrentMonth] = useState('')
    const [totalSoldPolicies, setTotalSoldPolicies] = useState(0)
    const [totalHealthInsurance, setTotalHealthInsurance] = useState(0)
    const [totalLifeInsurance, setTotalLifeInsurance] = useState(0)
    const [totalAnnuities, setTotalAnnuities] = useState(0)
    const [barChartData, setBarChartData] = useState()
    const [totalSalesCost, setTotalSalesCost] = useState(0)
    const [totalHealthInsuranceCost, setTotalHealthInsuranceCost] = useState(0)
    const [totaLifeInsuranceCost, setTotalLifeInsuranceCost] = useState(0)
    const [totalAnnuitiesCost, setTotalAnnuitiesCost] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalHealthRevenue, setTotalHealthRevenue] = useState(0);
    const [totalLifeRevenue, setTotalLifeRevenue] = useState(0);
    const [totalAnnuitiesRevenue, setTotalAnnuitiesRevenue] = useState(0);
    const [currentMonthTotalPolicies, setCurrentMonthTotalPolicies] = useState(0);
    const [currentMonthTotalSalesCost, setCurrentMonthTotalSalesCost] = useState(0);
    const [currentMonthTotalRevenue, setCurrentMonthTotalRevenue] = useState(0);
    const [yearlyTotalSoldHealthInsurancePolicies, setYearlyTotalSoldHealthInsurancePolicies] = useState(0);
    const [yearlyTotalSoldLifeInsurancePolicies, setYearlyTotalSoldLifeInsurancePolicies] = useState(0);
    const [yearlyTotalSoldAnnuitiesPolicies, setYearlyTotalSoldAnnuitiesPolicies] = useState(0);
    const [selectedOption, setSelectedOption] = useState('Sales Matrix')
    const [yearlyPolicySelectedOption, setYearlyPolicySelectedOption] = useState('Sales Matrix')

    const [highestCommissionedAgentData, setHighestCommissionedAgentData] = useState({
        agentFirstName: "",
        agentLastName: "",
        agentCode: "",
        agentRole: "",
        totalSales: "",

    })


    const DropdownOptions1 = [
        "Sales Matrix",
        "Policy Matrix",
        "CashFlow Matrix"
    ];


    const DropdownOptions2 = [
        "Performance Matrix",
        "Sales Matrix",
        "Policy Matrix",
        "CashFlow Matrix",
        "Health Insurance",
        "Life Insurance",
        "Annuities",
    ];

    const previousMonths = [
        "December",
        "January",
        "February"
    ]

    const previousYears = [
        2024,
        2023,
        2022,
        2021,
        2020,

    ]


    const handleDropdownChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
        setSelectedOption(selectedOption)
    };
    const handleYearlyPolicyDropdownChange = (selectedOption) => {
        setYearlyPolicySelectedOption(selectedOption)
    }

    const handleMonthChange = (selectedOption) => {
        setMonth(selectedOption)
    }

    const handleYearChange = (selectedOption) => {
        setYear(selectedOption)
    }

    const LoadMonthlyPolicyData = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(isAdmin ? `/dashboard/getMonthlyPolicyData/${month}` : `/dashboard/getMonthlyPolicyDataAgentView/${month}`)
            .catch((error) => {
                dispatch(hideLoader())
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })

        if (res.status === 200) {
            dispatch(hideLoader())
            console.log("dash res", res?.data[month]);
            setTotalHealthInsurance(res?.data[month].Health.count)
            setTotalLifeInsurance(res?.data[month].Life.count)
            setTotalAnnuities(res?.data[month].Annuities.count)

            // Sales Matrix
            setTotalHealthInsuranceCost(res?.data[month].Health.totalSale)
            setTotalLifeInsuranceCost(res?.data[month].Life.totalSale)
            setTotalAnnuitiesCost(res?.data[month].Annuities.totalSale)

            // CashFlow Matrix
            setTotalHealthRevenue(res?.data[month].Health.totalRevenue)
            setTotalLifeRevenue(res?.data[month].Life.totalRevenue)
            setTotalAnnuitiesRevenue(res?.data[month].Annuities.totalRevenue)

        }
    }

    const yearlyPolicyData = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(isAdmin ? `/dashboard/getMatrixData/${year}` : `/dashboard/getMatrixDataAgentView/${year}`)
            .catch((error) => {
                dispatch(hideLoader())
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })

        if (res.status === 200) {
            dispatch(hideLoader())
            setBarChartData(res?.data.barChartData)
            console.log("res?.data.totalSoldPolicies", res?.data.totalSoldPolicies);
            setTotalSoldPolicies(res?.data.overallTotalSoldPolicies)
            setTotalSalesCost(res?.data.overallTotalSalesCost)
            setTotalRevenue(res?.data.overallTotalRevenue)
            setCurrentMonth(res?.data.currentMonth)
            setCurrentMonthTotalPolicies(res?.data.currentMonthPolicies)
            setCurrentMonthTotalSalesCost(res?.data.currentMonthSalesCost)
            setCurrentMonthTotalRevenue(res?.data.currentMonthRevenue)
            setYearlyTotalSoldHealthInsurancePolicies(res?.data.totalHealthInsurance)
            setYearlyTotalSoldLifeInsurancePolicies(res?.data.totalLifeInsurance)
            setYearlyTotalSoldAnnuitiesPolicies(res?.data.totalAnnuities)

        }

    }

    const getDetailsOfHighestCommissionedAgent = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(`/dashboard/getDetailsOfHighestCommissionedAgent/${month}`)
            .catch((error) => {
                dispatch(hideLoader())
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })
        if (res?.status === 200) {
            dispatch(hideLoader())
            console.log("highestcommision agent", res);
            setHighestCommissionedAgentData(res.data)
        }
    }

    useEffect(() => {
        // LoadMonthlyPolicyData()
        yearlyPolicyData()
    }, [year])

    useEffect(() => {
        LoadMonthlyPolicyData()
    }, [month])

    useEffect(() => {
        getDetailsOfHighestCommissionedAgent()
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
                    <CustomizedSnackbars ref={snackbar_Ref} />
                    <Grid container direction={'column'}
                        justifyContent="space-around"
                        spacing={3}
                        sx={{
                            marginTop: '0px',
                            marginLeft: '277px'
                        }}>

                        {/* 1st Container */}
                        <Grid container style={{ backgroundColor: "#EDEDED", height: '19vh', width: '95%', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid item md='3'>
                                <CRMDropdown title={selectedOption} options={DropdownOptions1} onOptionChange={handleDropdownChange} />
                                <Grid container sx={{ justifyContent: 'center', marginBottom: '5px' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items' >
                                                {
                                                    selectedOption === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalHealthInsurance}
                                                            </>
                                                        ) : selectedOption === 'CashFlow Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> {totalHealthRevenue}
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
                                                    selectedOption === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalLifeInsurance}
                                                            </>
                                                        ) : selectedOption === 'CashFlow Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> {totalLifeRevenue}
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
                                <CRMDropdown title='Previous Months' options={previousMonths} onOptionChange={handleMonthChange} />
                                {/* <CRMButtons title='Previus Months'/> */}
                                <Grid container sx={{ justifyContent: 'center' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <List>
                                            <ListItem className='list-items'>
                                                {
                                                    selectedOption === 'Policy Matrix' ?
                                                        (
                                                            <>
                                                                <b>Total Policies:</b> {totalAnnuities}
                                                            </>
                                                        ) : selectedOption === 'CashFlow Matrix' ?
                                                            (
                                                                <>
                                                                    <b>Total Revenue: </b> {totalAnnuitiesRevenue}
                                                                </>
                                                            ) :
                                                            (
                                                                <>
                                                                    <b>Total sales:</b> ${totalAnnuitiesCost}
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
                                <Grid item md="3">
                                    <CRMDropdown type='YearlyPolicyType' title={yearlyPolicySelectedOption} options={DropdownOptions2} onOptionChange={handleYearlyPolicyDropdownChange} />
                                </Grid>
                                <Grid item md="3" sx={{ marginTop: '-14px' }}><CRMButtons title='Sales Statistics 2023' /></Grid>
                                <Grid item md="3"><CRMDropdown title='Previous Years' options={previousYears} onOptionChange={handleYearChange} /> </Grid>
                            </Grid>
                            <Grid container style={{ height: '37vh', width: '91%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                                <Grid item md="6" sx={{ height: '30vh', flexDirection: 'column', alignContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #F08613', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #003478', borderBottom: '4px solid #003478', display: 'inline', width: '185px', paddingLeft: '38px' }}>
                                            {
                                                yearlyPolicySelectedOption === 'Policy Matrix' ?
                                                    (
                                                        <b>Total Policies:</b>
                                                    ) : yearlyPolicySelectedOption === 'CashFlow Matrix' ?
                                                        (
                                                            <b>Total Revenue: </b>
                                                        ) :
                                                        yearlyPolicySelectedOption === 'Health Insurance' ?
                                                            (
                                                                <b>Total Health Insurance</b>
                                                            ) :
                                                            yearlyPolicySelectedOption === 'Life Insurance' ?
                                                                (
                                                                    <b>Total Life Insurance</b>
                                                                ) :
                                                                yearlyPolicySelectedOption === 'Annuities' ?
                                                                    (
                                                                        <b>Annuities</b>
                                                                    ) :
                                                                    (
                                                                        <b>Total sales:</b>
                                                                    )
                                            }
                                        </Box>
                                    </div>
                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>
                                        {
                                            yearlyPolicySelectedOption === 'Policy Matrix' ?
                                                (
                                                    <>{totalSoldPolicies}</>
                                                ) : yearlyPolicySelectedOption === 'CashFlow Matrix' ?
                                                    (
                                                        <>${totalRevenue}</>
                                                    ) :
                                                    yearlyPolicySelectedOption === 'Health Insurance' ?
                                                        (
                                                            <>${yearlyTotalSoldHealthInsurancePolicies}</>
                                                        ) :
                                                        yearlyPolicySelectedOption === 'Life Insurance' ?
                                                            (
                                                                <>${yearlyTotalSoldLifeInsurancePolicies}</>
                                                            ) :
                                                            yearlyPolicySelectedOption === 'Annuities' ?
                                                                (
                                                                    <>${yearlyTotalSoldAnnuitiesPolicies}</>
                                                                ) :

                                                                (
                                                                    <>${totalSalesCost}</>
                                                                )
                                        }
                                    </p>

                                    <br />

                                    <div style={{ display: 'flex' }}>
                                        <div style={{ border: '3px solid #003478', marginTop: '0px', display: 'inline', height: '20px' }}></div>
                                        <Box sx={{ borderLeft: '4px solid #F08613', borderBottom: '4px solid #F08613', display: 'inline', width: '185px', paddingLeft: '38px' }}>
                                            <b>{currentMonth} {yearlyPolicySelectedOption === "Policy Matrix" ? "Policies:" : yearlyPolicySelectedOption === "Cash Flow Matrix" ? "Cash Flow:" : yearlyPolicySelectedOption === "Health Insurance" ? "Health Policies:" : yearlyPolicySelectedOption === "Life Insurance" ? "Life Policies:" : yearlyPolicySelectedOption === "Annuities" ? "Annuities:" : "Sales:"}</b>
                                        </Box>
                                    </div>

                                    <p style={{ paddingLeft: '38px', marginTop: '0px' }}>
                                        {
                                            yearlyPolicySelectedOption === 'Policy Matrix' ?
                                                (
                                                    <>{currentMonthTotalPolicies}</>
                                                ) : yearlyPolicySelectedOption === 'CashFlow Matrix' ?
                                                    (
                                                        <>${currentMonthTotalRevenue}</>
                                                    ) :
                                                    yearlyPolicySelectedOption === 'Health Insurance' ?
                                                        (
                                                            <>${yearlyTotalSoldHealthInsurancePolicies}</>
                                                        ) :
                                                        yearlyPolicySelectedOption === 'Life Insurance' ?
                                                            (
                                                                <>${yearlyTotalSoldLifeInsurancePolicies}</>
                                                            ) :
                                                            yearlyPolicySelectedOption === 'Annuities' ?
                                                                (
                                                                    <>${yearlyTotalSoldAnnuitiesPolicies}</>
                                                                ) :

                                                                (
                                                                    <>${currentMonthTotalSalesCost}</>
                                                                )
                                        }
                                    </p>
                                </Grid>
                                {/* <Grid item md="6" sx={{}}>
                                    <BarChart chartData={barChartData} />
                                </Grid> */}

                                {barChartData ? (
                                    <Grid item md="6" sx={{}}>
                                        <BarChart barChartData={barChartData} selectedOption={yearlyPolicySelectedOption} />
                                    </Grid>
                                ) : (
                                    <div>Loading bar chart data...</div>
                                )}
                            </Grid>
                        </Grid>

                        {/* 3rd container */}
                        <Grid container style={{ backgroundColor: "#EDEDED", height: '23vh', width: '95%', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', borderRadius: '15px' }}>
                            <Grid item md='3'>
                                <CRMButtons title='Agents Matrix' />
                                <Grid container sx={{ justifyContent: 'center', marginTop: '9px', height: '16vh' }} className='grid-inner-container'>
                                    {/* <Grid item md="12"><Avatar></Avatar>   </Grid> */}
                                    <Grid item md='10' >
                                        <Typography sx={{ fontSize: '13px' }}>Highest Sales</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Name:{highestCommissionedAgentData.agentFirstName} {highestCommissionedAgentData.agentLastName}</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Code:{highestCommissionedAgentData.agentCode}</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Role:</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Sales:{highestCommissionedAgentData.agentCommission}</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMButtons title='Sales Statistics' />
                                <Grid container className='grid-inner-container' sx={{ justifyContent: 'center', marginTop: '9px', height: '14vh' }} >
                                    <Grid items md='10' >
                                        <Typography sx={{ fontSize: '13px' }}>Highest Recruits:</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Name:{highestCommissionedAgentData.agentFirstName} {highestCommissionedAgentData.agentLastName}</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Code:{highestCommissionedAgentData.agentCode}</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Role:</Typography>
                                        <Typography sx={{ fontSize: '13px' }}>Agent Sales:{highestCommissionedAgentData.agentCommission}</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md='3'>
                                <CRMButtons title='Previous Months' />
                                <Grid container sx={{ justifyContent: 'center', height: '14vh' }} className='grid-inner-container'>
                                    <Grid items md='10' >
                                        <Typography>Total Recruits:</Typography>
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