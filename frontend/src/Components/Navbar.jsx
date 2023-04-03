import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Flex bg='#479ece' w='100%' color='white' p={4} align={"center"} position={"sticky"} >
            <Link to='/' ><Box fontSize={"20px"} fontWeight={"bold"} >Bug Tracker App</Box></Link>
            <Spacer />
            <Flex gap={"20px"} >
                <Button colorScheme='white' variant={'outline'}  ><Link to='/login' >Login</Link></Button>
                <Button colorScheme='teal' variant={'solid'}  ><Link to='/signup' >SignUp</Link></Button>
            </Flex>
        </Flex>
    </div>
  )
}

export default Navbar