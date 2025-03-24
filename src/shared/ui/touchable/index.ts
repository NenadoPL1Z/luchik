import { Touchable as TouchableDefault } from "./touchable";
import { TouchableIcon, TouchablePush } from "./components";

export const Touchable = Object.assign(TouchableDefault, {
  Icon: TouchableIcon,
  Push: TouchablePush,
});
