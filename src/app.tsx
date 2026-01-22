import { useState } from 'preact/hooks'

import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="text-xs text-center font-bold underline">Hello</h1>
    </>
  )
}
