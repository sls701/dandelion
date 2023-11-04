import * as React from "react"
import Svg, { Text, TSpan, Path } from "react-native-svg"
const OrDivider = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={303} height={24} {...props}>
    <Text
      fill="#4f4f4f"
      fontFamily="SegoeUI-Semibold, Segoe UI"
      fontSize={18}
      fontWeight={600}
      transform="translate(151.5 19)"
    >
      <TSpan x={-8.706} y={0}>
        {"or"}
      </TSpan>
    </Text>
    <Path fill="none" stroke="#f9cd54" d="M0 14h134" data-name="Line 167" />
    <Path fill="none" stroke="#f9cd54" d="M169 14h134" data-name="Line 168" />
  </Svg>
)
export default OrDivider
