import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Editor from './components/Editor'
import Preview from './components/Preview'
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

export default App
