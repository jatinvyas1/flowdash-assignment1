import React, { useState } from "react";

import "./App.css";
import ContentElement from "./ContentElement";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column"}}
    >
      <ContentElement title="Title Text" />
      <ContentElement title="Secondary Text" />
      <ContentElement title="Skip Text" />
      <ContentElement title="Next Button" />
    </div>
  );
}

export default App;
