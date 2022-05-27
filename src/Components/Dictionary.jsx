import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const handleResponse = (res) => {
    setResults(res.data[0]);
  }

  // 
  const handlePexelsRes = (res) => {
    setPhotos(res.data.photos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  }

  // will make an axios call to the dictionary & pexels api
  const search = () => {
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

  const load = () => {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <Paper sx={{ p: '2px 4px', width: '100%' }} elevation={3}>
          <section className="form">
            <InputBase sx={{ ml: 2, flex: 1 }} defaultValue={props.defaultKeyword} onChange={handleKeyword} />
            <IconButton size="large" onClick={handleSubmit}>
              <SearchIcon fontSize="inherit" />
            </IconButton>
          </section>
          <div className="hint">Suggestions: twilight, pie, book, baguette, toast, autumn... </div>
        </Paper>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return ("Loading...");
  }
}