import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🛍️</span>
          StoreFront
        </Link>

        <div className="navbar-menu">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/catalog" className="nav-link">Catalog</Link>
          <Link to="/product-detail" className="nav-link">Detalles</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
