import {
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../Services";

function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState();

  const services = new Service();

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event);

    setSelectedRole(event.target.value);
  };

  const register = async () => {
    try {
      const body = {
        Fullname: name,
        Username: username,
        Password: password,
        Status: selectedRole,
        Email: email,
      };
      console.log(body);
      await services.addUser(body);
      setEmail("");
      setName("");
      setUsername("");
      setPassword("");
      setSelectedRole("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Card
          elevation={16}
          style={{
            width: "500px",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            ลงทะเบียน
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Typography variant="h6">ชื่อ - สกุล</Typography>
              </div>
              <TextField
                label="ชื่อ - สกุล"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div style={{ display: "flex" }}>
                <Typography variant="h6">Username</Typography>
              </div>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <div style={{ display: "flex" }}>
                <Typography variant="h6">Password</Typography>
              </div>
              <TextField
                label="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div style={{ display: "flex" }}>
                <Typography variant="h6">Email</Typography>
              </div>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div style={{ display: "flex" }}>
                <Typography variant="h6">Level</Typography>
              </div>
              <Select
                labelId="status-select"
                id="status-select"
                value={selectedRole}
                label="Level"
                onChange={handleChange}
              >
                <MenuItem value={"admin"}>ผู้ดูแลระบบ</MenuItem>
                <MenuItem value={"student"}>นักศึกษา</MenuItem>
              </Select>
            </div>

            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              onClick={register}
            >
              ลงทะเบียน
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              color="error"
              onClick={() => navigate("/")}
            >
              ยกเลิก
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default RegisterPage;
