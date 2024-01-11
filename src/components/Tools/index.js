import React from 'react'
import Header from '../../Layout/Header'
import { Box, Button, Stack } from '@mui/material'
import SideBar from '../../Layout/Sidebar'

const Tools = () => {
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
          <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh' }}>
            <Stack sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>
              <Stack alignItems={'center'} justifyContent={'space-around'} sx={{ width: '27%', height: '29vh', backgroundColor: 'white', borderRadius: '12px', marginLeft: '25px', marginTop: '121px' }}>
                <Box sx={{ width: '95%',height:'4vh',borderRadius:'4px' , backgroundColor: '#8FAADC',textAlign:'center' }}>Tools</Box>
                <Stack justifyContent={'space-between'} sx={{ width: '95%',height:'16vh'}}>
                  <Button sx={{ width: '100%', backgroundColor: '#003478', color: 'white', fontSize: '12px' }}>Kaplan:CE Registration Guide</Button>
                  <Button sx={{ width: '100%', backgroundColor: '#003478', color: 'white', fontSize: '12px' }}>Exam FX: Registration Guide</Button>
                  <Button sx={{ width: '100%', backgroundColor: '#003478', color: 'white', fontSize: '12px' }}>Exam FX: Study Steps & Tips</Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Tools