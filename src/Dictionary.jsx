import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState({});

  const handleResponse = (res) => {
    console.log("RESPONSE", res.data);
  }

  // on submit event, will make an axios call to the api
  const search = (e) => {
    e.preventDefault();
    // alert(`Looking up ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log("APIURL", apiUrl);

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
    <form className="text-center" onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeyword} />
    </form>
  );
}