import React from 'react'
import styles from '../../styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';
import { useSlotProps } from '@mui/base';

const HeaderPage = styled.header`
  background-color: #e1e1e1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;`

  const Input = styled.input`
  background-color: #fff;
  width: 190px;
  border: none;
  line-height: 30px;
  padding-left: 10%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  outline-color: orange;`

 const Button = styled.button`
 width: 100px;
 line-height: 30px;
 border: none;
 border-radius: 10px;
 margin-left: 10px;
 &:hover{
  background-color: #ddd;
  cursor: pointer;
 }`

 type HeaderProps = {
  menu ?: Array<string>;
  pesquisar ?: string;
 }

  

export default function Header(props:HeaderProps) {

  return (

    //<header className={styles['menu-site']} >
    <HeaderPage>
        <div>Logotipo</div>
        <nav>
          <ul className={ css`
          width: 50%; 
          display: inline-flex; 
          margin: 0px 
          padding: 0;
          & > li {
            min-width: 100px;
            text-align: center;
            list-style: none;
          }`}>
            <li>Home</li>
            <li>Produto</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          </nav>
       <div>
        
          <Input type= "text" placeholder = "Pesquisar" />
          <Button>{props.pesquisar? props.pesquisar:"Search"} </Button>        
        </div>   
       
        
        </HeaderPage>
      // </header>

  )

}