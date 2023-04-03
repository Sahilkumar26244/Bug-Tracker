import { Box, Img } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/Home.png'

function Home() {
  return (
    <Box height={"50%"} >
      <Img width={"100%"} height={"auto"} src={logo} />
    </Box>
  )
}

export default Home