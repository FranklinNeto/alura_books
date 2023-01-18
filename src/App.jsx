import Header from "./components/Header";
import Global from "./styles/global.js";
import { AppContainer } from "./styles/AppContainer";

function App() {
  return (
    <>
      <Global />
      <AppContainer>
        <Header />
      </AppContainer>
    </>
  );
}

export default App;
