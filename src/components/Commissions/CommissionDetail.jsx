
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
import { hideLoader, showLoader } from '../../Store/mainSlice.js'

const CommissionDetail = () => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const snackbar_Ref = useRef(null);
    const { _id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [policyData, setPolicyData] = useState({
        isPaid: false,
        policySubmissionDate: "",
        policyCarrier: "",
        policyNumber: 0,
        agentCarrierNumber: 0,
        agentCode: "",
        policyValue: 0,
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

    const handleInputChange = (data, field) => {
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };


    const getPolicyDetail = async () => {
        const res = await httpClient.get(`/policies/getPolicyByID/${_id}`)
            .catch((error) => {
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })

        console.log("Policy DEtail res", res);
        if (res?.status === 200) {
            setPolicyData(res?.data)
        }
    }

    const paidOutHandler = async () => {
        dispatch(showLoader())
        const res = await httpClient.post(`/policies/isPaid/${_id}`, policyData)
            .catch((error) => {
                dispatch(hideLoader())
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })

        if (res.status === 200) {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("error", res?.data.message, "", "i-chk-circle");
            setTimeout(() => {
                navigate('/statements');
            }, 4000);
        }
    }

    useEffect(() => {
        if (_id) {
            getPolicyDetail()
        }
    }, [])

    return (
        <div>
            <Header />
            <div style={{ marginTop: '59px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                    overflowY: 'hidden'
                }}>
                    <SideBar />
                    <CustomizedSnackbars ref={snackbar_Ref}/>
                    <Stack sx={{ width: '81.8%' }}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
                            <Stack alignItems={'center'} sx={{ width: '96%', height: '94%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                                {
                                    isAdmin
                                        ? (
                                            <Stack alignItems={'flex-end'} sx={{ width: '95%' }} >
                                                <Stack justifyContent='flex-end' sx={{ width: '18%' }}>
                                                    Paid Agency Commision:
                                                    <LinearProgressWithLabel value={policyData.paidAgencyCommission} />
                                                </Stack>
                                            </Stack>
                                        )
                                        : (
                                            <></>
                                        )
                                }

                                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '81%', height: '100%', marginTop: '20px' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '100%' }}>
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Date:"
                                            variant="filled"
                                            value={policyData.policySubmissionDate}
                                            sx={{ width: '30%' }}
                                            onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate") }}
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
                                            label="Agaent Carrier Number:"
                                            variant="filled"
                                            value={policyData.agentCarrierNumber}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber") }}
                                        />

                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Agent Code:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.agentCode}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCode") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Policy Premium:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.policyValue}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyValue") }}
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
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Agency Commission %:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.agencyCommissionPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "agencyCommissionPercentage") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Agency Commission:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.agencyCommission}
                                            onChange={(e) => { handleInputChange(e.target.value, "agencyCommission") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Agent Commission:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.agentCommission}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCommission") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Adv Payment %:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.advPaymentPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "advPaymentPercentage") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Adv Payment:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.advPayment}
                                            onChange={(e) => { handleInputChange(e.target.value, "advPayment") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="OW1 Contract Level:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.overwrittingAgentContractLevel1}
                                            onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel1") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="OW1 Commission"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.overwrittingAgentCommission1}
                                            onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCommission1") }} />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="OW2 Contract Level:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.overwrittingAgentContractLevel2}
                                            onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel2") }}
                                        />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="OW2 Commission"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.overwrittingAgentCommission2}
                                            onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCommission2") }} />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Split2_SplitRatio"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.split2_splitRatio}
                                            onChange={(e) => { handleInputChange(e.target.value, "split2_splitRatio") }} />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Split_2_OWAgent1_Commission"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.split_2_OWAgent1_Commission}
                                            onChange={(e) => { handleInputChange(e.target.value, "split_2_OWAgent1_Commission") }} />
                                        <TextField
                                            disabled={_id ? true : false}
                                            label="Split_2_OWAgent2_Commission"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.split_2_OWAgent2_Commission}
                                            onChange={(e) => { handleInputChange(e.target.value, "split_2_OWAgent2_Commission") }} />
                                    </Stack>

                                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} sx={{ width: '100%', height: '13vh', }}>
                                        <Button
                                            variant="contained"
                                            // disabled={isAdmin ? (policyData.isPaid ? true : false) : false}
                                            sx={{
                                                backgroundColor: "#003478",
                                                color: 'white',
                                                width: '186px',
                                                height: "5vh",
                                                fontSize: '12px',
                                                "&:hover": {
                                                    backgroundColor: '#003478',
                                                },
                                                "&:disabled": {
                                                    backgroundColor: '#406391',
                                                    color: 'white',
                                                },
                                            }}
                                            onClick={isAdmin ? paidOutHandler : () => navigate('/commissions')}
                                        >
                                            {isAdmin ? <>Paid Out</> : <>Close</>}
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

export default CommissionDetail