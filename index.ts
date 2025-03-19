import { AppRegistry, LogBox } from "react-native";
import { decode, encode } from "base-64";
import App from "./App";
import { name as appName } from "./app.json";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
