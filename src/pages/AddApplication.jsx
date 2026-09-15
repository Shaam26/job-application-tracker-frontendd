import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addApplication } from "../services/api";
import "../styles/ApplicationForm.css";

function AddApplication() {
  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addApplication({
        companyName,
        jobRole,
        applicationDate,
        status,
        jobLink,
        notes,
      });

      alert("Application added successfully!");

      navigate("/applications");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="application-form-page">

      <div className="application-form-card">

        <div className="application-form-header">
          <h1>Add Job Application</h1>

          <p>
            Add a new job application to your tracker
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
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Rejected">Rejected</option>
              <option value="Selected">Selected</option>
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
            Save Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddApplication;