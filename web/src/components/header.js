import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>
      <div className={styles.headerLink}>
        <div className={styles.twitter}><a href="https://twitter.com/ry_whittingham" target="_blank">Twitter</a></div>
        <div className={styles.github}><a href="https://github.com/ryan-whittingham-v1" target="_blank">GitHub</a></div>
      </div>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
      {/*
      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
      */}
    </div>
  </div>
)

export default Header
