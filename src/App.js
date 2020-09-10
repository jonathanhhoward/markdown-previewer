import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

const INITIAL_MARKDOWN = `# Header
## Sub header
[Google](https://google.com)
inline \`code\`
~~~
Block code
~~~
* List item

> Block quote

![image](favicon.ico)
__Bold text__`

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
