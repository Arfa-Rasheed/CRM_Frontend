import { Avatar, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Navigate, useNavigate } from 'react-router';
import { hideLoader, showLoader } from '../../Store/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import httpClient from '../../_util/api';
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar';
import { ConnectedTvOutlined } from '@mui/icons-material';

const Profile = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem("userId")
    const firstName = localStorage.getItem("firstName")
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const agentTitle = localStorage.getItem("agentTitle")
    const profilePic = localStorage.getItem("profilePic")
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
    useEffect(() => {
        console.log("profilePic", profilePic)
    }, [])


    return (
        <div style={{ width: '27%' }}>
            <CustomizedSnackbars ref={snackbar_Ref} />
            <Stack
                direction={'row'}
                alignItems="center"
                spacing={2}
            >
                {
                    profilePic ? (
                        <Stack sx={{width:'44px',height:'41px',borderRadius:'46px'}}>
                            <img src={profilePic}  style={{width:'100%',height:'100%',borderRadius:'46px'}}
                            onClick={() => navigate(isAdmin ? "/adminAccountDetails" : "/agentAccountDetails")}
                            />
                        </Stack>
                    )
                        :
                        (
                            <Avatar onClick={() => navigate(isAdmin ? "/adminAccountDetails" : "/agentAccountDetails")} />
                        )

                }
                {/* <Avatar onClick={() => navigate(isAdmin ? "/adminAccountDetails" :"/agentAccountDetails")} /> */}
                <Stack spacing={10} direction={'row'}>
                    <Stack flexDirection={'row'} sx={{ width: '100%' }}>

                        <Typography sx={{ marginRight: '4px' }}>{firstName}</Typography>
                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white', width: '1px', marginRight: '4px' }} />
                        <Typography sx={{ marginRight: '4px' }}>{isAdmin ? "Admin" : agentTitle}</Typography>
                    </Stack>

                </Stack>
            </Stack>
        </div>
    )
}

export default Profile