import { Fragment } from "react"


import * as S from "./styles.js"
import TopBanner from "../../components/TopBanner"
import Input from "../../components/Input"
import Button from "../../components/Button"
import TextArea from "../../components/TextArea"


const Imobi = () => {
    return (
    
        <Fragment>
            <TopBanner/>
            <S.Container>
                
                <S.Left>

                    <S.Thumb>

                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Imagem do Imóvel" />

                    </S.Thumb>

                    <S.Description>

                        <h2>Apartamento / Alugar</h2>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita, et accusamus eos inventore sunt debitis necessitatibus suscipit, ex nobis omnis quibusdam porro? Corrupti sint cum perspiciatis eos dolorem doloremque.</p>

                    </S.Description>

                </S.Left>

                <S.Profile>

                    <S.ProfileImage>
                        <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
                    </S.ProfileImage>

                    <S.ProfileDescription>

                        <h3>John Doe</h3>
                        <p>Descrição do usuário</p>

                    </S.ProfileDescription>

                    <S.ProfileContact>
                        <h3>Informações para contato</h3>
                        <p>(11) 91111-2222</p>
                        <p>teste@test.com</p>
                    </S.ProfileContact>

                    <S.ProfileFormContact>
                        <h3>Contate o anunciante</h3>
                        <form action="">
                            <Input type="text" placeholder="Nome:"/>
                            <Input type="text" name="" id="" placeholder="E-mail"/>
                            <TextArea cols="30" rows="10" placeholder="Mensagem" />
                            <Button>Enviar mensagem</Button>
                        </form>
                    </S.ProfileFormContact>


                </S.Profile>

                <S.Right>


                </S.Right>

            </S.Container>
        </Fragment>
    )
}

export default Imobi;