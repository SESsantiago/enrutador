import './index.css';
import Navbar from './components/layout/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'center' }}>
        <p><strong>Dev Note:</strong> All pages are rendered sequentially below para que puedas ver su maquetación. Están listas para usarse en tus rutas de react-router-dom.</p>
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
