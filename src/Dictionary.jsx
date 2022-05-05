import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  const handleResponse = (res) => {
    console.log("RESPONSE", res);
  }

  const search = (e) => {
    e.preventDefault();
    // alert(`Looking up ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log("APIURL", apiUrl);

    axios.get(apiUrl).then(handleResponse);
  }

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <form className="text-center" onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeyword} />
    </form>
  );
}