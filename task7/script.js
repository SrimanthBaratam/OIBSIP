// ---------- REGISTER ----------
function register() {
  const user = document.getElementById("regUser").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (user === "" || pass === "") {
    alert("⚠️ Please fill in all fields");
    return;
  }

  if (pass.length < 6) {
    alert("⚠️ Password must be at least 6 characters");
    return;
  }

  // Store credentials (demo purpose)
  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("✅ Registration successful!");
  window.location.href = "index.html";
}

// ---------- LOGIN ----------
function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (user === "" || pass === "") {
    alert("⚠️ Please enter username and password");
    return;
  }

  if (user === storedUser && pass === storedPass) {
    // ✅ Store authenticated user
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: user,
        loggedIn: true
      })
    );

    window.location.href = "dashboard.html";
  } else {
    alert("❌ Invalid username or password");
  }
}

// ---------- AUTH CHECK + RENDER USER ----------
function checkAuth() {
  const userData = JSON.parse(localStorage.getItem("currentUser"));

  if (!userData || userData.loggedIn !== true) {
    alert("🔒 Access denied. Please login first.");
    window.location.href = "index.html";
    return;
  }

  // ✅ Show username on dashboard
  const welcomeEl = document.getElementById("welcomeUser");
  if (welcomeEl) {
    welcomeEl.innerText = `Welcome, ${userData.username} 🎉`;
  }
}

// ---------- LOGOUT ----------
function logout() {
  localStorage.removeItem("currentUser");
  alert("👋 Logged out successfully");
  window.location.href = "index.html";
}
