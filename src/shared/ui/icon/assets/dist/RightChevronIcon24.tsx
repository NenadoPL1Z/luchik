import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgRightChevronIcon24 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="right-chevron-icon-24_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}>
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M0 0h24v24H0z"
      />
    </Mask>
    <G mask="url(#right-chevron-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M12.409 12 8.604 8.196a1.08 1.08 0 0 1-.317-.796A1.08 1.08 0 0 1 9.4 6.288q.479 0 .796.316l4.594 4.594q.168.169.245.373.078.205.078.429t-.078.429a1.05 1.05 0 0 1-.245.373l-4.594 4.594a1.08 1.08 0 0 1-.796.316A1.08 1.08 0 0 1 8.287 16.6q0-.479.317-.796z"
      />
    </G>
  </Svg>
);
export default SvgRightChevronIcon24;
