import React from 'react'
import Market_place from '../../assets/Market_place.png';
import styled from "styled-components";
import Box from '@mui/material/Box';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
`;
const Logo = styled.img`
 width: 300px; 
 background-size:cover;
 align-self:center;
`;

const Choice = styled.h3`
  font-size: 40px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #242323; 
  margin-bottom:25px;
`;
const Desc1 = styled.h3`
  font-size: 20px;
  font-weight: 400;
  font-family: 'ABeeZee', sans-serif;
  color: #FFFFFF; 
  margin: 10% 20% ;
  `;


const Plan = () => {
  return (
    <Container>
        <Logo src={Market_place} alt='logo' />
        <Choice>Choose a plan</Choice>
        <Box
          sx={{
        width: 300,
        height: 400,
        backgroundColor: '#00000066',
        
        '&:hover': {
          backgroundColor: '#00000066',
        },
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
      }}> 
      <Desc1>Standard</Desc1> 
      </Box> 

    </Container>
  )
}

export default Plan