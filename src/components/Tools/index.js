import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack } from '@mui/system'
// import { Button } from '@mui/base'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import AllAgentsIcon from '../../assets/AllAgentsIcon.png'
import { Button } from '@mui/material'
import { MagnifyingGlass, Minus, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
// import "./style.scss"
import profilePhoto from '../../assets/profilePhotoCRM.png'
import { useNavigate } from 'react-router-dom'
import httpClient from '../../_util/api.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
import PageLoader from '../../Layout/FullPageLoader/FullPageLoader.jsx'
import CustomSnackbar from '../../shared-component/Snackbar/SnackBar.jsx'
import Dropdown from '../../shared-component/AdministrationDropdown/Dropdown.jsx'
import AdministrationButton from '../../shared-component/AdministrationButton/Button.jsx'

const Tools = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ToolsMenu = [
    {
      title: "State Licensing Requirements",
      url:"https://nipr.com/licensing-center/state-requirements",
      isDropdown:false
    },
    {
      title: "Pre-Licensing Study Material",
      options: [
        {
          name:"ExamFX",
          url:"https://www.examfx.com/"
        },
        {
          name:"ExamFX Candidate Registration Guide",
          url:""
        },
        {
          name:"ExamFX",
          url:""
        },
      ],
      isDropdown:true
    },
    {
      title: "Continuing Education",
      options: [
        {
          name:"Kaplan Financial Education",
          url:"https://www.kaplanfinancial.com/"
        },
        {
          name:"Kaplan Financial Continuing Education Registration Guid",
          url:""
        },
        {
          name:"State Requirement for CE",
          url:"https://www.kaplanfinancial.com/insurance-continuing-education/requirements"
        },

      ],
      isDropdown:true
    },
    {
      title: "Heirarchy Chart",
      options: [
        ""
      ],
      isDropdown:false
    },
    {
      title: "Sales Illustration",
      options: [
        {
          name:"Nationwide Illustration Tools",
          url:"https://nationwidefinancial.com/resources/tools?product=life&amp;function=calculate&amp;_ga=2.28881724.1819211996.1712080280-432224549.1711570415&amp;_gl=1*2qez4f*_ga*NDMyMjI0NTQ5LjE3MTE1NzA0MTU.*_ga_GLJSQEPWL4*MTcxMjA4MDI4MC4zLjEuMTcxMjA4MDMyNy4xMy4wLjA",
        },
        {
          name:"North American Illustration Tools",
          url:"https://igoforms2.ipipeline.com/CossEnterpriseSuite/(S(wjjsdaqtozaf5ycqsrcabakm))/webforms/StartUpResp.aspx"
        },
        {
          name:"Athene Annuity Illustration Center",
          url:"https://igoforms2.ipipeline.com/CossEnterpriseSuite/(S(wjjsdaqtozaf5ycqsrcabakm))/webforms/StartUpResp.aspx"
        },
        {
          name:"Athene Annuity Electronic Servicing",
          url:"https://www.athene.com/producer/connect/tools/electronic-servicing"
        },
        {
          name:"Transamerica iGO e-App",
          url:"https://igoforms2.ipipeline.com/CossEnterpriseSuite/(S(ihauzpt4seqquhj2gaunymfr))/webforms/StartUpResp.aspx"
        },
        {
          name:"Transamerica Insurance Review",
          url:"https://ani.transamerica.com/ani/Uploads/Pages/51491/Brokerage_Insurance_Review_Producer.pdf"
        },
        {
          name:"Transamerica Solve Options",
          url:"https://ani.transamerica.com/ani/Uploads/Pages/53028/251394_0320%20Common%20Solves%20Piece%20Flyer_FINAL_Digital.pdf"
        },
      ],
      isDropdown:true
    },
    {
      title: "Resources",
      options: [
        {
          name:"3Marks",
          url:"https://3mark.com"
        }
      ]
    },
    
  ]


  return (
    <>
      <PageLoader />
      <Header />
      <div style={{ marginTop: '56px' }}>
        <div style={{
          display: 'flex',
          height: '92vh',
          // overflowY: 'hidden'
        }}>
          <SideBar />

          <Stack sx={{ width: '81.7%',height:'90vh', marginLeft: '19%'}}>
            <h2 style={{ color: 'black', textAlign: 'center' }}>Tools</h2>
            <Stack  alignItems={'center'} sx={{height:'100%'}}>
              <Stack justifyContent={'space-between'} sx={{
                width:'85%',
                // height:'75%',
                }}>
              {
                ToolsMenu.map((menu) => {
                  return (
                    // <Typography>{menu}</Typography>
                    <>
                    {
                      menu.isDropdown 
                      ? (
                        <Dropdown title={menu.title} options={menu.options} />
                      )
                      : (
                        <AdministrationButton title={menu.title}/>
                      )
                    }
                    </>
                    // <Dropdown title={menu.title} options={menu.options} />
                  )
                })
              }
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>

    </>
  )
}

export default Tools