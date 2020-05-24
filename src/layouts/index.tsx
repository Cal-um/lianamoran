import React, { FC } from 'react'
import Header from "./header"
import { View } from 'react-native'
  
const Layout: FC = ({ children }) => {
  return (
      <View style={{flex: 1, flexDirection:"column"}}>
        <Header />
          {children}
      </View>
  )
}

export default Layout
