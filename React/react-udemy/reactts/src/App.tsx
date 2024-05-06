import './App.css'

function App() {
  const add = (a: number, b: number) => {
    return a + b;
  }
  return (
    <>
      <h1>TypeScript</h1>
      <h2>{add(5, 7)}</h2>
    </>
  )
}

export default App
