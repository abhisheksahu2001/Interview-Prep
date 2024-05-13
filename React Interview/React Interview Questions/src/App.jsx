import FileExplorer from './components/File Explorer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/File Explorer/Home';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='fileExplorer' element={<FileExplorer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
