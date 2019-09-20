import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import './App.css'

const INITIAL_MARKDOWN = '# Header\n' +
  '## Sub header\n' +
  '[Google](https://google.com)\n' +
  'inline `code`\n' +
  '~~~\nBlock code\n~~~\n' +
  '* List item\n\n' +
  '> Block quote\n\n' +
  '![image](favicon.ico)\n' +
  '__Bold text__\n'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { input: INITIAL_MARKDOWN }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  render () {
    return (
      <CardDeck className="bg-secondary m-0 vh-100">
        <Editor text={this.state.input} onChange={this.handleChange}/>
        <Preview text={this.state.input}/>
      </CardDeck>
    )
  }
}

function Editor (props) {
  return (
    <Card border="dark" className="Card" id="Editor">
      <Card.Header className="bg-dark text-info">Editor</Card.Header>
      <Card.Body as="textarea" className="bg-light overflow-auto" id="editor"
                 onChange={props.onChange} value={props.text}/>
    </Card>
  )
}

function Preview (props) {
  const DANGEROUS = marked(props.text, { breaks: true })
  const SAFE = DOMPurify.sanitize(DANGEROUS)
  return (
    <Card border="dark" className="Card" id="Preview">
      <Card.Header className="bg-dark text-info">Preview</Card.Header>
      <Card.Body className="bg-light overflow-auto" id="preview"
                 dangerouslySetInnerHTML={{ __html: SAFE }}/>
    </Card>
  )
}

export default App
