import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { GlobalStyle } from '../src/theme/GlobalStyle'
import Head from 'next/head'

//CSS Reset
// Remove essa parte do GlobalStyle daqui e cria ele dentro do nosso código fonte na pasta theme. Depois importa ele nesse arquivo
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `
// Remove essa parte do theme daqui e cria ele dentro do nosso código fonte. Depois importa ele nesse arquivo
// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      {/* Colocar o GlobalStyle dentro do ThemeProvider para ter acesso as propriedades do theme */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
