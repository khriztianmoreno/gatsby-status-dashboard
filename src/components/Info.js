// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Package from "../icons/package"
import Bug from "../icons/bug"
import useNetlify from "../hooks/use-netlify"
import useCircleCi from "../hooks/use-circle-ci"

const Item = ({ input, icon }) => (
  <Flex sx={{ mr: 4, mb: 4, alignItems: `center` }}>
    {icon}
    <div
      sx={{
        variant: `cards.label`,
      }}
    >
      {input}
    </div>
  </Flex>
)

const Info = () => {
  const { count: netlify } = useNetlify()
  const {
    me: { num_projects_followed: circleci },
  } = useCircleCi()

  return (
    <Flex
      sx={{
        flexDirection: [`column`, `column`, `row`],
        variant: `cards.icon`,
      }}
    >
      <Item input={`${netlify} Websites`} icon={<Package />} />
      <Item input={`${circleci} CircleCI Projects`} icon={<Bug />} />
    </Flex>
  )
}

export default Info
