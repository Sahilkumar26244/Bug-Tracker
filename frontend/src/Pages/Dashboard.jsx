import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Dashboard() {
  return (
    <Box width={"100%"} paddingTop={"90px"}  >
        <Box  display={"flex"} justifyContent={"center"} >
            <Text  fontSize={"30px"} fontWeight={"bold"} >Bug Tracker</Text>
        </Box>
    </Box>
  )
}

export default Dashboard