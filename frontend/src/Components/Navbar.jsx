import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/UserAuth/userAuth.actions';

function Navbar() {
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userInfo);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/')
  }

  return (
    <div>
        <Flex zIndex={'overlay'} bg='#479ece' w='100%' color='white' p={4} align={"center"} position={"fixed"}  >
            <Link to='/' ><Box fontSize={"20px"} fontWeight={"bold"} >Bug Tracker App</Box></Link>
            <Spacer />
            {
              userInfo == null ? (<Flex gap={"20px"} >
              <Button colorScheme='white' variant={'outline'}  ><Link to='/login' >Login</Link></Button>
              <Button colorScheme='teal' variant={'solid'}  ><Link to='/signup' >SignUp</Link></Button>
              </Flex>)
              :
              (<Flex gap={"20px"} >
              <Button colorScheme='white' variant={'outline'}  ><Link to='/dashboard' >Dashboard</Link></Button>
              <Button colorScheme='teal' variant={'solid'} onClick={logoutHandler} >LogOut</Button>
              </Flex>)

            }
        </Flex>
    </div>
  )
}

export default Navbar