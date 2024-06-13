import { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(countRef.current.innerText);
  };
  useEffect(() => {
    inputRef.current.focus();
    console.log(countRef.current.innerText);
  }, [count]);
  const countRef = useRef();
  const inputRef = useRef();
  return (
    <div>
      <h2 ref={countRef}>Count: {count}</h2>
      <button onClick={handleClick}>Click</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputRef.current.value);
        }}
      >
        <input ref={inputRef} type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRef;
