import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgCloseIcon24 = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="close-icon-24_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}>
      <Path fill={props.color || props.fill || "currentColor"} d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#close-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="m12 13.591-4.804 4.805a1.08 1.08 0 0 1-.796.316A1.08 1.08 0 0 1 5.287 17.6q0-.479.317-.796L10.41 12 5.604 7.196a1.08 1.08 0 0 1-.317-.796A1.08 1.08 0 0 1 6.4 5.288q.479 0 .796.316L12 10.41l4.804-4.805a1.08 1.08 0 0 1 .796-.316A1.08 1.08 0 0 1 18.712 6.4q0 .479-.316.796L13.59 12l4.805 4.804q.316.318.316.796a1.08 1.08 0 0 1-1.112 1.112 1.08 1.08 0 0 1-.796-.316z"
      />
    </G>
  </Svg>
);
export default SvgCloseIcon24;
