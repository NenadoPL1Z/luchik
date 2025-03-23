import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgLightningIcon24 = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="lightning-icon-24_svg__a"
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
    <G mask="url(#lightning-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M9 15H5.9q-.6 0-.888-.537-.287-.538.063-1.038l7.475-10.75q.25-.35.65-.487.4-.138.825.012t.625.525.15.8L14 10h3.875q.65 0 .913.575.261.575-.163 1.075L10.4 21.5a1.27 1.27 0 0 1-.675.425 1.13 1.13 0 0 1-.775-.075 1.3 1.3 0 0 1-.588-.538 1.23 1.23 0 0 1-.162-.787z"
      />
    </G>
  </Svg>
);
export default SvgLightningIcon24;
