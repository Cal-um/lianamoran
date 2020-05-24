import React from "react"
import { View, TouchableOpacity } from "react-native"
import { Headline } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Header = () => {
    return <View style={{flexDirection:"row", alignItems:"center", padding:16}}>
        <TouchableOpacity style={{ marginRight: 8 }}>
            <Icon name="menu" size={30} style={{justifyContent:"center"}}/>
        </TouchableOpacity>
        <Headline>LIANA MORAN</Headline>
    </View>
}

export default Header