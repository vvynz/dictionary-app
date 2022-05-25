import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  const handleResponse = (res) => {
    setResults(res.data[0]);
  }

  // 
  const handlePexelsRes = (res) => {
    // console.log("PEXELS DATA", res.data.photos);
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
      {/* <FormControl sx={{ display: 'flex', flexDirection: 'row' }}> */}
      <Paper sx={{ p: '2px 4px', display: 'flex', width: '100%' }} elevation={3}>
        {/* <TextField sx={{ width: '93%' }} label="Search for a word" color="secondary" autoFocus={true} onChange={handleKeyword} /> */}
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Look up a word..." onChange={handleKeyword} />
        <IconButton color="secondary" size="large" onClick={search}>
          <SearchIcon fontSize="inherit" />
        </IconButton>
        {/* </FormControl> */}
      </Paper>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}