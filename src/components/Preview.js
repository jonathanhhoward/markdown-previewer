import React from 'react'
import Card from 'react-bootstrap/Card'
import marked from 'marked'
import DOMPurify from 'dompurify'

function Preview ({ text }) {
  const DANGEROUS = marked(text, { breaks: true })
  const SAFE = DOMPurify.sanitize(DANGEROUS)
  return (
    <Card bg="dark" className="Card" id="Preview">
      <Card.Header className="bg-dark text-info">Preview</Card.Header>
      <Card.Body
        className="bg-light overflow-auto"
        id="preview"
        dangerouslySetInnerHTML={{ __html: SAFE }}
      />
    </Card>
  )
}

export default Preview
