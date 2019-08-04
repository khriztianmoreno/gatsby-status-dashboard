// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from 'prop-types'

import CircleCI from "../icons/circle-ci"
import GitHub from "../icons/github"

const Card = ({ site, isOnCircleCI, GH_POSTFIX }) => (
  <div key={site.netlify_id} sx={{ variant: `cards.dashboard` }}>
    <div data-name="card-top" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      <Styled.a href={site.url}>{site.name}</Styled.a>
      <div
        sx={{
          svg: { fill: `currentColor` },
          "a:last-of-type": {
            ml: 2,
          },
        }}
      >
        {isOnCircleCI && (
          <Styled.a aria-label={`View ${site.name} on CircleCI`} href={`https://circleci.com/gh/${GH_POSTFIX}`}>
            <CircleCI />
          </Styled.a>
        )}
        <Styled.a aria-label={`View ${site.name} source on GitHub`} href={site.build_settings.repo_url}>
          <GitHub />
        </Styled.a>
      </div>
    </div>
    <div sx={{ mt: 3, a: { mr: 2 } }}>
      <a href={`https://app.netlify.com/sites/${site.name}/deploys`}>
        <img
          alt={`Netlify Deploy status of ${site.name}`}
          src={`https://api.netlify.com/api/v1/badges/${site.netlify_id}/deploy-status`}
        />
      </a>
      {isOnCircleCI && (
        <img alt={`CircleCI status of ${site.name}`} src={`https://circleci.com/gh/${GH_POSTFIX}.svg?style=svg`} />
      )}
    </div>
  </div>
)

Card.propTypes = {
  site: PropTypes.shape({
    netlify_id: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    build_settings: PropTypes.shape({
      repo_url: PropTypes.string,
    }),
  }),
  isOnCircleCI: PropTypes.bool,
  GH_POSTFIX: PropTypes.string,
}

Card.defaultProps = {
  site: {},
  isOnCircleCI: false,
  GH_POSTFIX: '',
}

export default Card
