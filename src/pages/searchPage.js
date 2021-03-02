import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery();
  const search = query.get("name");
  return (
    <div>
      <h1>Hello world {search}</h1>
    </div>
  );
}

export default SearchPage;
