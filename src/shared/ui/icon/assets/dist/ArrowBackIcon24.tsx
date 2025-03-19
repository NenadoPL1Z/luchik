import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgArrowBackIcon24 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="arrow-back-icon-24_svg__a"
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
    <G mask="url(#arrow-back-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M7.675 13.138h10.912q.48 0 .808-.33.33-.33.33-.808a1.1 1.1 0 0 0-.33-.808 1.1 1.1 0 0 0-.808-.33H7.675l4.667-4.666q.342-.342.332-.802a1.13 1.13 0 0 0-.351-.801 1.18 1.18 0 0 0-.802-.327 1.07 1.07 0 0 0-.802.332l-6.6 6.6a1.05 1.05 0 0 0-.245.373 1.2 1.2 0 0 0-.077.429q0 .224.077.429.078.204.245.373l6.607 6.605q.323.324.789.323a1.14 1.14 0 0 0 1.15-1.134q0-.469-.342-.81z"
      />
    </G>
  </Svg>
);
export default SvgArrowBackIcon24;
