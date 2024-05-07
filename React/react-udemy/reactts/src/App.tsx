import "./App.css";

function App() {
  let course: string | number = 4;

  const add = (a: number, b: number): number => {
    return a + b;
  };

  // Generic
  const insertAtBeginning = <T,>(array: T[], value: T) => {
    const newArray = [value, ...array];
    return newArray;
  };
  const updatedArray: number[] = insertAtBeginning([1, 2, 3], 0);

  return (
    <>
      <h1>TypeScript</h1>
      <h2>{course}</h2>
      <h2>{`Addition = ${add(100, 400)}`}</h2>
      <h3>{updatedArray}</h3>
    </>
  );
}

export default App;
