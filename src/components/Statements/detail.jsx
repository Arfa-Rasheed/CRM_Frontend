import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField, Stack } from '@mui/material'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'
import { useNavigate, useParams } from 'react-router-dom'
import LinearProgressWithLabel from '../../shared-component/ProgressBar'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice'

const StatementDetail = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const { _id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const snackbar_Ref = useRef()
    const [policyData, setPolicyData] = useState({
        paidOutDate:"",
        isPaid: false,
        policySubmissionDate: "",
        policyCarrier: "",
        policyNumber: 0,
        agentCarrierNumber: 0,
        agentCode: "",
        premium: 0,
        splitPercentage: 0,
        contractLevel: 0,
        agencyCommissionPercentage: 0,
        agencyCommission: 0,
        agentCommission: 0,
        advPaymentPercentage: 0,
        advPayment: 0,
        overwrittingAgentCode1: "",
        overwrittingAgentContractLevel1: 0,
        overwrittingAgentCommission1: 0,
        overwrittingAgentCode2: "",
        overwrittingAgentContractLevel2: 0,
        overwrittingAgentCommission2: 0,
        split2_AgentCode: "",
        split2_agentCommission: 0,
        split2_splitRatio: 0,
        split_2_OWAgent1_AgentCode: "",
        split_2_OWAgent1_Commission: 0,
        split_2_OWAgent2_AgentCode: "",
        split_2_OWAgent2_Commission: 0,
    })

    const policyNumber = policyData.policyNumber

    const handleInputChange = (data, field) => {
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };


    const getStatementDetail = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(`/policies/getStatementByID/${_id}`).catch((error) => {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
        })

        if (res.status === 200) {
            dispatch(hideLoader())
            setPolicyData(res?.data)
        }
    }


    useEffect(() => {
        if (_id) {
            getStatementDetail()
        }
    }, [])

    return (
        <div>
            <Header />
            <div style={{ marginTop: '59px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                    // overflowY: 'hidden'
                }}>
                    <SideBar />
                    <CustomizedSnackbars ref={snackbar_Ref} />
                    <Stack sx={{ width: '81.8%', marginLeft: '18%' }}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
                            {/* <Stack alignItems={'flex-end'} sx={{ width: '95%' }} >
                                <Stack justifyContent='flex-end' sx={{ width: '18%' }}>
                                    Paid Agency Commision:
                                    <LinearProgressWithLabel value={50} />
                                </Stack>
                            </Stack> */}
                            <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '96%', height: '96%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '81%', height: '70%' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: isAdmin ? '100%' : '100%' }}>
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Policy Date:"
                                            variant="filled"
                                            value={policyData.paidOutDate}
                                            sx={{ width: '30%' }}
                                            onChange={(e) => { handleInputChange(e.target.value, "paidOutDate") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Policy Carrier:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.policyCarrier}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyCarrier") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Policy Number:"
                                            variant="filled"
                                            value={policyData.policyNumber}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyNumber") }}
                                        />
                                          <TextField
                                            disabled={_id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Insured First Name:"
                                            variant="filled"
                                            value={policyData.insuredFirstName}
                                            onChange={(e) => { handleInputChange(e.target.value, "insuredFirstName") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Insured First Name::"
                                            variant="filled"
                                            value={policyData.insuredLastName}
                                            onChange={(e) => { handleInputChange(e.target.value, "insuredLastName") }}
                                        />

                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Agent Code:"
                                            variant="filled"
                                            sx={{ width: '30%', display: isAdmin ? 'none' : 'flex' }}
                                            value={policyData.agentCode}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCode") }}
                                        />

                                        <TextField
                                            disabled={_id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Agent Commission:"
                                            variant="filled"
                                            value={policyData.agentCommission}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCommission") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Premium:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.premium}
                                            onChange={(e) => { handleInputChange(e.target.value, "premium") }}
                                        />

                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Split %:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.splitPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "splitPercentage") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Contract Level:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.contractLevel}
                                            onChange={(e) => { handleInputChange(e.target.value, "contractLevel") }}
                                        />

                                       <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{width:'65%'}}>
                                       <TextField
                                            disabled={_id ? true : false}
                                            label="Agency Commission:"
                                            variant="filled"
                                            sx={{ width: '46%', display: isAdmin ? 'flex' : 'none' }}
                                            value={policyData.agencyCommission}
                                            onChange={(e) => { handleInputChange(e.target.value, "agencyCommission") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Adv Payment %:"
                                            variant="filled"
                                            sx={{ width: '46%' }}
                                            value={policyData.advPaymentPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "advPaymentPercentage") }}
                                        />

                                       </Stack>
                                        {/* <TextField
                                            disabled={_id ? true : false}
                                            label="Agency Commission:"
                                            variant="filled"
                                            sx={{ width: '30%', display: isAdmin ? 'flex' : 'none' }}
                                            value={policyData.agencyCommission}
                                            onChange={(e) => { handleInputChange(e.target.value, "agencyCommission") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Adv Payment %:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.advPaymentPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "advPaymentPercentage") }}
                                        /> */}

                                    </Stack>

                                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '100%', height: '13vh', }}>

                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#003478",
                                                color: 'white',
                                                width: '186px',
                                                height: "5vh",
                                                fontSize: '12px',
                                                "&:hover": {
                                                    backgroundColor: '#003478',
                                                },
                                            }}
                                            onClick={() => navigate('/statements')}
                                        >
                                            Close
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default StatementDetail