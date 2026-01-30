import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { seedItems } from './services/localStorageService';
import itemsData from './data/itemsData';
import './styles/custom.css';

function App() {
  useEffect(() => {
    seedItems(itemsData);
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
