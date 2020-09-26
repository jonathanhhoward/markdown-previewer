import React from "react";
import Card from "react-bootstrap/Card";

function Editor ({ onChange, text }) {
  return (
    <Card bg="dark" className="Card" id="Editor">
      <Card.Header className="bg-dark text-info">Editor</Card.Header>
      <Card.Body
        as="textarea"
        className="bg-light overflow-auto"
        id="editor"
        onChange={onChange}
        value={text}
      />
    </Card>
  );
}

export default Editor;
