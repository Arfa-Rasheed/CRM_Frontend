import { Stack } from '@mui/material'
import React from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import CarriersItems from './CarriersItems'
import Carrier1 from '../../assets/Carrier1.png'
import Carrier2 from '../../assets/Carrier2.png'
import Carrier3 from '../../assets/Carriers 3.png'
import Carrier4 from '../../assets/Carrier 4.png'
import Carrier5 from '../../assets/Carrier5.png'
import Carrier6 from '../../assets/Carrier 6.png'
import Carrier7 from '../../assets/Carrier 7.png'
import Carrier8 from '../../assets/Carrier8.png'
import Carrier9 from '../../assets/carrier9.png'

const Carriers = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '56px' }}>
        <div style={{
          display: 'flex',
          height: '92vh',
          overflowY:'hidden'
        }}>
          <SideBar />
          <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh',marginLeft:'18%'  }}>
            {/* <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}> */}
              <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '90%', height: '90%'}}>
                <CarriersItems carrierPic={Carrier1}/>
                <CarriersItems carrierPic={Carrier2}/>
                <CarriersItems carrierPic={Carrier3}/>
                <CarriersItems carrierPic={Carrier4}/>
                <CarriersItems carrierPic={Carrier5}/>
                <CarriersItems carrierPic={Carrier6}/>
                <CarriersItems carrierPic={Carrier7}/>
                <CarriersItems carrierPic={Carrier8}/>
                <CarriersItems carrierPic={Carrier9}/>
              </Stack>
            {/* </Stack> */}
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Carriers