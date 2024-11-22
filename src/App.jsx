import { BrowserRouter, Route, Routes } from "react-router-dom";
import Document from "./pages/docuement";
import Home from "./pages/home";
import Layout from "./pages/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Document />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
