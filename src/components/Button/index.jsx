import React from 'react'
import * as S from './styles'


const Button = ( {props, children} ) => {
    return (
        <S.Container {...props}>
            {children}
        </S.Container>
    );
}

export default Button;