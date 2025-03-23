import { Touchable as TouchableDefault } from "./touchable";
import { TouchableIcon, TouchableLink } from "./components";

export const Touchable = Object.assign(TouchableDefault, {
  Icon: TouchableIcon,
  Link: TouchableLink,
});
