import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgMenuIcon24 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="menu-icon-24_svg__a"
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
    <G mask="url(#menu-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M3.934 18.293q-.478 0-.808-.33-.33-.328-.33-.808 0-.478.33-.808t.808-.329h16.132q.478 0 .808.33.33.328.33.808 0 .478-.33.808t-.808.329zm0-5.155a1.1 1.1 0 0 1-.808-.33 1.1 1.1 0 0 1-.33-.808q0-.48.33-.808.33-.33.808-.33h16.132q.478 0 .808.33t.33.808-.33.808a1.1 1.1 0 0 1-.808.33zm0-5.156a1.1 1.1 0 0 1-.808-.33 1.1 1.1 0 0 1-.33-.808q0-.478.33-.808t.808-.329h16.132q.478 0 .808.33.33.328.33.808 0 .478-.33.808a1.1 1.1 0 0 1-.808.329z"
      />
    </G>
  </Svg>
);
export default SvgMenuIcon24;
