import { useEffect, useState } from "react"
import { Dimensions }from "react-native"

export default () => {
    const [dimentions, setDimentions] = useState({height: Dimensions.get("window").height, width: Dimensions.get("window").width})
    useEffect(() => {
        Dimensions.addEventListener("change", (e) => setDimentions({height:e.window.height, width:e.window.width}))
        return () => Dimensions.removeEventListener("change", (e) => setDimentions({height:e.window.height, width:e.window.width}))
      }, [])
    return dimentions
}

