import React, { useState, useEffect, useRef } from 'react'
import { Animated, Image, TouchableWithoutFeedback } from "react-native"
import Layout from "../layouts"
import { Caption } from 'react-native-paper'
import useDimentions from '../utils/useDimentions'


export default (props: any) => {
  const dimentions = useDimentions()
  const [imageIndex, setImageIndex] = useState(0)
  const opacity = useRef(new Animated.Value(1)).current

  
  useEffect(() => {
    const timer = setTimeout(changeImage, 5500)
    return () => clearTimeout(timer)
  }, [imageIndex])

  const changeImage = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      advanceImageIndex()
      Animated.timing(opacity, {
        delay:100,
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start()
    })
  }

  const advanceImageIndex = () => {
    imageIndex === (images.length - 1) ? setImageIndex(0) : setImageIndex(imageIndex + 1)
  }

  console.log({dimentions}, "NEW ONES")

  return (
    <Layout {...props}>
      <TouchableWithoutFeedback onPress={changeImage} style={{ zIndex: -100 }}>
        <Animated.View style={{ opacity, position: "absolute", padding: 16, ...dimentions }}>
          <Image resizeMode="contain" style={{ flex: 1 }} source={require(`../assets/${images[imageIndex].path}`)} />
          <Caption style={{ marginTop: 8, color: "grey" }}>{images[imageIndex].title}</Caption>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Layout>
  )
}

const images: { path: string, title: string }[] = [
  { path: "RollercoasterFlood.jpeg", title: "Roller Coaster Flood" },
  { path: "AerialViewFracking.jpeg", title: "Aerial View Fracking" },
  { path: "StormDamageRollercoaster.jpeg", title: "Storm Damage - Roller Coaster" },
  { path: "StormDamageRisoPrint.jpeg", title: "Storm Damage - Riso Print" },
  { path: "IceStormDamagePlyons.jpeg", title: "Ice Storm Damage - Pylons" },
  { path: "0000000732862.jpeg", title: "" },
  { path: "0000000732860.jpeg", title: "" },
  { path: "0000000732858.jpeg", title: "" },
  { path: "0000000732854.jpeg", title: "" },
]

