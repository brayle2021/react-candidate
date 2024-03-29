
import React from 'react';
import { Container } from './Components/styles/Container.styled'
import Header from './Components/Header'
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Header />
      <Container>
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
