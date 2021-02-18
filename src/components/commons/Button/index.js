import styled, { css } from 'styled-components'
//importar exatamente oque vc quer usar para não sobrecarregar a aplicação
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../foundation/Text'

const ButtonGhost = css`
    // recebemos de forma dinâmica a variant de color, por meio do uso da função get do lodash
    // onde passamos como primeiro parâmetro o objeto theme, e o segundo parâmetro recebe uma string para acessar oque queremos
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background-color: transparent;
`
const ButtonDefault = css`
    color: white;
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
     /* Acessando as props que são passadas para o component Button*/
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

    //aqui passamos para o TextStyleVariantsMap o estilo de texto que queremos para o nosso botão
    ${TextStyleVariantsMap.smallestException}

    &:hover,
    &:focus {
        opacity: .5;
    }

` 