require("typeface-roboto")
const Paper = require("react-native-paper")
const React = require("react")

exports.wrapRootElement = ({ element }) => {
    return (
        <React.Fragment>
            <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
            <Paper.Provider >
             {element}
            </Paper.Provider>
        </React.Fragment>
    )
  }