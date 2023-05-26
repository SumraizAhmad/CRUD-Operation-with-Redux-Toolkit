import logo from "./logo.svg";
import "./App.css";
import UserList from "./features/users/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import GetData from "./features/products/GetData";
import DisplayProducts from "./features/products/DisplayProducts";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">CRUD with redux Toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
        <Route path="/data" element={<GetData />}></Route>
        <Route path="/displayProduct" element={<DisplayProducts />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
