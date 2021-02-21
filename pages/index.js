import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';
import styled from 'styled-components'
import { Button } from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu'
import { Grid } from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// function Title(props){
//   return(
//     <h1>{props.children}</h1>
//   );
// }

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            // significa que vai pular uma coluna do grid no desktop
            offset={{ xs: 0, md:1 }}
            // significa que no mobile vai ocupar 12 colunas e destop 5 colunas do grid
            value={{ xs: 12, md: 5}}
          >

            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign='center'
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
                // para esse estilo funcionar é preciso fazer com que o component Text receba essa props
                // style={{
                //   textAlign: 'center',
                // }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>
              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
              >
                Cadastrar
              </Button>
            </div>

          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6}}>
            <img style={{ display: 'block', margin: 'auto' }} src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"/>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </div>
  ); 
}
