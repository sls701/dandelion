import * as React from "react"
import Svg, { Path } from "react-native-svg"

// creates svg for arrow icon
const ArrowSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26.877}
    height={17.918}
    {...props}
  >
    <Path
      fill="#fff"
      d="M26.877 7.466H5.719l5.345-5.36L8.959 0 0 8.959l8.959 8.959 2.105-2.105-5.345-5.36h21.158Z"
    />
  </Svg>
)
export default ArrowSVG


