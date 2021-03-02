import React, { useRef } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?name=${searchRef.current.value}`);
  };

  return (
    <main id="main_landing_page" className="position-relative">
      <div className="banner">
        <h1 style={{ textAlign: "center" }}>
          Welcome! <br /> Search a song or an artist you like! :)
        </h1>
        <Form
          className="d-flex flex-column justify-content-center"
          onSubmit={(e) => handleSearch(e)}
        >
          <FormControl
            type="text"
            placeholder="Search a song or an artist"
            className="mt-4"
            ref={searchRef}
          />
          <Button
            variant="outline-secondary"
            size="lg"
            className="ml-auto mr-auto mt-4"
            type="submit"
          >
            Search
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default LandingPage;
