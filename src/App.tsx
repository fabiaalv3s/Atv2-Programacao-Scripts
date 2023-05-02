import { Provider } from "./contexts"
import "@fontsource/roboto"; 
import Rotas from "./routes";

function App() {

  return (
    <Provider>
      <Rotas/>
    </Provider>
  );
}

export default App;