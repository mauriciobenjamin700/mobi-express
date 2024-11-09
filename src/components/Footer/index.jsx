import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


import LogoImg from "../../assets/logo.png";
import {Container, Item, Copy} from "./styles.js"
import { Fragment } from "react";


const Footer = () => {
    return (
        <Fragment>
            <Container>
                <Item>
                    <img src={LogoImg} alt="" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi modi laudantium ea praesentium? Iste dolorem molestias quaerat possimus nemo, fugit, placeat rerum numquam aliquid similique dignissimos, asperiores exercitationem voluptatem nostrum. </p>

                    <nav>
                        <li>
                            <span> <FaFacebook /> </span>
                        
                        
                        </li>

                        <li>
                            <span> <FaInstagram/> </span>
                        </li>

                        <li>
                            <span> <FaWhatsapp/> </span>
                        </li>

                    </nav>
                </Item>

                <Item>

                    <h3>Nossos Serviços</h3>

                    <ul>
                        <li>
                            <span>Comprar</span>  
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>



                    </ul>
                </Item>

                <Item>

                    <h3>Nossos Serviços</h3>

                    <ul>
                        <li>
                            <span>Comprar</span>  
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>



                    </ul>
                </Item>


                <Item>

                    <h3>Nossos Serviços</h3>

                    <ul>
                        <li>
                            <span>Comprar</span>  
                        </li>
                        <li>
                            <span>Alugar</span>
                        </li>
                        <li>
                            <span>Vender</span>
                        </li>



                    </ul>
                </Item>


    
            </Container>
            <Copy>
                <p>© Copyright 2022 - Workside Tecnologia All Rights Reserved.</p>
                <ul>
                    <li>
                        <span>Termos de Uso</span>
                    </li>
                    <li>
                        <span>Políticas de Privacidade</span>
                    </li>
                    <li>
                        <span>Políticas de Cookies</span>
                    </li>
                </ul>
            </Copy>
        </Fragment>
    )
}

export  default Footer;