import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  console.log(params.id);
  const navigate = useNavigate();
  const existUser = users.filter((user) => user.id === params.id);
  // console.log(existUser[0].name);
  const { name, email } = existUser[0];
  const [value, setValue] = useState({
    name: name,
    email: email,
  });
  console.log(value);

  const handleEditUser = () => {
    setValue({
      name: "",
      email: "",
    });

    dispatch(
      editUser({
        id: params.id,
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
