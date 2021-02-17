import styled from 'styled-components'
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu'

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
      <Footer />
    </div>

  ); 
}
