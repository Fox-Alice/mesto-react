import logo from '../images/header__logo.svg';
// import './App.css';

function Header() {
  return (    
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип проекта Место"
        />
      </header>      
  );
}

export default Header;
