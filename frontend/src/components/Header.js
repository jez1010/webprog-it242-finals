import logo from '../assets/website_logo.png';
import styles from './Header.module.css';

function Header() {
  return (
    <div className = {styles.header}>
      <img 
        className = {styles.logo}
        src = {logo} 
        alt = "logo"
      />
    </div>
  );
}

export default Header;