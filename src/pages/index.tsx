import React from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import { navigate } from "gatsby"
import Layout from "../layouts"


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default () => {
    return (
      <Layout>

      <View style={{ backgroundColor: "blue"}}>
        <TouchableOpacity onPress={() => navigate("page-2")}>
        <Text>derp</Text>
        </TouchableOpacity>
      </View>
      </Layout>
    )
  
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
