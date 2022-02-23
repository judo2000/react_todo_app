import Counter from "./Counter";
// Functional component
// Components are functions that return html
// think of components as partials

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  );
};
export default App;
