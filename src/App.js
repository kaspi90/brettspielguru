import './App.css';
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Selectgame from './Selectgame';
import DataTable from './DataTable';
import Kartenhüllen from './Kartenhüllen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gameContext } from './GameContext';

const theme = createTheme({
  palette: {
    primary: {
      light: '#760019',
      main: '#aa0124',
      dark: '#bb334f',
    },
    secondary: {
      light: '#ab003c',
      main: '#f50057',
      dark: '#f73378',
    },
  },
});

const Bundles = () => (
  <div style={{ padding: 20 }}>
    <Selectgame />
    <br />
    <DataTable />
  </div>
);

function App() {
  const [game, setGame] = React.useState('');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <gameContext.Provider value={[game, setGame]}>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Bundles />} />
            <Route path="/kartenhuellen" element={<Kartenhüllen />} />
          </Routes>
        </gameContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
