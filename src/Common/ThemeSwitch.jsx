import React from 'react'

import useDarkMode from './DarkMode';

const ThemeSwitch = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="themeSwitch">
      <button type="button" onClick={darkMode.toggle} title={"Switch to " + (darkMode.value ? "Light Mode" : "Dark Mode")}>
        <i className="fas fa-adjust" />
      </button>
    </div>
  );
};

export default ThemeSwitch;