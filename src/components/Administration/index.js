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
import "./style.scss"
import profilePhoto from '../../assets/profilePhotoCRM.png'
import { useNavigate } from 'react-router-dom'
import httpClient from '../../_util/api.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
import PageLoader from '../../Layout/FullPageLoader/FullPageLoader.jsx'
import CustomSnackbar from '../../shared-component/Snackbar/SnackBar.jsx'
import Dropdown from '../../shared-component/AdministrationDropdown/Dropdown.jsx'


const Administration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const AdministrationMenu = [
    {
      title: "Home Office",
      options: [
        // {
        //   name:"Kaplan Financial Education",
        //   url:"https://www.kaplanfinancial.com/"
        // },
        "dewr"
      ]
    },
    {
      title: "Onboarding & Contracting",
      options: [
        {
          name: "Our System Flow Chart",
          url: ""
        },
        {
          name: "SureLC Joptiman",
          url: "https://accounts.surancebay.com/oauth/authorize?redirect_uri=https:%2F%2Fsurelc.surancebay.com%2Fproducer%2Foauth%3FreturnUrl%3D%252Fprofile%252Fcontact-info%253FgaId%253D1034%2526gaId%253D1034%2526branch%253DJOptiman%252520LOA%2526branchVisible%253Dtrue%2526branchEditable%253Dfalse%2526branchRequired%253Dtrue%2526dba%253DS%2526autoAdd%253Dfalse%2526requestMethod%253DGET&amp;gaId=1034&amp;client_id=surecrmweb&amp;response_type=code"
        },
        {
          name: "3Mark Appointment",
          url: "https://surelc.surancebay.com/sbweb/login.jsp?bcc=alexandra.galla%403mark.com&amp;branch=JOptiman%20Consultancy%2CLLC&amp;branchEditable=off&amp;branchRequired=on&amp;branchVisible=on&amp;cc=admin%40joptimanconsultancy.com&amp;gaId=41&amp;gaName=3%20Mark%20Financial%2C%20Inc."
        }

      ]
    },
    {
      title: "Communication",
      option: [
        "Emails"
      ]
    },
    {
      title: "Guidlines and Policies",
      options: [
        {
          name: "NAIC. State Licensing Handbook",
          url: "https://content.naic.org/sites/default/files/inline-files/State%20Licensing%20Handbook%20-%20Complete%20and%20Final.pdf"
        },
        {
          name: "Doing Bussiness With Athene Guidelines",
          url: "https://p.widencdn.net/8cqsjm/19608"
        }

      ]
    },
    {
      title: "Producing Agent Standards Operating",
      options: [
        "",
      ]
    },
    {
      title: "Compliance",
      options: [
        {
          name: "Free Anti Money Laundy Training",
          url: "https://aml.surancebay.com/"
        },
        {
          name: "Errors and Omission Compliance",
          url: "https://joptimanconsultancy.com/eofees/"
        },
      ]
    },
    {
      title: "Forms",
      options: [
        {
          name: "TransAmerica Forms Search",
          url: "https://formspipe.ipipeline.com/?ProfileId=3020"
        },
        {
          name: "Athene Forms and Materials",
          url: "https://www.athene.com/producer/connect/tools/forms-materials"
        },
        {
          name:"JOptiman Status Change Form"
        }
      
      ]
    },
    {
      title: "Promotions",
      options: [
        {
          name:"Advancement Guidlines",
          url: ""
        },
        {
          name:"Advancement Announcements",
          url: ""
        },
       
       
      ]
    },
    {
      title: "Events",
      options: [
        {
          name:"Announcements",
          url: ""
        },
        {
          name:"Calendars",
          url: ""
        },
       
      ]
    }
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

          <Stack sx={{ width: '81.7%', height: '90vh', marginLeft: '19%' }}>
            <h2 style={{ color: 'black', textAlign: 'center' }}>Administration</h2>
            <Stack alignItems={'center'} sx={{ height: '100%' }}>
              <Stack justifyContent={'space-between'} sx={{
                width: '85%',
                // height:'75%',
              }}>
                {
                  AdministrationMenu.map((menu) => {
                    return (
                      // <Typography>{menu}</Typography>
                      <Dropdown title={menu.title} options={menu.options} />
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

export default Administration