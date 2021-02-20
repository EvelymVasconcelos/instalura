import { breakpointsMedia } from "./breakpointsMedia";
import { css } from 'styled-components';

//o propName é a chave do estilo, exemplo textAlign 
export function propToStyle(propName){
    // e a props é o valor dessa chave, exemplo center
    return function(props){
      const propValue = props[propName]
      console.log('porpValue', propValue)
  
      if(typeof propValue === 'string'){
        //podemos fazer nosso retorno com a sintxe de objetos, que faria a mesma coisa da sintaxe de string
        return {
          //textAlign: props.textAlign, poderia ser passada dessa forma caso fosse sintaxe de string
          [propName]: props[propName]
        }
  
      }
  
      if(typeof propValue === 'object'){ 
        return breakpointsMedia({
            xs: {
                [propName]: propValue.xs
            },
            sm: {
                [propName]: propValue.sm
            },
            md: {
                [propName]: propValue.md
            },
            lg: {
                [propName]: propValue.lg
            },
            xl: {
                [propName]: propValue.xl
            }
        })
  
      }
    }
  }