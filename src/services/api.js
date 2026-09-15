const API_BASE_URL = "http://localhost:8080";

/* =========================
   AUTH APIs
========================= */

export async function loginUser(email, password) {
  const response = await fetch(
    `${API_BASE_URL}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function registerUser(
  name,
  email,
  password
) {
  const response = await fetch(
    `${API_BASE_URL}/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Registration failed"
    );
  }

  return data;
}

/* =========================
   DASHBOARD API
========================= */

export async function getDashboard() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications/dashboard`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load dashboard"
    );
  }

  return data;
}

/* =========================
   APPLICATION APIs
========================= */

export async function getApplications() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to load applications"
    );
  }

  return data;
}

export async function getApplicationById(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseText = await response.text();

  if (!response.ok) {
    let message = "Failed to load application";

    if (responseText) {
      try {
        const errorData = JSON.parse(responseText);
        message = errorData.message || message;
      } catch {
        message = responseText;
      }
    }

    throw new Error(message);
  }

  return JSON.parse(responseText);
}

export async function addApplication(application) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(application),
    }
  );

  const responseText = await response.text();

  if (!response.ok) {
    let message = "Failed to add application";

    if (responseText) {
      try {
        const errorData = JSON.parse(responseText);
        message = errorData.message || message;
      } catch {
        message = responseText;
      }
    }

    throw new Error(message);
  }

  return responseText
    ? JSON.parse(responseText)
    : null;
}

export async function updateApplication(
  id,
  application
) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(application),
    }
  );

  const responseText = await response.text();

  if (!response.ok) {
    let message = "Failed to update application";

    if (responseText) {
      try {
        const errorData = JSON.parse(responseText);
        message = errorData.message || message;
      } catch {
        message = responseText;
      }
    }

    throw new Error(message);
  }

  return responseText
    ? JSON.parse(responseText)
    : null;
}

export async function deleteApplication(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_BASE_URL}/applications/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseText = await response.text();

  if (!response.ok) {
    let message = "Failed to delete application";

    if (responseText) {
      try {
        const errorData = JSON.parse(responseText);
        message = errorData.message || message;
      } catch {
        message = responseText;
      }
    }

    throw new Error(message);
  }

  return true;
}