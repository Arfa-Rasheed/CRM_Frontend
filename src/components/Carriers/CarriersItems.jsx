import React from 'react'
import CRMDropdown from '../../shared-component/CRM-Dropdown/index'
import { Stack } from '@mui/material'
// import Carrier1 from '../../assets/Carrier1.png'
import './style.scss'


const CarriersItems = (props) => {
    return (
        <Stack sx={{ width: '27%', height: '24vh' }}>
            <img src={props.carrierPic} />
            <div className='CarrierItemDropdown'>
                {/* <CRMDropdown /> */}
            </div>

        </Stack>
    )
}

export default CarriersItems