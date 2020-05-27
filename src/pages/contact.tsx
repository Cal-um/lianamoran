import React from 'react'
import Layout from '../layouts'
import { TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
import { Title } from 'react-native-paper'

export default (props: any) => (
  <Layout {...props}>
      <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <TouchableOpacity>
        <a style={{textDecoration:"none"}} href={"mailto:liana@lianamoran.com"}><Title style={{fontStyle:"italic"}}>LIANA@LIANAMORAN.COM</Title></a>
      </TouchableOpacity>
      </View>
   </Layout>
)

