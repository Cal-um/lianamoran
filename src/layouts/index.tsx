import React, { FC } from 'react'
import HeaderFooter from "./HeaderFooter"
import { PageProps } from 'gatsby'
 
const Layout: FC<PageProps> = ({ children, location }) => {
  return (
        <HeaderFooter compact={location.pathname === "/"}>
            { children } 
        </HeaderFooter>
  )
}

export default Layout
