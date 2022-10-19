
import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #242424;
    width: 100%;
    height: 450px;
`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
export default function Profile() {
  return (
    <ProfileContainer>
        <AvatarContainer>
            <Avatar alt="Sarah Barreto" src="https://avatars.githubusercontent.com/u/107278281?s=400&u=013b4e48ed763c07b9ebc06f30e0ec8e7868faf4&v=4" sx={{ width: 200, height: 200 }} />
            <h2>Sarah Barreto</h2>
            <h3>Software Engineer</h3>
        </AvatarContainer>
    </ProfileContainer>
  )
}