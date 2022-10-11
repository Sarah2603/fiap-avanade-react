import React, { HTMLInputTypeAttribute } from 'react';
import styled from '@emotion/styled';

const InputData= styled.input`
background-color: #fff;
width: 190px;
border: none;
line-height: 30px;
padding-left: 10%;
border-radius: 10px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
outline-color: orange;`

export default function Input(props:InputHTMLAttributes<HTMLInputElement>
    ){
    return (
        <InputData {...props}/>
    )
}
