/* =========================
   NOX ANIME START
========================= */

function startNOX() {
  try {
    render();

    const app = document.getElementById("app");
    const loader = document.getElementById("loader");

    if (app) {
      app.classList.remove("hidden");
    }

    if (loader) {
      loader.classList.add("hidden");
    }

    const search = document.getElementById("search");
    if (search) {
      search.addEventListener("input", render);
    }

    const dailyBtn = document.getElementById("dailyBtn");
    if (dailyBtn) {
      dailyBtn.addEventListener("click", claimDaily);
    }

    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
      loginBtn.addEventListener("click", openLogin);
    }

    const adminBtn = document.getElementById("adminBtn");
    if (adminBtn) {
      adminBtn.addEventListener("click", openAdmin);
    }

  } catch (error) {
    console.error("NOX Anime error:", error);

    const loader = document.getElementById("loader");

    if (loader) {
      loader.innerHTML = `
        <div style="text-align:center;padding:30px">
          <div style="font-size:28px;margin-bottom:15px">⚠️</div>
          <h2>NOX Anime Error</h2>
          <p style="color:#8fa3bd">
            Please refresh the page.
          </p>
          <button onclick="location.reload()"
            style="
              padding:12px 20px;
              border:0;
              border-radius:10px;
              background:#168cff;
              color:white;
              font-size:16px;
            ">
            Refresh
          </button>
        </div>
      `;
    }
  }
}

/* Start after page loads */
window.addEventListener("load", startNOX);
