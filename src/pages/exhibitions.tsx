import React from 'react'
import Layout from '../layouts'
import { TouchableWithoutFeedback } from 'react-native'
import { Title } from 'react-native-paper'

export default (props: any) => (
  <Layout {...props}>
      <TouchableWithoutFeedback><Title>{props.location.pathname}</Title></TouchableWithoutFeedback>
   </Layout>
)

