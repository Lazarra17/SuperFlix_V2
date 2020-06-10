import React from "react";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";
import "./services/font-awesome";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
