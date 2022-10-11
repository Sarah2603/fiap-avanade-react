import React, {useState} from 'react'
import styles from '../../styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';
import { useSlotProps } from '@mui/base';
import Input from '../Form/Input/Input';
import Button from '../Button/Button';

const HeaderPage = styled.header`
  background-color: #e1e1e1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;`

 

 

 // type UserType = {
//  email: string;
// password: string;
//}

// type User = HeaderProps | UserType;

// interface IHeaderProps  {
  //  menu ?: Array<string>;
  //pesquisar ?: string;
  //name ?: string;
  //}
  
  
  type HeaderProps = {
   menu ?: Array<string>;
   pesquisar ?: string;
   name ?: string;
   }

export default function Header(props:HeaderProps) {
  const [userAuth, setUserAuth] = useState<boolean>(true);
  const[nameUser, setNameUser] = useState<string | undefined>(props.name);

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

          {userAuth && (<div>
            <span> Seja Bem vindo(a) {nameUser?nameUser:" visitante"}</span>
          </div>)  }
       <div>
        
          <Input type= "text" placeholder = "Pesquisar" />
          <Button disabled>{props.pesquisar? props.pesquisar:"Search"} </Button>        
        </div>   
       
        
        </HeaderPage>
      // </header>

  )

}