import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValue({
      name: "",
      email: "",
    });
    dispatch(
      addUser({
        id:uuidv4(),
        name: value.name,
        email: value.email,
      })
    );
    navigate("/");
    console.log(value);
  };
  return (
    <div>
      <TextField
        label="name"
        value={value.name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "johnDoe" }}
      />
      <br></br>
      <TextField
        label="email"
        value={value.email}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "johnDoe@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};
export default AddUser;
