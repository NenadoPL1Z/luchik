import Svg, { Mask, Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SvgWorldIcon24 = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <Mask
      id="world-icon-24_svg__a"
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
    <G mask="url(#world-icon-24_svg__a)">
      <Path
        fill={props.color || props.fill || "currentColor"}
        d="M12 22.203a9.8 9.8 0 0 1-3.953-.805 10.4 10.4 0 0 1-3.25-2.195 10.4 10.4 0 0 1-2.195-3.25A9.8 9.8 0 0 1 1.797 12q0-2.11.805-3.962a10.4 10.4 0 0 1 2.195-3.241 10.4 10.4 0 0 1 3.25-2.195A9.8 9.8 0 0 1 12 1.797q2.11 0 3.962.805a10.4 10.4 0 0 1 3.241 2.195 10.4 10.4 0 0 1 2.195 3.24A9.8 9.8 0 0 1 22.203 12a9.8 9.8 0 0 1-.805 3.953 10.4 10.4 0 0 1-2.195 3.25 10.4 10.4 0 0 1-3.24 2.195 9.8 9.8 0 0 1-3.963.805m-.012-2.319q.627-.888 1.101-1.86.475-.971.775-2.06H10.13q.3 1.089.766 2.06t1.092 1.86m-2.57-.4a11.3 11.3 0 0 1-.787-1.7q-.326-.887-.551-1.82H5.166a8.1 8.1 0 0 0 1.785 2.157 7.1 7.1 0 0 0 2.467 1.363m5.146 0a7.2 7.2 0 0 0 2.473-1.363 8 8 0 0 0 1.791-2.157h-2.914a16 16 0 0 1-.556 1.82 12 12 0 0 1-.794 1.7M4.322 13.982H7.68q-.075-.5-.112-.981A13 13 0 0 1 7.53 12a13 13 0 0 1 .15-1.982H4.322q-.125.494-.188.975A8 8 0 0 0 4.072 12a7.8 7.8 0 0 0 .25 1.982m5.358 0h4.634q.075-.5.107-.981.03-.482.031-1.001 0-.524-.031-1.004a12 12 0 0 0-.107-.978H9.68q-.075.5-.112.978-.038.48-.038 1.004a13 13 0 0 0 .15 1.982m6.634 0h3.352q.126-.494.188-.978.062-.485.062-1.004a7.8 7.8 0 0 0-.25-1.982h-3.352q.068.5.104.978.034.48.034 1.004a14 14 0 0 1-.138 1.982m-.4-5.952h2.914a8 8 0 0 0-1.791-2.154 7.2 7.2 0 0 0-2.473-1.36q.462.813.793 1.697.333.885.557 1.817m-5.784 0h3.734a11.5 11.5 0 0 0-.769-2.057 13 13 0 0 0-1.107-1.857 13 13 0 0 0-1.092 1.857 12 12 0 0 0-.766 2.057m-4.964 0H8.08q.225-.932.55-1.817t.788-1.697a7.1 7.1 0 0 0-2.467 1.36A8 8 0 0 0 5.166 8.03"
      />
    </G>
  </Svg>
);
export default SvgWorldIcon24;
