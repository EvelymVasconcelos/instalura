import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes, { func } from 'prop-types' //restringe o tipo de dado de vamos receber
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
    paragraph1: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${theme.typographyVariants.paragraph1.lineHeight};
      `}
    `, 
    smallestException: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.smallestException.fontSize};
        font-weight: ${theme.typographyVariants.smallestException.fontWeight};
        line-height: ${theme.typographyVariants.smallestException.lineHeight};
      `}
    `,
};

const TextBase = styled.span`
    //retorna o estilo de acordo com a variante que é passada para o objeto TextStyleVariantsMap
    ${(props) => TextStyleVariantsMap[props.variant]}
    
    //em vez de fazer uma função aqui, podemos fazer com que a propToStyle retorne uma função 
    //que vai receber o props e o styled-components vai exceutar pra gente
    /* ${function(props){
      return propToStyle('textAlign', props);
    }} */

    /* aqui passamos somente a chave da nossa props */
    ${propToStyle('textAlign')}
    
`;

export default function Text({ tag, variant, children, ...props }){
    return(
        <TextBase
            //como nosso TextBase está definido como span, passamos "as" que vai fazer com que a tag seja recebida como foi passada para o component 
            as={tag}
            variant={variant}
            // isso significa que o componente Text pode receber qualquer props que for enviada, ou seja, um spread de props
            {...props}
        >
            {children}
        </TextBase>

    );
}

// caso não seja passada as props, definimos essas como padrão
Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
  }; 