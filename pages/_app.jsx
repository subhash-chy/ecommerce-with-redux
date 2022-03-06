import { Mainlayout } from "../Layout";
import "../styles/globals.css";
import store from "../state_machine/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </Provider>
  );
}

export default MyApp;
