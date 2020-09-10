import React, { useState } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

function App () {
  const initialState = `# Header
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

  const [input, setInput] = useState(initialState)

  function handleChange ({ target }) {
    setInput(target.value)
  }

  return (
    <CardDeck className="bg-secondary m-0 vh-100">
      <Editor text={input} onChange={handleChange}/>
      <Preview text={input}/>
    </CardDeck>
  )
}

export default App
