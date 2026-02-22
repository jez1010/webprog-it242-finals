import logo from '../assets/website_logo.png';
import './Header.css';

function Header() {
  return (
    <div>
      <img 
        src = {logo} 
        alt = "logo"
      />
    </div>
  );
}

export default Header;