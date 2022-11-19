'use client';
import React, { useEffect, useState } from 'react'

import useDarkMode from './DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = (props) => {
  // TODO: Dark mode has been disabled
  return;
  const darkMode = useDarkMode(false);
  const [activeTheme, setActiveTheme] = useState(false);
  useEffect(() => setActiveTheme(false), []);

  return (
    <div {...props}>
      <button type="button" onClick={darkMode.toggle} title={"Switch to " + (activeTheme ? "Light Mode" : "Dark Mode")}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
    </div>
  );
};

export default ThemeSwitch;