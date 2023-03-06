import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import User from "./components/User";

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`)
    const json = await response.json()
    return json.items || [];
  } catch (e) {
    throw new Error(e)
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div>
      <h2>Search GitHub User</h2>
      <Form />
      <h3>Results</h3>
      <div id="results">
        <div>
          {results.map((user) => (
            <User />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
