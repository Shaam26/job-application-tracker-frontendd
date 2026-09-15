import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getApplications,
  deleteApplication,
} from "../services/api";
import "../styles/Applications.css";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getApplications();

      setApplications(data.content || []);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteApplication(id);

      setApplications((currentApplications) =>
        currentApplications.filter(
          (application) => application.id !== id
        )
      );

      alert("Application deleted successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const filteredApplications = applications.filter(
    (application) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        application.companyName
          .toLowerCase()
          .includes(searchText) ||
        application.jobRole
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        status === "" ||
        application.status.toLowerCase() ===
          status.toLowerCase();

      return matchesSearch && matchesStatus;
    }
  );

  if (loading) {
    return (
      <div className="applications-page">
        <h2>Loading applications...</h2>
      </div>
    );
  }

  return (
    <div className="applications-page">

      <div className="applications-header">
        <h1>My Applications</h1>

        <p>
          Track and manage all your job applications
        </p>
      </div>

      <div className="application-controls">

        <input
          type="text"
          className="application-search"
          placeholder="Search by company or job role..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          className="application-filter"
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
        >
          <option value="">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Selected">Selected</option>
        </select>

        <Link
          to="/applications/add"
          className="add-application-button"
        >
          + Add Application
        </Link>

      </div>

      {filteredApplications.length === 0 ? (
        <div className="no-applications">
          <h2>No applications found</h2>

          <p>
            Try changing your search or filter, or add a
            new application.
          </p>

          <Link
            to="/applications/add"
            className="add-application-button"
          >
            + Add Application
          </Link>
        </div>
      ) : (
        <div className="applications-list">

          {filteredApplications.map(
            (application) => (
              <div
                className="application-card"
                key={application.id}
              >

                <h2>
                  {application.companyName}
                </h2>

                <p className="application-info">
                  <strong>Job Role:</strong>{" "}
                  {application.jobRole}
                </p>

                <p className="application-info">
                  <strong>Application Date:</strong>{" "}
                  {application.applicationDate}
                </p>

                <p className="application-info">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`status-badge status-${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>
                </p>

                <p className="application-info">
                  <strong>Job Link:</strong>{" "}
                  {application.jobLink ? (
                    <a
                      href={application.jobLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-link"
                    >
                      View Job
                    </a>
                  ) : (
                    "Not provided"
                  )}
                </p>

                <p className="application-info">
                  <strong>Notes:</strong>{" "}
                  {application.notes || "No notes"}
                </p>

                <div className="application-actions">

                  <Link
                    to={`/applications/edit/${application.id}`}
                  >
                    <button className="edit-button">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-button"
                    onClick={() =>
                      handleDelete(application.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      )}

    </div>
  );
}

export default Applications;