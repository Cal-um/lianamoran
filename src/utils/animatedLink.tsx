import React, { FC } from "react"
import TransitionLink from 'gatsby-plugin-transition-link'

interface Props {
    navigateTo: string
}
const AnimatedLink: FC<Props> = ({ children, navigateTo }) => (
    <TransitionLink exit={{ length: 0.2}}
        entry={{ length: 0.2, delay: 0.2 }} to={navigateTo} style={{ textDecoration: "none" }}>{children}</TransitionLink>
)


export default AnimatedLink