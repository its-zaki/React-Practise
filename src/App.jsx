import { useState } from 'react'


function App() {
  let [num, setNum] = useState(0)
  return (
    <>
      <h1>Hello React Hello {num}</h1>
    </>
  )
}

export default App
