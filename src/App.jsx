import Counter from "./Counter";
import Post from "./Post";
import "./App.css";
const App = () => {
  return (
    <div>
      <h1> Welcom</h1>
      <Counter title="Keep Going" numoftries={33} backcolor="orange" />
      <Post title="product1211" />
    </div>
  );
};
export default App;
