import "./App.css";
import NameBadge from "./components/NameBadge";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>("John Doe");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <div>
      <NameBadge name={name} onChange={onChange} />
    </div>
  );
}

export default App;
