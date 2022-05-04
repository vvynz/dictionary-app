import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  const search = (e) => {
    e.preventDefault();
    alert(`Looking up ${keyword}...`);
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