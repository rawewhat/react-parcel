import React from "react";
import { HomeScreen } from "./screens";
import { log } from "../services";

function App() {
  log("App render");
  return <HomeScreen />;
}

export default App;
