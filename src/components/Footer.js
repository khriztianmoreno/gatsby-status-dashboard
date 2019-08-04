/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Footer = () => (
  <footer
    css={css({
      textAlign: `center`,
      marginTop: `4rem`,
      color: `#525f74`,
      fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`,
      fontWeight: `400`,
    })}
  >
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
    <div css={css({ display: `flex`, justifyContent: `center`, alignItems: `center`, marginTop: `1.5rem` })}>
      <span role="img" css={css({fontSize: '50px'})} aria-label="Me">👨🏼‍💻</span>
      {` `}
      <a
        css={css({ color: `#525f74`, marginLeft: `1rem`, textDecoration: `none` })}
        href="https://khriztianmoreno.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by <strong>khriztianmoreno</strong> 🚀 with the ⚡️ Gatsby
      </a>
    </div>
  </footer>
)

export default Footer
