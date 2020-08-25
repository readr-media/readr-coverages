import React, { useState, useEffect } from 'react';
import './Header.sass';

function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  const URL = 'https://www.readr.tw/project/when-extreme-weather-hits-the-fruit-tree'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > scrollY) ? setShowHeader(false) : setShowHeader(true)
      setScrollY(window.scrollY)
    })
  })

  return (
    <header className={`header ${showHeader ? '' : 'hide'}`}>
      <a
        className="logo"
        href="https://www.readr.tw/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require('../images/readr-logo.png')} alt="讀＋READr"/>
      </a>
      <a
        className="share facebook"
        href={`https://www.facebook.com/share.php?u=${URL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require('../images/facebook.png')} alt="分享至 Facebook"/>
      </a>
      <a
        className="share line"
        href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(URL)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require('../images/line.png')} alt="分享至 Line" />
      </a>
    </header>
  )
}

export default Header;