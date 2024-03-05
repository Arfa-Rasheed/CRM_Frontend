import { Avatar, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Navigate, useNavigate } from 'react-router';
import { hideLoader, showLoader } from '../../Store/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import httpClient from '../../_util/api';
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar';

const Profile = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem("userId")
    const firstName = localStorage.getItem("firstName")
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const agentTitle = localStorage.getItem("agentTitle")
    const dispatch = useDispatch()
    const snackbar_Ref = useRef()
    const isLoggedIn = useSelector((state) => state.mainSlice.isLoggedIn)

    // const [userData, setuserData] = useState({
    //     firstName: "",
    //     agentTitle: "",
    // })

    // const getAccountDetail = async () => {
    //     // dispatch(showLoader())
    //     if (isLoggedIn) {
    //         if (isAdmin === false) {
    //             const res = await httpClient.get(`/agents/getAgentByID/${id}`).catch((error) => {
    //                 // dispatch(hideLoader())
    //                 snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
    //             })

    //             if (res?.status === 200) {
    //                 // dispatch(hideLoader())
    //                 console.log("Detail res", res?.data)
    //                 // setuserData(res?.data.agentDetails)
    //                 // setPolicyData(res?.data.policyDetailsArray)
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //     getAccountDetail()
    // }, [userData])


    return (
        <div style={{ width: '15%' }}>
            <CustomizedSnackbars ref={snackbar_Ref} />
            <Stack
                direction={'row'}
                alignItems="center"
                spacing={2}
            >
                <Avatar onClick={() => navigate("/accountDetails")} />
                <Stack spacing={10} direction={'row'}>
                    <Stack>
                        {/* <Typography>{isAdmin ? adminFirstName : userData.firstName}</Typography> */}
                        <Typography>{firstName}</Typography>
                        <Typography>{isAdmin ? "Admin" : agentTitle}</Typography>
                    </Stack>
                    <KeyboardArrowDownIcon sx={{ fontSize: '35px', marginTop: '10px' }} />
                </Stack>
            </Stack>
        </div>
    )
}

export default Profile