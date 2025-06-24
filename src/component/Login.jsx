import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../Services";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const services = new Service();

  const login = async () => {
    const body = {
      Username: username,
      Password: password,
    };
    console.log(body);

    const resLogin = await services.login(body);
    if (resLogin.results[0].Status === "student") {
      localStorage.clear();
      localStorage.setItem("student", JSON.stringify(resLogin.results[0]));
      navigate("/userHome");
    } else if (resLogin.results[0].Status === "admin") {
      localStorage.clear();
      localStorage.setItem("admin", JSON.stringify(resLogin.results[0]));
      navigate("/adminHome");
    }
    console.log("Login");
    console.log(resLogin);
  };

  return (
    <>
      <div style={{ justifyItems: "center" }}>
        <Card
          elevation={16}
          style={{
            width: "500px",
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" style={{ marginTop: "20px" }}>
            ระบบลงทะเบียนการใช้
          </Typography>
          <Typography variant="h5">Internet STOU</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "50px",
            }}
          >
            <TextField
              label="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              onClick={login}
            >
              เข้าสู่ระบบ
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: "20px", backgroundColor: "grey" }}
              onClick={() => navigate("/register")}
            >
              ลงทะเบียน
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default LoginPage;
