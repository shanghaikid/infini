import React, { FC } from "react";
import Page from "./Page";
import "./style.css";

console.log('app');
const App: FC = () => {
  return (
    <div>
      <h1>this is a app</h1>
      <Page></Page>
    </div>
  );
};

export default App;
