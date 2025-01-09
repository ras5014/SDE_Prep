type User = {
  id: number;
  name: string;
  age?: number; // optional property
};

const user: User = {
  id: 1,
  name: "John",
};

console.log(user);
