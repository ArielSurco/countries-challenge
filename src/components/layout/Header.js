import React, { useEffect, useState } from 'react';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('dark-theme')
  );
  const toggleDarkTheme = () => setDarkTheme(!darkTheme);
  useEffect(() => {
    if (darkTheme) document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');
  }, [darkTheme]);
  return (
    <header className="header">
      <a href="/">Where in the world?</a>
      <button className="switch" type="button" onClick={toggleDarkTheme}>
        <i className="dark-mode-icon" /> Dark Mode
      </button>
    </header>
  );
};

export default Header;
