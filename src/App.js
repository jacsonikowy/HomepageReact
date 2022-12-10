import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import SearchBar from "./components/SearchBar.jsx"

function App() {
  return (
    <div className={"bg-gray-800 min-w-screen min-h-screen overflow-y-scroll text-gray-50"}>
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
