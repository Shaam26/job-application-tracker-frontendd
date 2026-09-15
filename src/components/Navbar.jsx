import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/dashboard" className="navbar-logo">
          Job Tracker
        </Link>

        <div className="navbar-links">
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/applications">
            Applications
          </Link>

          <Link to="/applications/add">
            Add Application
          </Link>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;