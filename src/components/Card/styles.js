import styled from "styled-components";


export const Container = styled.div`
    width: 24%;
    margin-botton: 12px;
    background-color: var(--white);
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
`

export const Img = styled.div`
    width: 100%;
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export const Description = styled.div`
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--secundary);
    }
    h4{
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
`

export const Items = styled.div`
    display: flex;
    justify-content: flex-direction;
    flex-direction: column;
    span{
        margin-bottom: 10 px;
    }
`