import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedInUserEmail");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav w-100 d-flex justify-content-between">
        <Link
          className="nav-link text-center"
          to="/login/login-success/group-chat"
        >
          Group Chats
        </Link>
        <Link
          className="nav-link text-center"
          to="/login/login-success/manage-user"
        >
          Manage Users
        </Link>
        <Link
          className="nav-link text-center"
          to="/login/login-success/manage-document"
        >
          Manage Documents
        </Link>
        <button onClick={logout} className="nav-link btn btn-link">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Header;
