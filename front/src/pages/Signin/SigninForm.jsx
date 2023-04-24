import styled from "styled-components";
import bg1 from '../../assets/bg1.png';
import tnkerlogo from '../../assets/tnkerlogo.png';
import { useState } from "react";
import { 
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/VisibilityOff';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Holder = styled.div`
  width: 50%;
  height: 100vh;
  background: url(${bg1}) center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  text-align:center;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column

 `;

const Logo = styled.img`
 width: 187px; 
 height: 52px;
 top:28px;
 left:988px;
 background-size:cover;
 align-self:center;
 margin-bottom:30px;
`;


const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #383E41; 
  margin-bottom:20px;
`;
const Title1 = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: white; 
  display: inline-block;
  margin-top:15%;
`;
const Title2 = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #DFC729; 
  display: inline;
  margin-top:15%;
`;
const Title3 = styled.h4`
  font-size: 25px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: ##242323; 
  display: inline-block;
  margin-top:10px;
  color:#B9B9B9;
`;
const Title4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #DFC729; 
  display: inline;
  cursor:pointer;
  margin-top:10px;

`;
const Title5 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: ##242323; 
  display: inline-block;
  margin-top:10px;
`;

const Who = styled.h4`
  font-size: 20px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color:#242323;
  text-align:left;
  margin-top:20px;
  margin-left:5px;

`;




const SigninForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
  };
  
  

  return (
    <Container>
    <Holder>
    <Title1>Make It easier with <Title2>Tnker</Title2>...</Title1>
    </Holder>
      <Wrapper>
       <Logo src={tnkerlogo} alt="logo" />
        <Title>Welcome Back</Title>
        <Title3>Please enter your details</Title3>
      <form onSubmit={loginUser}>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="email">Email</InputLabel>
        <OutlinedInput
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          label="Email"
        />
        {/* <FormHelperText>Please enter your email address</FormHelperText> */}
      </FormControl>
       <br />
        <FormControl fullWidth margin="normal" variant="outlined">
         <InputLabel htmlFor="password">Password</InputLabel>
         <OutlinedInput
         id="password"
         type={passwordShown ? 'text' : 'password'}
         value={password}
         onChange={handlePasswordChange}
         label="Password"
         endAdornment={
        <IconButton onClick={togglePassword} edge="end">
            {passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        }
      />
    </FormControl>
 
       <Button
        variant="contained"
        style={{
        background: "linear-gradient(90deg, rgba(223, 199, 41, 0.8) 0%, rgba(223, 199, 41, 0.8) 100%)",
        opacity: 0.6,
        border: "1px solid rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(25px)",
        width: 421,
       }}
       type="submit"
       >
         Sign In
      </Button>
      <br />
      <Title5>Dont have an account? <Title4>Sign up</Title4> </Title5>
      </form>
      </Wrapper>
      
      </Container>
      
        ); 
};

export default SigninForm;
