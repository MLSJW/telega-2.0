
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import AppRouter from './pages/AppRouter';


const App = () => {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
