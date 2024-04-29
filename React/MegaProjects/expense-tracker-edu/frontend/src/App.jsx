import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Addtransaction from "./components/Addtransaction";
import EditTransaction from "./components/EditTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/income",
    element: <Transactions transactionType="income" />,
  },
  {
    path: "/expenses",
    element: <Transactions transactionType="expenses" />,
  },
  {
    path: "/addincome",
    element: <Addtransaction transactionType="income" />,
  },
  {
    path: "/addexpenses",
    element: <Addtransaction transactionType="expenses" />,
  },
  {
    path: "/getTransaction/income/:id",
    element: <EditTransaction transactionType="income" />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
