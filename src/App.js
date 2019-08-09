import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const INITIAL_MARKDOWN = '# Header\n' +
  '## Sub header\n' +
  '[Google](https://google.com)\n' +
  'inline `code`\n' +
  '~~~\nBlock code\n~~~\n' +
  '* List item\n\n' +
  '> Block quote\n' +
  '![image](favicon.ico)\n' +
  '__Bold text__\n'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { input: INITIAL_MARKDOWN }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ input: event.target.value })
  }

  render () {
    return (
      <CardDeck>
        <Editor text={this.state.input} onChange={this.handleChange}/>
        <Preview text={this.state.input}/>
      </CardDeck>
    )
  }
}

function Editor (props) {
  return (
    <Card bg="light">
      <Card.Header>Editor</Card.Header>
      <Card.Body id="editor" as="textarea" onChange={props.onChange}
                 value={props.text}/>
    </Card>
  )
}

function Preview (props) {
  const DANGEROUS = marked(props.text, { breaks: true })
  const SAFE = DOMPurify.sanitize(DANGEROUS)
  return (
    <Card bg="light">
      <Card.Header>Preview</Card.Header>
      <Card.Body id="preview" dangerouslySetInnerHTML={{ __html: SAFE }}/>
    </Card>
  )
}

export default App
