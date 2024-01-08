import React, { useState, useEffect } from "react";
import { Formio } from "@formio/react";
import FormioContrib from "@formio/contrib";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";
import "./App.css";
import useFetch from "use-http";
import Builder from "./components/Builder";

const App = () => {
  const [file, setFile] = useState();

  const { post } = useFetch("http://localhost:3600/api/v1/form");

  const uploadFile = async () => {
    const data = new Builder();
    data.append("file", file);
    if (file instanceof Builder) await post(data);
  };

  return (
    <div>
      <Navigation />
      <Routes basename={"/form-builder-td"}>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="components"
          element={
            <Components
              onChange={(e) => setFile(e.target.files[0])}
              onClick={uploadFile}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
