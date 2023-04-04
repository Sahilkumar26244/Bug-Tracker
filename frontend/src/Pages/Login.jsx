import { Badge, Box, Button, FormControl, FormHelperText, Heading, Img, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LoginLogo.png';
import { login } from '../Redux/UserAuth/userAuth.actions';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error2,setError] = useState("");

  const toast = useToast()

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {loading,error,userInfo} = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password)
    {
      setError("All Fields are required!");
      return;
    }
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegax.test(email))
    {
      setError("Invalid email address!");
      return;
    }
    if(password.length < 7)
    {
      setError("Password must be attleast 7 characters long!");
      return;
    }
    dispatch(login(email,password));
    if(error==undefined)
    {
      toast({
        title: 'Account Details.',
        description: "Login Successfully Done!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Network Details.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Box background={"#EAEBED"} height={"750"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <Box width={"50%"} height={"auto"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
          <Img margin={"auto"} width={"30%"} src={logo} />
          <Heading width={"30%"} margin={"auto"} textAlign={"center"} >Login...</Heading>
        </Box>
        
        <FormControl padding={"40px 20px 40px 20px"} width={"30%"} margin={"auto"} borderRadius={"10px"}  display={"flex"} flexDirection={"column"} gap={"20px"} >
            <Input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {error2 && <Badge colorScheme='red'>{error2}</Badge>}
            <Button background={"#479ece"} isLoading={loading} color={"white"} onClick={handleSubmit} >Submit</Button>
            <FormHelperText>New User? <Link to='/signup' >SignUp</Link> </FormHelperText>
        </FormControl>
        
    </Box>
  )
}

export default Login