import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormsContainer } from "./forms/FormsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FormsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
