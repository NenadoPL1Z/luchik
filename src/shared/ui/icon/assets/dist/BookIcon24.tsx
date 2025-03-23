import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgBookIcon24 = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="book-icon-24_svg__a"
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
    <G mask="url(#book-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M6.75 22q-1.125 0-1.937-.762A2.49 2.49 0 0 1 4 19.35V5.4q0-.95.588-1.7.587-.75 1.537-.95l7.5-1.475a1.85 1.85 0 0 1 1.65.4q.725.6.725 1.55V15.15q0 .725-.45 1.287-.45.563-1.15.688L6.525 18.7a.65.65 0 0 0-.375.238.65.65 0 0 0-.15.412.58.58 0 0 0 .225.462Q6.45 20 6.75 20H18V5q0-.424.288-.712A.97.97 0 0 1 19 4q.424 0 .712.288Q20 4.575 20 5v15q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm1.45-5.65a1 1 0 0 0 .575-.35.96.96 0 0 0 .225-.625V5.45a.96.96 0 0 0-.363-.775q-.361-.3-.837-.2a1 1 0 0 0-.575.35A.96.96 0 0 0 7 5.45v9.925q0 .475.362.775.363.3.838.2"
      />
    </G>
  </Svg>
);
export default SvgBookIcon24;
