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
import { useNavigate } from "react-router-dom";


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
 margin-bottom:5px;
`;


const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-family: 'ABeeZee', sans-serif;
  color: #383E41; 
  margin-bottom:5px;
`;
const Title1 = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: white; 
  display: inline-block;
  margin-top:10%;
`;
const Title2 = styled.h1`
  font-size: 48px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #DFC729; 
  display: inline;
  margin-top:10%;
`;
const Title3 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: ##242323; 
  display: inline-block;
  margin-top:5px;
`;
const Title4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #DFC729; 
  display: inline;
  cursor:pointer;
  margin-top:5px;

`;
const Who = styled.h4`
  font-size: 20px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color:#242323;
  text-align:left;
  margin-top:10px;
  margin-left:5px;

`;

const SignupForm = () => {

  const navigate= useNavigate();

  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [region, setRegion] = useState('');
  const [vousetes, setVousetes] = useState('');
  const [identifiantUnique, setidentifiantUnique] = useState('');

  
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleVousetesChange = (event) => {
    setVousetes(event.target.value);
  };
  const handleIdentifiantUniqueChange = (event) => {
    setVousetes(event.target.value);
  };

  async function handleSubmit (event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				prenom,
        password,
        phoneNumber,
        vousetes,
        region

			}),
		})

		const data = await response.json()
    console.log(data);
    
		if (data.status === 'ok') {
			navigate('/login')
		}
  };

  return (
    <Container>
    <Holder>
    <Title1>Make It easier with <Title2>Tnker</Title2>...</Title1>
    </Holder>
      <Wrapper>
       <Logo src={tnkerlogo} alt="logo" />
        <Title>S'inscrire:</Title>
      <form onSubmit={handleSubmit}>
       <FormControl fullWidth margin="dense" variant="outlined">
        <InputLabel htmlFor="Nom">Nom</InputLabel>
        <OutlinedInput
          id="name"
          value={name}
          onChange={handleNameChange}
          label="Name"
        />
      </FormControl>
       <br />
       <FormControl fullWidth margin="dense" variant="outlined">
        <InputLabel htmlFor="Prenom">Prenom</InputLabel>
        <OutlinedInput
          id="prenom"
          value={prenom}
          onChange={handlePrenomChange}
          label="Prenom"
        />
      </FormControl>
      <br />

      <FormControl fullWidth margin="dense" variant="outlined">
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
      <FormControl fullWidth margin="dense" variant="outlined">
        <InputLabel htmlFor="phoneNumber">Téléphone</InputLabel>
        <OutlinedInput
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          label="Phone Number"
        />
      </FormControl>
       <br />
       <FormControl fullWidth margin="dense" variant="outlined">
        <InputLabel htmlFor="password">Mot de Passe</InputLabel>
        <OutlinedInput
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
        />
      </FormControl>
      <br />
      <FormControl fullWidth margin="dense" variant="outlined">
        <InputLabel htmlFor="region">Region</InputLabel>
        <Select
          id="region"
          value={region}
          onChange={handleRegionChange}
          label="Region"
        >
          <MenuItem value="Tunis">Tunis</MenuItem>
          <MenuItem value="Ariana">Ariana</MenuItem>
          <MenuItem value="Ben Arous">Ben Arous</MenuItem>
          <MenuItem value="Manouba">Manouba</MenuItem>
          <MenuItem value="Nabeul">Nabeul</MenuItem>
          <MenuItem value="Zaghouan">Zaghouan</MenuItem>
          <MenuItem value="Bizerte">Bizerte</MenuItem>
          <MenuItem value="Beja">Beja</MenuItem>
          <MenuItem value="Jendouba">Jendouba</MenuItem>
          <MenuItem value="Kef">Kef</MenuItem>
          <MenuItem value="Siliana">Siliana</MenuItem>
          <MenuItem value="Sousse">Sousse</MenuItem>
          <MenuItem value="Monastir">Monastir</MenuItem>
          <MenuItem value="Mahdia">Mahdia</MenuItem>
          <MenuItem value="Sfax">Sfax</MenuItem>
          <MenuItem value="Kairouan">Kairouan</MenuItem>
          <MenuItem value="Kasserine">Kasserine</MenuItem>
          <MenuItem value="Sidi Bouzid">Sidi Bouzid</MenuItem>
          <MenuItem value="Gabes">Gabes</MenuItem>
          <MenuItem value="Medenine">Medenine</MenuItem>
          <MenuItem value="Tataouine">Tataouine</MenuItem>
          <MenuItem value="Gafsa">Gafsa</MenuItem>
          <MenuItem value="Tozeur">Tozeur</MenuItem>
          <MenuItem value="Kebili">Kebili</MenuItem>
        </Select>
      </FormControl>
       <br />
       <Who>Vous etes:</Who> 
       <RadioGroup row aria-label="Vousetes" name="Vousetes" value={vousetes} onChange={handleVousetesChange}>
       <FormControlLabel value="entreprise" control={<Radio color="primary" style={{ color: "#F4D81B" }} />} label="Entreprise" />
       <FormControlLabel value="particulier" control={<Radio color="primary" style={{ color: "#F4D81B" }} />} label="Particulier" />
       </RadioGroup>
       {vousetes === 'entreprise' && (
          <FormControl fullWidth margin="dense" variant="outlined">
            <InputLabel htmlFor="identifiant-unique">Identifiant unique</InputLabel>
            <OutlinedInput
              id="identifiant-unique"
              value={identifiantUnique}
              onChange={handleIdentifiantUniqueChange}
              label="Identifiant unique"
            />
          </FormControl>
        )}

       
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
         Sign Up
      </Button>
      <br />
      <Title3>Already have an account? <Title4>Sign In</Title4> </Title3>
      </form>
      </Wrapper>
      
      </Container>
      
        ); 
};

export default SignupForm;
