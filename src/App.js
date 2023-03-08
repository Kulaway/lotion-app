import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout.js"
import Editor from "./Editor.js"
import Viewer from "./Viewer.js"


function App() {
 
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route path="/:id" element={<Viewer/>}></Route>
          <Route path="/:id/edit" element={<Editor/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;