import { MainBox } from "./components/main-box/main-box";
import { ApiContext } from "./context/ApiContext";

function App() {
  return (
    <ApiContext>
      <MainBox/>
    </ApiContext>
  );
}

export default App;
