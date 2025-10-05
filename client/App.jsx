
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import AppRouter from './pages/AppRouter';


const App = () => {
    const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    
    fetch('/')
      .then(res => res.json())
      .then(data => setApiMessage(data.message));
  }, []);
  return (
    
      // <BrowserRouter>
      //   <Navbar/>
      //   <AppRouter/>
      // </BrowserRouter>
       <div>
      <h1>Express + React Integration</h1>
      <p>Сообщение с сервера: {apiMessage}</p>
    </div>
      
  );
};

export default App;
