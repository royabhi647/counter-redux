import "./App.css";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
