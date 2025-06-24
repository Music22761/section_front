import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserHomePage() {

    const user = JSON.parse(localStorage.getItem('student'))
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/');
    }

  return (
    <>
      <div>
        <Typography variant="h5">หน้าหลักของนักศึกษา</Typography>
        <Typography variant="h6">อีเมล {user.Email}</Typography>
        <Typography variant="h6">ชื่อ {user.Fullname}</Typography>
        <Button variant="contained" color="warning" onClick={logout}>
          ออกจากระบบ
        </Button>
      </div>
    </>
  );
}

export default UserHomePage;
