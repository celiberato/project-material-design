import React from 'react';
import { Box, Container, ThemeProvider }  from '@mui/system' 
import { themeOne, themeTwo } from './theme'
import AppClient from './components/Pages/AppClient';

function App() {
  return (
    <React.Fragment>
      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          marginTop: '2rem'
        }}
        maxWidth='sm'>

        <ThemeProvider theme={themeOne} >
          <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            p: 2,
            minWidth: 250
          }}>
          
            <Box
              sx={{
                color: 'text.secondary'
              }}>Visualizações</Box>
            <Box
              sx={{
                color: 'text.primary',
                fontSize:32,
                fontWeight:'bold'
              }}>30k</Box>
            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}>+15%</Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>vs. last week</Box>

          </Box>
        </ThemeProvider>

        <ThemeProvider theme={themeTwo}>
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 3,
            p: 2,
            minWidth: 250
          }}>
          
            <Box
              sx={{
                color: 'text.secondary'
              }}>Visualizações</Box>
            <Box
              sx={{
                color: 'text.primary',
                fontSize:32,
                fontWeight:'bold'
              }}>30k</Box>
            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}>+15%</Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>vs. last week</Box>

          </Box>
        </ThemeProvider> 
      </Container>

      <Container sx= {{width: '800px', marginTop: 10}}>
        <AppClient></AppClient>
      </Container>


    </React.Fragment>
);
}

export default App;
