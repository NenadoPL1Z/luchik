import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgLandmarkIcon24 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask
      id="landmark-icon-24_svg__a"
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
    <G mask="url(#landmark-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M12 22q-2.65 0-4.325-.837Q6 20.324 6 19q0-.475.213-.875a2.5 2.5 0 0 1 .637-.75q.35-.25.763-.2a.92.92 0 0 1 .662.4q.25.35.188.762A.96.96 0 0 1 8.05 19q.325.4 1.5.7T12 20t2.45-.3 1.5-.7a.96.96 0 0 1-.412-.663q-.063-.412.187-.762a.92.92 0 0 1 .662-.4q.414-.05.763.2.425.35.638.75.212.4.212.875 0 1.325-1.675 2.163T12 22m0-3.475q-.3 0-.6-.1a1.8 1.8 0 0 1-.55-.3q-2.95-2.35-4.4-4.587Q5 11.3 5 9.15q0-1.774.638-3.113Q6.275 4.7 7.275 3.8a6.8 6.8 0 0 1 2.25-1.35A7.3 7.3 0 0 1 12 2q1.226 0 2.475.45t2.25 1.35q1 .9 1.637 2.238.639 1.337.638 3.112 0 2.15-1.45 4.387-1.45 2.238-4.4 4.588-.25.2-.55.3t-.6.1M12 11q.825 0 1.412-.588Q14 9.826 14 9t-.588-1.412A1.93 1.93 0 0 0 12 7q-.825 0-1.412.588A1.93 1.93 0 0 0 10 9q0 .825.588 1.412Q11.175 11 12 11"
      />
    </G>
  </Svg>
);
export default SvgLandmarkIcon24;
