import Counter from "./components/Counter";
import Auth from "./components/Auth";
import { store } from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Auth />
      <Counter />;
    </Provider>
  );
}

export default App;
