import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        *::before,
        *::after {
          box-sizing: border-box;
        }
        ::selection {
          color: #fff;
          background-color: #3490dc;
        }
        body {
          border: 0;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            "Helvetica Neue", sans-serif;
          font-size: 18px;
          color: #24242d;
          background: #f0f2fd;
        }
      `}
    />
    <div>
      <main
        css={css`
          max-width: 60rem;
          margin: 0 auto;
          padding: 2rem;
      `}
      >
        {children}
      </main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
