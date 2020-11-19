import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => { 
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bharath-g-s-aLGiPJ4XRO4-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

    const imageData = data.desktop.childImageSharp.fluid

    return (
      <BackgroundImage
          fluid={imageData}
      >
        <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
            <div className={styles.siteInfo}>
              Ryan Whittingham © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
              {` `}
              <a href='https://www.gatsbyjs.org'>Gatsby</a>
            </div>
          </div>
        </footer>
      </BackgroundImage>
    )
}
export default Layout
