/* =====================================================
   NOX ANIME - COMPLETE SCRIPT.JS
   ===================================================== */


/* =========================
   HELPERS
========================= */

const $ = (id) => document.getElementById(id);

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================
   STORAGE
========================= */

const COINS_KEY = "nox_coins";
const WATCH_KEY = "nox_watchlist";
const PREMIUM_KEY = "nox_premium";
const USERS_KEY = "nox_users";
const DAILY_KEY = "nox_daily";
const CURRENT_USER_KEY = "nox_current_user";
const ANIME_KEY = "nox_anime";


/* =========================
   DEFAULT ANIME
========================= */

const defaultAnime = [

  {
    id: 1,
    name: "That Time I Got Reincarnated as a Slime",
    genre: "Fantasy",
    year: 2024,
    season: "Season 4",
    rating: "8.5",
    poster: "slime-s4.jpg",
    trending: true,
    latest: true,
    premium: false
  },

  {
    id: 2,
    name: "One Piece",
    genre: "Adventure",
    year: 1999,
    season: "Ongoing",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 3,
    name: "Jujutsu Kaisen",
    genre: "Action",
    year: 2020,
    season: "Season 2",
    rating: "8.8",
    poster: "slime-s4.jpg",
    trending: true,
    latest: true,
    premium: false
  },

  {
    id: 4,
    name: "Demon Slayer",
    genre: "Fantasy",
    year: 2019,
    season: "Season 4",
    rating: "8.6",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 5,
    name: "Attack on Titan",
    genre: "Dark",
    year: 2013,
    season: "Final Season",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 6,
    name: "Naruto",
    genre: "Adventure",
    year: 2002,
    season: "Complete",
    rating: "8.4",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 7,
    name: "Bleach",
    genre: "Action",
    year: 2004,
    season: "Thousand-Year Blood War",
    rating: "8.2",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 8,
    name: "Dragon Ball Super",
    genre: "Action",
    year: 2015,
    season: "Complete",
    rating: "8.0",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 9,
    name: "My Hero Academia",
    genre: "Superhero",
    year: 2016,
    season: "Final Season",
    rating: "8.0",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 10,
    name: "Black Clover",
    genre: "Fantasy",
    year: 2017,
    season: "Complete",
    rating: "8.2",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 11,
    name: "Chainsaw Man",
    genre: "Action",
    year: 2022,
    season: "Season 1",
    rating: "8.5",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 12,
    name: "Spy x Family",
    genre: "Comedy",
    year: 2022,
    season: "Season 2",
    rating: "8.5",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 13,
    name: "Haikyuu!!",
    genre: "Sports",
    year: 2014,
    season: "Complete",
    rating: "8.7",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 14,
    name: "Blue Lock",
    genre: "Sports",
    year: 2022,
    season: "Season 2",
    rating: "8.3",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 15,
    name: "Death Note",
    genre: "Mystery",
    year: 2006,
    season: "Complete",
    rating: "8.9",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 16,
    name: "Tokyo Ghoul",
    genre: "Dark",
    year: 2014,
    season: "Complete",
    rating: "7.7",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 17,
    name: "Frieren",
    genre: "Fantasy",
    year: 2023,
    season: "Season 1",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 18,
    name: "Hunter x Hunter",
    genre: "Adventure",
    year: 2011,
    season: "Complete",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 19,
    name: "Mob Psycho 100",
    genre: "Action",
    year: 2016,
    season: "Complete",
    rating: "8.6",
    poster: "slime-s4.jpg",
    trending: false,
    latest: false,
    premium: false
  },

  {
    id: 20,
    name: "Vinland Saga",
    genre: "Historical",
    year: 2019,
    season: "Season 2",
    rating: "8.8",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  }

];


/* =========================
   LOAD DATA
========================= */

let anime = load(ANIME_KEY, null);

if (!Array.isArray(anime) || anime.length === 0) {
  anime = defaultAnime;
  save(ANIME_KEY, anime);
}

let coins = Number(
  localStorage.getItem(COINS_KEY) || 10
);

let watchlist = load(
  WATCH_KEY,
  []
);

let premiumUntil = Number(
  localStorage.getItem(PREMIUM_KEY) || 0
);

let users = load(
  USERS_KEY,
  []
);

let currentUser =
  localStorage.getItem(CURRENT_USER_KEY) ||
  "Guest";


/* =========================
   DEFAULT USERS
========================= */

if (!Array.isArray(users) || users.length === 0) {

  users = [

    {
      username: "superadmin",
      password: "ANIMEADMIN",
      role: "super"
    },

    {
      username: "admin",
      password: "ADMIN123",
      role: "admin"
    }

  ];

  save(USERS_KEY, users);
}


/* =========================
   PREMIUM
========================= */

function hasPremium() {
  return Date.now() < premiumUntil;
}

function updatePremium() {

  const box = $("premiumStatus");

  if (!box) return;

  if (hasPremium()) {

    const days = Math.ceil(
      (premiumUntil - Date.now()) /
      86400000
    );

    box.innerHTML =
      `👑 Premium Active — ${days} day(s) remaining`;

  } else {

    box.innerHTML =
      `Premium inactive`;

  }
}


/* =========================
   DAILY COINS
========================= */

function claimDaily() {

  const today =
    new Date().toISOString().slice(0, 10);

  const last =
    localStorage.getItem(DAILY_KEY);

  if (last === today) {

    alert(
      "You already claimed today's 10 coins."
    );

    return;
  }

  coins += 10;

  localStorage.setItem(
    DAILY_KEY,
    today
  );

  localStorage.setItem(
    COINS_KEY,
    String(coins)
  );

  render();

  alert(
    "🎁 +10 coins added!"
  );
}


/* =========================
   PREMIUM REDEEM
========================= */

function redeemPremium(cost, days) {

  if (hasPremium()) {

    alert(
      "You already have Premium."
    );

    return;
  }

  if (coins < cost) {

    alert(
      `You need ${cost} coins. You have ${coins}.`
    );

    return;
  }

  coins -= cost;

  premiumUntil =
    Date.now() +
    days * 86400000;

  localStorage.setItem(
    COINS_KEY,
    String(coins)
  );

  localStorage.setItem(
    PREMIUM_KEY,
    String(premiumUntil)
  );

  render();

  alert(
    `👑 Premium activated for ${days} days!`
  );
}


/* =========================
   WATCHLIST
========================= */

function toggleWatchlist(id) {

  id = Number(id);

  if (watchlist.includes(id)) {

    watchlist =
      watchlist.filter(
        x => Number(x) !== id
      );

  } else {

    watchlist.push(id);

  }

  save(
    WATCH_KEY,
    watchlist
  );

  render();
}

function toggleWatch(name) {

  const item =
    anime.find(
      x => x.name === name
    );

  if (item) {
    toggleWatchlist(item.id);
  }
}


/* =========================
   SEARCH
========================= */

function getFilteredAnime() {

  const input = $("search");

  const query =
    input
      ? input.value.trim().toLowerCase()
      : "";

  if (!query) {
    return anime;
  }

  return anime.filter(item =>

    item.name
      .toLowerCase()
      .includes(query)

    ||

    item.genre
      .toLowerCase()
      .includes(query)

    ||

    String(item.year)
      .includes(query)

  );
}


/* =========================
   MAIN RENDER
========================= */

function render() {

  const list =
    getFilteredAnime();


  renderGrid(
    "trendingGrid",
    list.filter(
      item => item.trending
    )
  );


  renderGrid(
    "latestGrid",
    list.filter(
      item => item.latest
    )
  );


  renderGrid(
    "watchGrid",
    list.filter(
      item =>
        watchlist.includes(
          Number(item.id)
        )
    )
  );


  renderGenres(list);


  const coinElement =
    $("coins");

  if (coinElement) {
    coinElement.textContent =
      coins;
  }


  updatePremium();

  updateLoginButton();
}


/* =========================
   ANIME CARDS
========================= */

function renderGrid(id, list) {

  const container = $(id);

  if (!container) return;


  if (!list.length) {

    container.innerHTML =
      `<p style="color:#71849b">
        No anime found.
      </p>`;

    return;
  }


  container.innerHTML =
    list.map(item => {

      const saved =
        watchlist.includes(
          Number(item.id)
        );


      return `

        <article class="anime-card">

          <img
            class="poster"
            src="${escapeHTML(
              item.poster || "slime-s4.jpg"
            )}"
            alt="${escapeHTML(item.name)}"
            onerror="this.src='slime-s4.jpg'"
          >


          <div class="card-info">

            <h3>
              ${escapeHTML(item.name)}
            </h3>


            <div class="card-meta">

              ${escapeHTML(item.genre)}
              •
              ${item.year}
              •
              ⭐ ${item.rating}

            </div>


            ${
              item.premium
                ? `<div style="
                    color:#45aaff;
                    font-size:12px;
                    margin-top:7px;
                    font-weight:700;
                  ">
                    👑 PREMIUM
                  </div>`
                : ""
            }


            <div style="
              display:flex;
              gap:7px;
              margin-top:12px;
            ">

              <button
                class="watch-btn"
                style="
                  padding:9px 12px;
                  font-size:12px;
                "
                onclick="openAnime(${item.id})">

                ▶ Watch

              </button>


              <button
                class="watchlist-btn"
                style="
                  padding:9px 10px;
                  font-size:12px;
                "
                onclick="toggleWatchlist(${item.id})">

                ${saved ? "✓ Saved" : "＋"}

              </button>

            </div>

          </div>

        </article>

      `;

    }).join("");
}


/* =========================
   GENRES
========================= */

function renderGenres(list) {

  const container =
    $("genresGrid");

  if (!container) return;


  const genres =
    [...new Set(
      list.map(
        item => item.genre
      )
    )];


  container.innerHTML =
    genres.map(genre => {

      const count =
        list.filter(
          item =>
            item.genre === genre
        ).length;


      return `

        <button
          class="genre-btn"
          onclick="filterGenre('${escapeHTML(genre)}')">

          🎭 ${escapeHTML(genre)}
          <small> (${count})</small>

        </button>

      `;

    }).join("");
}


/* =========================
   FILTER GENRE
========================= */

function filterGenre(genre) {

  const input =
    $("search");

  if (!input) return;

  input.value =
    genre;

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   SHOW ALL
========================= */

function showAll() {

  const input =
    $("search");

  if (input) {
    input.value = "";
  }

  render();

  const section =
    $("trending");

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }
}


/* =====================================================
   VIDEO
   ===================================================== */


/*
   Yahan sirf apne authorized
   video URLs add karne hain.

   Example:

   auto: "https://example.com/video.mp4"

*/

const VIDEO_URLS = {

  1: {

    auto: "",

    "720p": "",

    "1080p": "",

    "1440p": "",

    "4k": ""

  }

};


let currentAnimeId = null;


/* =========================
   OPEN PLAYER
========================= */

function openAnime(id) {

  id = Number(id);

  const item =
    anime.find(
      x => Number(x.id) === id
    );

  if (!item) {

    alert("Anime not found.");

    return;
  }


  if (
    item.premium &&
    !hasPremium()
  ) {

    alert(
      "👑 Premium required for this anime."
    );

    return;
  }


  currentAnimeId =
    id;


  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) return;


  const urls =
    VIDEO_URLS[id] || {};


  const firstURL =
    urls.auto ||
    urls["720p"] ||
    "";


  body.innerHTML = `

    <h2 class="modal-title">
      ${escapeHTML(item.name)}
    </h2>


    <p style="
      color:#7f93aa;
      margin-top:5px;
    ">
      ${escapeHTML(item.genre)}
      •
      ${item.year}
      •
      ${escapeHTML(item.season)}
      •
      ⭐ ${item.rating}
    </p>


    <video
      id="player"
      class="real-player"
      controls
      playsinline
      preload="metadata">

      <source
        id="videoSource"
        src="${firstURL}"
        type="video/mp4">

    </video>


    <div class="player-controls">

      <div>

        <label>
          Quality
        </label>

        <select id="qualitySelect">

          <option value="auto">
            Auto
          </option>

          <option value="720p">
            720p
          </option>

          <option value="1080p">
            1080p
          </option>

          <option value="1440p">
            1440p
          </option>

          <option value="4k">
            4K
          </option>

        </select>

      </div>


      <div>

        <label>
          Audio
        </label>

        <select id="audioSelect">

          <option>
            Original / Japanese
          </option>

          <option>
            Hindi
          </option>

          <option>
            English
          </option>

          <option>
            Urdu
          </option>

          <option>
            Spanish
          </option>

          <option>
            French
          </option>

          <option>
            German
          </option>

          <option>
            Korean
          </option>

        </select>

      </div>

    </div>


    <div class="modal-actions">

      <button
        class="blue"
        onclick="loadSelectedVideo()">

        ▶ Load Video

      </button>


      <a
        id="downloadBtn"
        href="#"
        target="_blank"
        download>

        Download

      </a>

    </div>


    <p style="
      color:#6f839b;
      font-size:13px;
      margin-top:18px;
    ">

      ${
        firstURL
          ? "Video source connected."
          : "No video URL connected yet. Add an authorized MP4 URL in VIDEO_URLS."

      }

    </p>

  `;


  modal.classList.remove(
    "hidden"
  );


  const quality =
    $("qualitySelect");

  if (quality) {

    quality.addEventListener(
      "change",
      loadSelectedVideo
    );

  }


  updateDownloadButton();

}


/* =========================
   LOAD VIDEO
========================= */

function loadSelectedVideo() {

  if (!currentAnimeId) return;


  const player =
    $("player");

  const source =
    $("videoSource");

  const quality =
    $("qualitySelect");


  if (
    !player ||
    !source
  ) return;


  const selected =
    quality
      ? quality.value
      : "auto";


  const urls =
    VIDEO_URLS[currentAnimeId] ||
    {};


  const url =
    urls[selected] ||
    urls.auto ||
    "";


  if (!url) {

    alert(
      `No video URL is configured for ${selected}.`
    );

    return;
  }


  source.src =
    url;

  player.load();


  player.play().catch(
    () => {}
  );


  updateDownloadButton();
}


/* =========================
   DOWNLOAD
========================= */

function updateDownloadButton() {

  const button =
    $("downloadBtn");

  if (!button) return;


  const quality =
    $("qualitySelect");


  const selected =
    quality
      ? quality.value
      : "auto";


  const urls =
    VIDEO_URLS[currentAnimeId] ||
    {};


  const url =
    urls[selected] ||
    urls.auto ||
    "";


  if (url) {

    button.href =
      url;

    button.style.opacity =
      "1";

    button.style.pointerEvents =
      "auto";

  } else {

    button.href =
      "#";

    button.style.opacity =
      "0.5";

    button.style.pointerEvents =
      "none";

  }
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

  const modal =
    $("modal");

  const player =
    $("player");

  if (player) {

    try {
      player.pause();
    } catch (e) {}

  }

  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }

  currentAnimeId =
    null;
}


/* =====================================================
   LOGIN
   ===================================================== */


/* =========================
   OPEN LOGIN
========================= */

function openLogin() {

  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) return;


  body.innerHTML = `

    <div class="admin-panel">

      <h2>
        🔐 Login
      </h2>


      <div class="admin-row">

        <input
          id="loginUsername"
          placeholder="Username"
        >


        <input
          id="loginPassword"
          type="password"
          placeholder="Password"
        >

      </div>


      <button
        onclick="loginUser()">

        Login

      </button>


      <button
        onclick="openSignup()"
        style="
          margin-left:8px;
          background:#0b1a2d;
          border:1px solid #23425f;
        ">

        Sign Up

      </button>


      <p
        id="loginMessage"
        style="color:#ff6575">
      </p>

    </div>

  `;


  modal.classList.remove(
    "hidden"
  );
}


/* =========================
   LOGIN USER
========================= */

function loginUser() {

  const username =
    $("loginUsername")
      ?.value.trim();

  const password =
    $("loginPassword")
      ?.value;


  const user =
    users.find(
      x =>
        x.username === username &&
        x.password === password
    );


  if (!user) {

    const msg =
      $("loginMessage");

    if (msg) {

      msg.textContent =
        "❌ Wrong username or password.";

    }

    return;
  }


  currentUser =
    user.username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  closeModal();

  render();

  alert(
    `Welcome ${user.username}!`
  );
}


/* =========================
   SIGNUP
========================= */

function openSignup() {

  const body =
    $("modalBody");

  if (!body) return;


  body.innerHTML = `

    <div class="admin-panel">

      <h2>
        ✨ Create Account
      </h2>


      <div class="admin-row">

        <input
          id="signupUsername"
          placeholder="Username"
        >


        <input
          id="signupPassword"
          type="password"
          placeholder="Password"
        >

      </div>


      <button
        onclick="signupUser()">

        Create Account

      </button>


      <button
        onclick="openLogin()"
        style="
          margin-left:8px;
          background:#0b1a2d;
        ">

        Back

      </button>


      <p
        id="signupMessage"
        style="color:#ff6575">
      </p>

    </div>

  `;

}


/* =========================
   SIGNUP USER
========================= */

function signupUser() {

  const username =
    $("signupUsername")
      ?.value.trim();

  const password =
    $("signupPassword")
      ?.value;


  if (
    !username ||
    !password
  ) {

    $("signupMessage").textContent =
      "Please fill all fields.";

    return;
  }


  if (username.length < 3) {

    $("signupMessage").textContent =
      "Username must be at least 3 characters.";

    return;
  }


  const exists =
    users.some(
      x =>
        x.username.toLowerCase() ===
        username.toLowerCase()
    );


  if (exists) {

    $("signupMessage").textContent =
      "Username already exists.";

    return;
  }


  users.push({

    username,
    password,
    role: "user"

  });


  save(
    USERS_KEY,
    users
  );


  currentUser =
    username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  closeModal();

  render();

  alert(
    "✅ Account created!"
  );
}


/* =========================
   LOGIN BUTTON TEXT
========================= */

function updateLoginButton() {

  const button =
    $("loginBtn");

  if (!button) return;


  button.textContent =
    currentUser !== "Guest"
      ? currentUser
      : "Login";
}


/* =====================================================
   ADMIN
   ===================================================== */


/* =========================
   OPEN ADMIN LOGIN
========================= */

function openAdmin() {

  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) return;


  body.innerHTML = `

    <div class="admin-panel">

      <h2>
        🛡️ Admin Login
      </h2>


      <div class="admin-row">

        <input
          id="adminUsername"
          placeholder="Admin username"
        >


        <input
          id="adminPassword"
          type="password"
          placeholder="Admin password"
        >

      </div>


      <button
        onclick="adminLogin()">

        Open Admin Panel

      </button>


      <p
        id="adminMessage"
        style="color:#ff6575">
      </p>

    </div>

  `;


  modal.classList.remove(
    "hidden"
  );
}


/* =========================
   ADMIN LOGIN
========================= */

function adminLogin() {

  const username =
    $("adminUsername")
      ?.value.trim();

  const password =
    $("adminPassword")
      ?.value;


  const user =
    users.find(
      x =>
        (
          x.role === "admin" ||
          x.role === "super"
        ) &&
        x.username === username &&
        x.password === password
    );


  if (!user) {

    $("adminMessage").textContent =
      "❌ Invalid admin login.";

    return;
  }


  currentUser =
    user.username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  openAdminPanel();
}


/* =========================
   ADMIN PANEL
========================= */

function openAdminPanel() {

  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) return;


  const current =
    users.find(
      x =>
        x.username === currentUser
    );


  const isSuper =
    current &&
    current.role === "super";


  body.innerHTML = `

    <div class="admin-panel">

      <h2>
        🛡️ NOX Admin Panel
      </h2>


      <p>
        Logged in:
        <strong>
          ${escapeHTML(currentUser)}
        </strong>
      </p>


      <hr>


      <h3>
        ➕ Add Anime
      </h3>


      <div class="admin-row">

        <input
          id="newAnimeName"
          placeholder="Anime name"
        >

        <input
          id="newAnimeGenre"
          placeholder="Genre"
        >

      </div>


      <div class="admin-row">

        <input
          id="newAnimeYear"
          type="number"
          placeholder="Year"
        >

        <input
          id="newAnimeRating"
          placeholder="Rating"
        >

      </div>


      <div class="admin-row">

        <input
          id="newAnimePoster"
          value="slime-s4.jpg"
          placeholder="Poster filename"
        >

        <select id="newAnimePremium">

          <option value="false">
            Free
          </option>

          <option value="true">
            Premium
          </option>

        </select>

      </div>


      <button
        onclick="addAnime()">

        + Add Anime

      </button>


      <hr>


      <h3>
        📚 Anime List
      </h3>


      <div class="admin-list">

        ${anime.map(item => `

          <div class="admin-item">

            <span>
              ${escapeHTML(item.name)}
            </span>

            <button
              onclick="deleteAnime(${item.id})"
              style="
                background:#b9273d;
              ">

              Delete

            </button>

          </div>

        `).join("")}

      </div>


      ${
        isSuper
          ? `

            <hr>

            <h3>
              👑 Admin Management
            </h3>


            <div class="admin-row">

              <input
                id="newAdminUsername"
                placeholder="Admin username"
              >

              <input
                id="newAdminPassword"
                type="password"
                placeholder="Admin password"
              >

            </div>


            <button
              onclick="addAdmin()">

              + Add Admin

            </button>


            <div class="admin-list">

              ${users
                .filter(
                  x =>
                    x.role === "admin" ||
                    x.role === "super"
                )
                .map(user => `

                  <div class="admin-item">

                    <span>
                      ${escapeHTML(user.username)}
                      —
                      ${user.role}
                    </span>

                    ${
                      user.role === "super"
                        ? `<span>👑 Protected</span>`
                        : `
                          <button
                            onclick="deleteAdmin('${escapeHTML(user.username)}')"
                            style="
                              background:#b9273d;
                            ">
                            Remove
                          </button>
                        `
                    }

                  </div>

                `).join("")}

            </div>

          `
          : ""
      }

    </div>

  `;


  modal.classList.remove(
    "hidden"
  );
}


/* =========================
   ADD ANIME
========================= */

function addAnime() {

  const name =
    $("newAnimeName")
      ?.value.trim();

  const genre =
    $("newAnimeGenre")
      ?.value.trim();

  const year =
    Number(
      $("newAnimeYear")
        ?.value
    ) || new Date().getFullYear();

  const rating =
    $("newAnimeRating")
      ?.value.trim() ||
    "N/A";

  const poster =
    $("newAnimePoster")
      ?.value.trim() ||
    "slime-s4.jpg";

  const premium =
    $("newAnimePremium")
      ?.value === "true";


  if (!name || !genre) {

    alert(
      "Anime name and genre required."
    );

    return;
  }


  const id =
    anime.length
      ? Math.max(
          ...anime.map(
            x => Number(x.id)
          )
        ) + 1
      : 1;


  anime.push({

    id,

    name,

    genre,

    year,

    season: "Season 1",

    rating,

    poster,

    trending: false,

    latest: true,

    premium

  });


  save(
    ANIME_KEY,
    anime
  );


  render();

  openAdminPanel();

  alert(
    "✅ Anime added!"
  );
}


/* =========================
   DELETE ANIME
========================= */

function deleteAnime(id) {

  id = Number(id);


  const item =
    anime.find(
      x => Number(x.id) === id
    );


  if (!item) return;


  if (
    !confirm(
      `Delete ${item.name}?`
    )
  ) {
    return;
  }


  anime =
    anime.filter(
      x =>
        Number(x.id) !== id
    );


  watchlist =
    watchlist.filter(
      x =>
        Number(x) !== id
    );


  save(
    ANIME_KEY,
    anime
  );

  save(
    WATCH_KEY,
    watchlist
  );


  render();

  openAdminPanel();
}


/* =========================
   ADD ADMIN
========================= */

function addAdmin() {

  const current =
    users.find(
      x =>
        x.username === currentUser
    );


  if (
    !current ||
    current.role !== "super"
  ) {

    alert(
      "Only Super Admin can add admins."
    );

    return;
  }


  const username =
    $("newAdminUsername")
      ?.value.trim();

  const password =
    $("newAdminPassword")
      ?.value;


  if (!username || !password) {

    alert(
      "Enter username and password."
    );

    return;
  }


  const exists =
    users.some(
      x =>
        x.username.toLowerCase() ===
        username.toLowerCase()
    );


  if (exists) {

    alert(
      "Username already exists."
    );

    return;
  }


  users.push({

    username,

    password,

    role: "admin"

  });


  save(
    USERS_KEY,
    users
  );


  openAdminPanel();

  alert(
    "✅ Admin added!"
  );
}


/* =========================
   DELETE ADMIN
========================= */

function deleteAdmin(username) {

  const current =
    users.find(
      x =>
        x.username === currentUser
    );


  if (
    !current ||
    current.role !== "super"
  ) {

    alert(
      "Only Super Admin can remove admins."
    );

    return;
  }


  const target =
    users.find(
      x =>
        x.username === username
    );


  if (!target) return;


  if (
    target.role === "super"
  ) {

    alert(
      "❌ Super Admin cannot be removed."
    );

    return;
  }


  if (
    !confirm(
      `Remove ${username}?`
    )
  ) {
    return;
  }


  users =
    users.filter(
      x =>
        x.username !== username
    );


  save(
    USERS_KEY,
    users
  );


  openAdminPanel();
}


/* =====================================================
   MODAL
   ===================================================== */

document.addEventListener(
  "click",
  function(event) {

    const modal =
      $("modal");

    if (
      modal &&
      event.target === modal
    ) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =====================================================
   START
   ===================================================== */

function startNOX() {

  try {

    render();


    const app =
      $("app");

    const loader =
      $("loader");


    if (app) {

      app.classList.remove(
        "hidden"
      );

    }


    if (loader) {

      loader.classList.add(
        "hidden"
      );

    }


    const search =
      $("search");

    if (search) {

      search.addEventListener(
        "input",
        render
      );

    }


    const daily =
      $("dailyBtn");

    if (daily) {

      daily.addEventListener(
        "click",
        claimDaily
      );

    }


    const login =
      $("loginBtn");

    if (login) {

      login.addEventListener(
        "click",
        openLogin
      );

    }


    const admin =
      $("adminBtn");

    if (admin) {

      admin.addEventListener(
        "click",
        openAdmin
      );

    }


    console.log(
      "NOX Anime loaded successfully."
    );

  } catch (error) {

    console.error(
      "NOX ERROR:",
      error
    );


    const loader =
      $("loader");


    if (loader) {

      loader.innerHTML = `

        <div style="
          text-align:center;
          padding:30px;
        ">

          <div style="
            font-size:45px;
          ">
            ⚠️
          </div>

          <h2>
            NOX Anime Error
          </h2>

          <p style="
            color:#8fa3bd;
          ">
            ${escapeHTML(error.message)}
          </p>

          <button
            onclick="location.reload()"
            style="
              padding:12px 25px;
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


/* =========================
   RUN
========================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startNOX
  );

} else {

  startNOX();

     }
