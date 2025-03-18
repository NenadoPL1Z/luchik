import Reactotron from "reactotron-react-native";

Reactotron.setAsyncStorageHandler()
  .configure()
  .useReactNative({
    devTools: true,
    networking: { ignoreUrls: /symbolicate/ },
    editor: false,
    overlay: false,
  })
  .connect();
