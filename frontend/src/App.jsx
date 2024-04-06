import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Inventory from "./pages/Inventory/Inventory";
import Add from "./pages/Add/Add";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      {/* <Route path="/inventory/create" element={<CreateBook />} /> */}
      {/* <Route path="/inventory/edit/:id" element={<EditBook />} /> */}
      {/* <Route path="/inventory/update/:id" element={<UpdateBook />} /> */}
      <Route path="/inventory/add" element={<Add />} />
      {/* <Route path="/inventory/:id" element={<ShowBook />} /> */}
      {/* <Route path="/inventory/delete/:id" element={<DeleteBook />} /> */}
    </Routes>
  );
};
export default App;
