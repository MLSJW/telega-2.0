
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Login from './pages/Login.jsx';
import AppRouter from './pages/AppRouter';



const App = () => {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Login/>
        <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
