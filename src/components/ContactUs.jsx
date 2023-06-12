import { TextField, Typography, Box, Button } from '@mui/material'
import React from 'react'
import {useFormik} from 'formik'

import * as Yup from 'yup'
const ContactUs = () => {

    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            phoneNumber:"",
            message:""
        },
        validationSchema:Yup.object({
            firstName:Yup.string().required("This is Required"),
            lastName:Yup.string().required("This is Required"),
            phoneNumber:Yup.number().required("This is Required"),
            message:Yup.string().required("This is Required"),
        }),
        onSubmit:(values)=>{
            console.log("form submitted", values)
        }
    })

  return (
    <>
    <Typography variant='h4' mt={6} mb={6}>Contact Us </Typography>
    <Box
    component="form"
    onSubmit={formik.handleSubmit}
    >
    <TextField 
    label="First  Name"
    type='text'
    variant="outlined" 
    sx={{width:"300px", m:5}}
    name="firstName"
    onChange={formik.handleChange}
    error={Boolean(formik.errors.firstName)}
    helperText={formik.errors.firstName}
    />
    <TextField 
    label="Last Name"
    type='text'
    variant="outlined" 
    sx={{width:"300px", m:5}}
    name="lastName"
    onChange={formik.handleChange}
    error={Boolean(formik.errors.lastName)}
    helperText={formik.errors.lastName}
    />
    <TextField 
    label="Phone Number"
    type='number'
    variant="outlined" 
    sx={{width:"300px", m:5}}
    name="phoneNumber"
    onChange={formik.handleChange}
    error={Boolean(formik.errors.phoneNumber)}
    helperText={formik.errors.phoneNumber}
    />
    <TextField 
    label="Message"
    type='text'
    variant="outlined" 
    multiline
    fullWidth
    row={5}
    sx={ {m:2}}
    name="message"
    onChange={formik.handleChange}
    error={Boolean(formik.errors.message)}
    helperText={formik.errors.message}
    />
    <Button size="large" variant="contained" type="submit" sx={{m:2}}> Send</Button>
    </Box>
    </>
  )
}

export default ContactUs;
