import React, { useState, FC, useRef, Fragment } from "react"
import { View, TouchableOpacity, Animated } from "react-native"
import { Headline, Subheading } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { navigate } from "gatsby"
import useDimentions from "../utils/useDimentions"
import AnimatedLink from "../utils/animatedLink"
interface Props {
    compact: boolean
}

const Header: FC<Props> = ({ compact, children }) => {

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
        <View style={{ flexDirection: "column", flex:1 }}>
            {openMenu ? <Animated.View style={{ backgroundColor: "white", position: "absolute", ...dimentions, opacity, justifyContent: "center", alignContent: "center", zIndex: 99 }}>
                <View style={{ padding: 16, width: "100%", maxWidth: "700", flexDirection: "row", justifyContent: "space-around", alignContent: "center", flexWrap: "wrap", marginTop: "auto", marginBottom: "auto" }}>
                    <TouchableOpacity style={{ padding: 16 }}>
                        <AnimatedLink navigateTo={"bio"}>
                            <Headline style={{ fontStyle: "italic", fontSize: 30, letterSpacing: 5 }}>BIO</Headline>
                        </AnimatedLink>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 16 }}>
                        <AnimatedLink navigateTo={"exhibitions"}>
                            <Headline style={{ fontStyle: "italic", fontSize: 30, letterSpacing: 5 }}>EXHIBITIONS</Headline>
                        </AnimatedLink>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 16 }}>
                        <AnimatedLink navigateTo={"paintings"}>
                            <Headline style={{ fontStyle: "italic", fontSize: 30, letterSpacing: 5 }}>PAINTINGS</Headline>
                        </AnimatedLink>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 16, paddingRight: 16 }}>
                        <AnimatedLink navigateTo={"drawings"}>
                            <Headline style={{ fontStyle: "italic", fontSize: 30, letterSpacing: 5 }}>DRAWINGS</Headline>
                        </AnimatedLink>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 16, paddingRight: 16 }}>
                        <AnimatedLink navigateTo={"contact"}>
                            <Headline style={{ fontStyle: "italic", fontSize: 30, letterSpacing: 5 }}>CONTACT</Headline>
                        </AnimatedLink>
                    </TouchableOpacity>
                </View>
                <Footer />
            </Animated.View> : null}
            <View style={{ flexDirection: "row", alignItems: "center", padding: 16, zIndex: 100 }}>
                <TouchableOpacity style={{ marginRight: 8 }} onPress={toggleOpen}>
                    <Icon name={openButton ? "close" : "menu"} size={30} style={{ justifyContent: "center" }} />
                </TouchableOpacity>
                {!compact || openButton ? <TouchableOpacity>
                    <AnimatedLink navigateTo={"/"}>
                        <Headline style={{ zIndex: 101, fontStyle: "italic", fontSize: 25, letterSpacing: 5 }} >LIANA MORAN</Headline>
                    </AnimatedLink>
                </TouchableOpacity> : null}
            </View>
            {children}
        </View>
    )
}

export const Footer = () => <Subheading style={{ color: "gray", alignSelf: "center", fontSize: 8 }}>{footerCopy}</Subheading>
const footerCopy = "Copyright © 2020 Liana Moran. All rights reserved."

export default Header