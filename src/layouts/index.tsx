import React, { FC, useRef, useEffect, useState } from 'react'
import HeaderFooter from "./HeaderFooter"
import { PageProps } from 'gatsby'
import { View, Animated } from 'react-native'
import useDimentions from '../utils/useDimentions'
import { TransitionState } from "gatsby-plugin-transition-link"
const Layout: FC<PageProps> = ({ children, location }) => {

  const dimensions = useDimentions()
  const opacity = useRef(new Animated.Value(0)).current
  const [mount, setMount] = useState("entered")


  useEffect(() => {
    if (mount === "entered" || mount === "entering") {
      animateIn()
    } else {
      animateOut()
    }

  }, [mount])

  const animateIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false
    }).start()
  }

  const animateOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false
    }).start()
  }

  const isCompact = location.pathname === "/" || location.pathname === "/lianamoran"

  return (
    <TransitionState>
      {(transition: any) => {
        setMount(transition.transitionStatus)
        return (
          <Animated.View style={{ opacity, minHeight: dimensions.height, minWidth: dimensions.width }}>
            <HeaderFooter compact={isCompact}>
              {children}
            </HeaderFooter>
          </Animated.View>)
      }}
    </TransitionState>
  )
}

export default Layout
