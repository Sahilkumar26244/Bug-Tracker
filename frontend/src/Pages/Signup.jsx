import { Alert, AlertIcon, Badge, Box, Button, FormControl, FormHelperText, Heading, Img, Input, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/SignupLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/UserAuth/userAuth.actions';

function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error2,setError] = useState(false);
  const [message,setMessage] = useState(null);


  const toast = useToast()

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister)
  const {loading,error,userInfo} = userRegister;
  const navigate = useNavigate();

  const storage = localStorage.getItem("userInfoF");
  console.log(storage,"local")

  // console.log(des)
  console.log(userInfo,"dad")
  console.log(error,"new")

  useEffect(() => {
    if(userInfo?._id){
      navigate('/login')
    }
  },[userInfo])


  const handleSubmit = async(e) => {
    e.preventDefault();
    

    if(!email || !password)
    {
      setMessage("All Fields are required!");
      return;
    }
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegax.test(email))
    {
      setMessage("Invalid email address!");
      return;
    }
    if(password.length < 7)
    {
      setMessage("Password must be attleast 7 characters long!");
      return;
    }
    dispatch(register(name,email,password));
    if(error && storage==null )
    {
      toast({
        title: 'Network Error.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    else{
      toast({
        title: 'Account Details.',
        description: "SignUp Successfully Done!!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  
  }

  return (
    <Box background={"#EAEBED"} display={"flex"} flexDirection={"column"} paddingTop={"80px"}>
    <Box background={"#EAEBED"} height={"750"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <Box width={"50%"} height={"auto"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
          <Img margin={"auto"} width={"30%"} src={logo} />
          <Heading color={"black"}  width={"30%"} margin={"auto"} textAlign={"center"} >Sign Up...</Heading>
        </Box>
        
        <FormControl width={"30%"} margin={"auto"} padding={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"} >
            <Input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <Input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {message && <Badge colorScheme='red'>{message}</Badge>}
            <Button isLoading={loading} background={"#479ece"} color={"white"} onClick={handleSubmit} >Submit</Button>
            <FormHelperText color={"blackAlpha.900"} fontWeight={"bold"} >Already a User? <Link to='/login' >Login</Link> </FormHelperText>
        </FormControl>
    </Box>
    </Box>
    
  )
}

export default Signup