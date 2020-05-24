import React, { useState } from "react"
import { View, TouchableOpacity } from "react-native"
import { Headline, Text, Title } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { navigate } from "gatsby"

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleOpen = () => {
        setOpenMenu(!openMenu)
    }

    return <View style={{flexDirection:"row", alignItems:"center", padding:16}}>
        <TouchableOpacity style={{ marginRight: 8 }} onPress={toggleOpen}>
            <Icon name={openMenu ? "close" : "menu"} size={30} style={{justifyContent:"center"}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("/")}>
            <Headline style={{fontStyle: "italic"}} >LIANA MORAN</Headline>
        </TouchableOpacity>
    </View>
}

export default Header