import './App.css';
import AuthContextProvider from './context/authContext';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
