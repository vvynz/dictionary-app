import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  const search = (e) => {
    e.preventDefault();
    // alert(`Looking up ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log("APIURL", apiUrl);


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