import React from "react";
import "./App.css";

import Launches from "./components/Launches";

import logo from "./logo.png";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const _client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={_client}>
      <div className="Container">
        <img src={logo} alt="SpaceX Logo" height={180} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
