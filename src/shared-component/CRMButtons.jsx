import { Button } from '@mui/material'
import React from 'react'

const CRMButtons = (props) => {
  return (
    <Button sx={{width:'100%',backgroundColor:'#F08613',color:'white'}}>{props.title}</Button>
  )
}

export default CRMButtons