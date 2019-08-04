import { graphql, useStaticQuery } from 'gatsby'

const useCircleCi = () => {
  const data = useStaticQuery(graphql`
    query {
      me: circleCiMe {
        num_projects_followed
      }
      circleci: allCircleCiProjects {
        nodes {
          vcs_url
        }
      }
    }
  `)

  return {
    me: data.me,
    circleci: data.circleci.nodes,
  }
}

export default useCircleCi
