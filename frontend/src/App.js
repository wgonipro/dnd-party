import logo from './logo.svg';
import './App.css';
import Home from './components/home.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
