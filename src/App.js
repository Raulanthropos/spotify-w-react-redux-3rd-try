import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/" element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;