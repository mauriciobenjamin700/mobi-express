import React from "react";


import { Container, Logo, Menu } from "./styles";
import LogoImg from "../../assets/logo.png";

export default function Header() {
 return (
   <Container>

    <Logo>

      <img src={LogoImg} alt="Google" />

    </Logo>

    <Menu>

      <ul>

        <li>
          <span>
            Cadastro/Login
          </span>
        </li>
        
      </ul>


    </Menu>

   </Container>
 );
}