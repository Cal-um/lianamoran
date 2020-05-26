import React, { useState, FC, useRef, Fragment } from "react"
import { View, TouchableOpacity, Animated } from "react-native"
import { Headline, Subheading } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { navigate } from "gatsby"
import useDimentions from "../utils/useDimentions"

interface Props {
    compact: boolean
}

const Header:FC<Props> = ({ compact, children }) => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openButton, setOpenButton] = useState(false)
    
    const opacity = useRef(new Animated.Value(0)).current
    const dimentions = useDimentions()

    const toggleOpen = () => {  
        if (openMenu) {
            setOpenButton(false)
            Animated.timing(opacity, {
                toValue: 0,
                useNativeDriver: false,
                duration: 200
            }).start(() => {
                setOpenMenu(false)
            })
        } else {
            setOpenButton(true)
            setOpenMenu(true)
            Animated.timing(opacity, {
                toValue: 0.9,
                useNativeDriver: false,
                duration: 200
            }).start()
        }
    }

    return (
        <Fragment>
            {/* // <View style={{ flexDirection:"column", width:"100%", height:"100%"}}> */}
                {openMenu ? <Animated.View style={{ backgroundColor: "white", position:"absolute", ...dimentions, opacity, justifyContent:"center", alignContent:"center"}}> 
                    <View style={{ padding:16, width: "100%", maxWidth:"700", flexDirection:"row", justifyContent:"space-around", alignContent:"center", flexWrap:"wrap", marginTop:"auto", marginBottom:"auto"}}>
                        <TouchableOpacity style={{padding: 16}} onPress={() => navigate("bio")}>
                            <Headline style={{fontStyle:"italic", fontSize:30, letterSpacing: 5}}>BIO</Headline>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16}} onPress={() => navigate("exhibitions")}>
                            <Headline style={{fontStyle:"italic", fontSize:30, letterSpacing: 5}}>EXHIBITIONS</Headline>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16}} onPress={() => navigate("paintings")}>
                            <Headline style={{fontStyle:"italic", fontSize:30, letterSpacing: 5}}>PAINTINGS</Headline>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16, paddingRight:16}} onPress={() => navigate("drawings")}>
                            <Headline style={{fontStyle:"italic", fontSize:30, letterSpacing: 5}}>DRAWINGS</Headline>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16, paddingRight:16}} onPress={() => navigate("contact")}>
                            <Headline style={{fontStyle:"italic", fontSize:30, letterSpacing: 5}}>CONTACT</Headline>
                        </TouchableOpacity>
                    </View>
                    <Footer/>
                </Animated.View> : null}
                <View style={{flexDirection:"row", alignItems:"center", padding:16}}>
                    <TouchableOpacity style={{ marginRight: 8 }} onPress={toggleOpen}>
                        <Icon name={openButton ? "close" : "menu"} size={30} style={{justifyContent:"center"}}/>
                    </TouchableOpacity>
                { !compact || openButton ? <TouchableOpacity onPress={() => navigate("/")}>
                        <Headline style={{ zIndex: 101, fontStyle: "italic", fontSize:25, letterSpacing: 5}} >LIANA MORAN</Headline>
                    </TouchableOpacity>: null}
                </View>
                { children }  
                </Fragment>    )             
             {/* </View> */}
           
    
}

export const Footer = () =>  <Subheading style={{color:"gray", alignSelf:"center", fontSize:8}}>{footerCopy}</Subheading>
const footerCopy = "Copyright © 2020 Liana Moran. All rights reserved."

export default Header