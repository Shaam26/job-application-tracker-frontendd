import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    totalApplications: 0,
    applied: 0,
    interview: 0,
    rejected: 0,
    selected: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboard();

      setDashboard(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h1>Dashboard</h1>

        <p>
          Track and manage your job applications
        </p>
      </div>

      <div className="dashboard-grid">

        <div className="stat-card">
          <h3>Total Applications</h3>
          <p>{dashboard.totalApplications}</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <p>{dashboard.applied}</p>
        </div>

        <div className="stat-card">
          <h3>Interview</h3>
          <p>{dashboard.interview}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{dashboard.rejected}</p>
        </div>

        <div className="stat-card">
          <h3>Selected</h3>
          <p>{dashboard.selected}</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;