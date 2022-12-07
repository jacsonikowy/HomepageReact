import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import SearchBar from "./components/SearchBar.jsx"

function App() {
  return (
    <div className={"bg-gray-800 w-screen h-screen text-gray-50"}>
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
