import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>Pokemons</nav>
    </header>
  );
};

export default Header;
