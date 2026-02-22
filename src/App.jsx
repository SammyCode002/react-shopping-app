// Samuel Dameg

import './App.css'
import items from './data/items';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <>
      <header>
        <h1>React Shopping App</h1>
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<OrderPage items={items} />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
