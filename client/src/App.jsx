import { useState } from 'react'

import './App.css'
import { Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
      </ul>
    </nav> */}
       <div>
        <form>
          
          <label> Введите имя</label><br/>
          <input type="text" placeholder="name"/>
          <button>продать данные</button>
        </form>
        <button>
          регистрация
        </button>
        <button>
          вход
        </button>
       </div>
    </>
  )
}

export default App

