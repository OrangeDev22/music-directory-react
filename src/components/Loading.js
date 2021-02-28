import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="w-100 h-100">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loading;
