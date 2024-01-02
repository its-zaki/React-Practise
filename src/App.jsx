import { useState } from 'react'
import Button from './Button'


function App() {
  let [num, setNum] = useState(0)
  function addnum(){
    setNum(num +1)
  }
  return (
    <>
      <h1>Hello React{num}</h1>
    <Button name="mango" age={20} arr={['react', 'javascript', 'html', {"name":"hello"}]}func={addnum} />
    </>
  )
}

export default App
