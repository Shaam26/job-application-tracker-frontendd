import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getApplicationById,
  updateApplication,
} from "../services/api";
import "../styles/ApplicationForm.css";

function EditApplication() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplication();
  }, [id]);

  const fetchApplication = async () => {
    try {
      const data = await getApplicationById(id);

      setCompanyName(data.companyName || "");
      setJobRole(data.jobRole || "");
      setApplicationDate(data.applicationDate || "");
      setStatus(data.status || "");
      setJobLink(data.jobLink || "");
      setNotes(data.notes || "");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateApplication(id, {
        companyName,
        jobRole,
        applicationDate,
        status,
        jobLink,
        notes,
      });

      alert("Application updated successfully!");

      navigate("/applications");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="application-form-page">
        <div className="application-form-card">
          <h2>Loading application...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="application-form-page">

      <div className="application-form-card">

        <div className="application-form-header">
          <h1>Edit Job Application</h1>

          <p>
            Update your job application details
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="application-form-group">
            <label>Company Name</label>

            <input
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(event) =>
                setCompanyName(event.target.value)
              }
              required
            />
          </div>

          <div className="application-form-group">
            <label>Job Role</label>

            <input
              type="text"
              placeholder="Enter job role"
              value={jobRole}
              onChange={(event) =>
                setJobRole(event.target.value)
              }
              required
            />
          </div>

          <div className="application-form-group">
            <label>Application Date</label>

            <input
              type="date"
              value={applicationDate}
              onChange={(event) =>
                setApplicationDate(event.target.value)
              }
              required
            />
          </div>

          <div className="application-form-group">
            <label>Status</label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
              required
            >
              <option value="">Select Status</option>

              <option value="Applied">
                Applied
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Selected">
                Selected
              </option>
            </select>
          </div>

          <div className="application-form-group">
            <label>Job Link</label>

            <input
              type="url"
              placeholder="https://example.com/job"
              value={jobLink}
              onChange={(event) =>
                setJobLink(event.target.value)
              }
            />
          </div>

          <div className="application-form-group">
            <label>Notes</label>

            <textarea
              placeholder="Enter any notes about this application..."
              value={notes}
              onChange={(event) =>
                setNotes(event.target.value)
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="application-submit-button"
          >
            Update Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditApplication;