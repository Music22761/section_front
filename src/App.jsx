import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./component/Login";
import RegisterPage from "./component/Register";
import UserHomePage from "./component/UserHome";
import AdminHomePage from "./component/AdminHome";

const routers = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        index:'login',
        element: <LoginPage/>
      },
      {
        path:'register',
        element: <RegisterPage/>
      },
      {
        path:'userHome',
        element: <UserHomePage/>
      },
       {
        path:'adminHome',
        element: <AdminHomePage/>
      },
      
      
    ]
  }
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
