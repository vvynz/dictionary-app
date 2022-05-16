import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  const handleResponse = (res) => {
    setResults(res.data[0]);
  }

  // on submit event, will make an axios call to the api
  const search = (e) => {
    e.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl)
      .then(handleResponse)
      // if word doesn't exist, displays error message
      .catch((err) => console.log(err.response.data.message));
  }

  // updates the setKeyword state with user's input
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <form className="text-center" onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
      </form>
      <Results results={results} />
    </div>
  );
}