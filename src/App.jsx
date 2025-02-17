import { Routes, Route, Navigate } from "react-router";
import { Login } from "./views/login";
import { Home } from "./views/home";
import { ListUser } from "./component/user/listUser";
import { NewUser } from "./component/user/newUser";
import { useLogin } from "./store/login";

function App() {

  const {isLoggedIn} = useLogin()

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/home" element={<Home />}>
          <Route path="a" element={<ListUser />} />
          <Route path="b" element={<NewUser />} />
          <Route path="*" element={<Navigate to="/home/a" />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={isLoggedIn ? "/home/a" : "/"} />} />
    </Routes>
  );
}

export default App;

