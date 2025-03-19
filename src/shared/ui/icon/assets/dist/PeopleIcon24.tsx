import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgPeopleIcon24 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="people-icon-24_svg__a"
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
    <G mask="url(#people-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.825 0 1.412.587Q14 3.176 14 4q0 .824-.588 1.412A1.93 1.93 0 0 1 12 6M9 21V9a43 43 0 0 1-2.475-.275 29 29 0 0 1-2.45-.45 1.14 1.14 0 0 1-.688-.475.9.9 0 0 1-.137-.8.98.98 0 0 1 .525-.625q.4-.2.85-.1 1.751.375 3.637.55Q10.151 7 12 7q1.85 0 3.738-.175a31 31 0 0 0 3.637-.55q.45-.1.85.1A.98.98 0 0 1 20.75 7a.9.9 0 0 1-.137.8q-.263.375-.688.475-1.2.275-2.45.45T15 9v12q0 .424-.287.712A.97.97 0 0 1 14 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 13 21v-5h-2v5q0 .424-.287.712A.97.97 0 0 1 10 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 9 21"
      />
    </G>
  </Svg>
);
export default SvgPeopleIcon24;
