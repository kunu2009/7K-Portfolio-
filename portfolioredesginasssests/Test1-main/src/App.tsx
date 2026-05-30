/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import CollageTheme from './themes/Collage';
import ZineTheme from './themes/Zine';
import MangaTheme from './themes/Manga';
import EtherealTheme from './themes/Ethereal';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const [theme, setTheme] = useState('collage');

  const renderTheme = () => {
    switch (theme) {
      case 'manga':
        return <MangaTheme />;
      case 'ethereal':
        return <EtherealTheme />;
      case 'zine':
        return <ZineTheme />;
      case 'collage':
      default:
        return <CollageTheme />;
    }
  };

  return (
    <>
      {renderTheme()}
      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
    </>
  );
}

