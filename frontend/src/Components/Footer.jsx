import { Box, Flex, HStack, Img, Text } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/FooterLogo.png';
import {CiFacebook , CiTwitter , CiLinkedin} from "react-icons/ci";
import { BsFillCCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <Box width={"100%"} height={"auto"} background={"#201f23"} >
        <Flex padding={"30px"} display={"flex"} justifyContent={"space-around"} >
            <Box width={"20%"} >
                <Img width={"100%"} src={logo} alt='FooterLogo' />
            </Box>
            <Box color={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} textAlign={"center"} gap={"30px"} >
                <Box>
                    <Text fontSize={"30px"} >Bug Tracker</Text>
                </Box>
                <HStack gap={"30px"} >
                    <Text>Home</Text>
                    <Text>About</Text>
                    <Text>Services</Text>
                    <Text>Blog</Text>
                    <Text>Contact</Text>
                </HStack>
                <HStack display={"flex"} justifyContent={"center"} gap={"30px"} >
                    <CiFacebook style={{fontSize:"30px"}} />
                    <CiTwitter style={{fontSize:"30px"}}/>
                    <CiLinkedin style={{fontSize:"30px"}}/>
                </HStack>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"10px"} >
                    <BsFillCCircleFill/>
                    <Text>2023 All right reserved.</Text>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Footer