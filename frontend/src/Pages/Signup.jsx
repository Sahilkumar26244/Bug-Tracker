import { Box, Button, FormControl, FormHelperText, Heading, Img, Input } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/SignupLogo.png';

function Signup() {
  return (
    <Box background={"#EAEBED"} height={"680"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <Box width={"50%"} height={"auto"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
          <Img margin={"auto"} width={"30%"} src={logo} />
          <Heading width={"30%"} margin={"auto"} textAlign={"center"} >Sign Up...</Heading>
        </Box>
        <FormControl width={"30%"} margin={"auto"} padding={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"} >
            <Input type='text' placeholder='Enter Name' />
            <Input type='email' placeholder='Enter Email' />
            <Input type='password' placeholder='Enter Password' />
            <Button background={"#479ece"} color={"white"} >Submit</Button>
            <FormHelperText>Already a User? <a href='/login' >Login</a> </FormHelperText>
        </FormControl>
    </Box>
  )
}

export default Signup