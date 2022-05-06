import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import { AppRouter } from './Routes/AppRouter';

function App() {
  return (
    <Provider store={ store } >
      <AppRouter />
    </Provider>
  )
}

export default App;
