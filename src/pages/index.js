import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Grid from '../components/Grid'
import Info from '../components/Info'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data: { site: { siteMetadata } } }) => {
  const { description, title } = siteMetadata
  return (
    <Layout>
      <SEO title="Home" />

      <h1
        css={css`
          @media (min-width: 600px) {
            font-size: 3rem;
          }
          margin-bottom: 0.5rem;
        `}
      >
        {title}
      </h1>
      <p
        css={css`
          @media (min-width: 600px) {
            font-size: 1.5rem;
          }
          color: rgb(96, 111, 123);
          margin-top: 0.75rem;
          margin-bottom: 3rem;
        `}
      >
        {description}
      </p>
      <Info />
      <Grid />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
