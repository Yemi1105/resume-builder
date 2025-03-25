const API_BASE_URL = "https://ai-resume-builder-taxr.onrender.com/api";

async function registerUser(username, email, password, confirmPassword) {
  const response = await fetch(`${API_BASE_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
      password2: confirmPassword,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
}

async function loginUser(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.detail || data.message || "Login failed");
  }
  return data;
}

async function enhanceResume(userContent) {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(`${API_BASE_URL}/resume/enhance/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { "Authorization": `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      prompt: "Please enhance my resume with the following details:\n" + userContent,
      history: [] 
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.detail || data.message || "Enhance resume request failed");
  }
  return data; 
}

export { registerUser, loginUser, enhanceResume };
