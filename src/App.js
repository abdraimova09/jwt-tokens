import './App.css';
import AuthContextProvider from './context/authContext';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
