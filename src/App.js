import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/404page";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import GroupChat from "./components/GroupChat";
import ManageUser from "./components/ManageUsers";
import ManageDocument from "./components/ManageDocuments";
import EditPage from "./components/EditPage";
import WelcomePage from "./components/WelcomePage";
import UploadSharing from "./components/UploadSharing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomeScreen} />
        <Route path="*" Component={ErrorPage} />
        <Route path="/login" Component={LoginScreen} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login/login-success" Component={WelcomePage} />
        <Route path="/login/login-success/group-chat" Component={GroupChat} />
        <Route path="/login/login-success/manage-user" Component={ManageUser} />
        <Route
          path="/login/login-success/manage-document"
          Component={ManageDocument}
        />
        <Route path="/edit/:key" Component={EditPage} />
        <Route path="/share" Component={UploadSharing} />
      </Routes>
    </>
  );
}

export default App;
