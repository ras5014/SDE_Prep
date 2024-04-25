import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        {user && <h2>Hello, {user.name + ""}!</h2>}
      </div>
    </div>
  );
};

export default Home;
