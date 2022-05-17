import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const handleResponse = (res) => {
    setResults(res.data[0]);
  }

  // 
  const handlePexelsRes = (res) => {
    console.log("PEXELS DATA", res.data.photos);
    setPhotos(res.data.photos);
  }

  // on submit event, will make an axios call to the api
  const search = (e) => {
    e.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl)
      .then(handleResponse)
      // if word doesn't exist, displays error message
      .catch((err) => console.log(err.response.data.message));

    // api call for Pexels
    let pexelsApiKey = "563492ad6f91700001000001c1aaf75420014625859b93064f2f6531";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    // make the api call with the authorization headers
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsRes);

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
      <Photos photos={photos} />
    </div>
  );
}