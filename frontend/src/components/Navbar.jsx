import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/dashboard"
        >
          Task Manager
        </Link>

        <div className="d-flex align-items-center">

          <span className="text-white me-3">
            Welcome {user?.name || "User"}
          </span>

          <button
            className="btn btn-light"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;