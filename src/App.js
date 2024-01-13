import { Fragment } from "react";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home.component";


const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
