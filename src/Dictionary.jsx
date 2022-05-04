import React, { useState } from "react";

export default function Dictionary() {


  const search = (e) => {
    e.preventDefault();
    alert(`Looking up...`);
  }

  return (
    <form className="text-center" onSubmit={search}>
      <input type="search" autoFocus={true} />
    </form>
  );
}