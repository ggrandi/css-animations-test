import React from "react";
import ReactDOM from "react-dom";
import ButtonSpin from "./ButtonSpin";
import Layout from "./components/Layout";
import ScaleText from "./ScaleText";

ReactDOM.render(
  <React.StrictMode>
    {[ScaleText, ButtonSpin].map((Comp) => (
      <Layout key={Comp.name}>
        <Comp />
      </Layout>
    ))}
  </React.StrictMode>,
  document.getElementById("root")
);
