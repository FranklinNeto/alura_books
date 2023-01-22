import LatestReleases from "./components/LatestReleases";
import Header from "./components/Header";
import Search from "./components/Search";

import { AppContainer } from "./styles/AppContainer";
import { useState } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState([]);
  return (
    <AppContainer>
      <Header />
      <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <LatestReleases />
    </AppContainer>
  );
}

export default App;
