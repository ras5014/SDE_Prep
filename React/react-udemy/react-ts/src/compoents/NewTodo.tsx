import { FormEvent } from "react";

const NewTodo: React.FC = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredText = formData.get("text") ?? "";
    console.log(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" name="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
