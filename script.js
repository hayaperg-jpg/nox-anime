/* =====================================================
   NOX ANIME
   Matching JavaScript
===================================================== */


/* =========================
   HELPERS
========================= */

const $ = (id) => document.getElementById(id);


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
    name: "Solo Leveling",
    genre: "Action",
    year: 2024,
    season: "Season 2",
    rating: "9.1",
    poster: "slime-s4.jpg",
    trending: true,
    latest: true,
    premium: true
  },

  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Demon Slayer",
    genre: "Fantasy",
    year: 2019,
    season: "Season 4",
    rating: "8.6",
    poster: "slime-s4.jpg",
    trending: true,
    latest: true,
    premium: false
  },

  {
    id: 6,
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
    id: 7,
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
    id: 8,
    name: "Bleach",
    genre: "Action",
    year: 2004,
    season: "TYBW",
    rating: "8.2",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 9,
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
    id: 10,
    name: "My Hero Academia",
    genre: "Superhero",
    year: 2016,
    season: "Season 7",
    rating: "8.0",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 11,
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
    id: 12,
    name: "Chainsaw Man",
    genre: "Action",
    year: 2022,
    season: "Season 1",
    rating: "8.5",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: true
  },

  {
    id: 13,
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
    id: 14,
    name: "Haikyuu!!",
    genre: "Sports",
    year: 2014,
    season: "Complete",
    rating: "8.7",
    poster: "slime-s4.jpg",
    trending: true,
    latest: false,
    premium: false
  },

  {
    id: 15,
    name: "Blue Lock",
    genre: "Sports",
    year: 2022,
    season: "Season 2",
    rating: "8.3",
    poster: "slime-s4.jpg",
    trending: false,
    latest: true,
    premium: false
  },

  {
    id: 16,
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
    id: 17,
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
    id: 18,
    name: "Frieren",
    genre: "Fantasy",
    year: 2023,
    season: "Season 1",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: true,
    latest: true,
    premium: false
  },

  {
    id: 19,
    name: "Hunter x Hunter",
    genre: "Adventure",
    year: 2011,
    season: "Complete",
    rating: "9.0",
    poster: "slime-s4.jpg",
    trending: true,
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
    trending: true,
    latest: true,
    premium: true
  }

];


/* =========================
   DATA
========================= */

let anime = loadAnime();

let coins = Number(
  localStorage.getItem(COINS_KEY) || 10
);

let watchlist = JSON.parse(
  localStorage.getItem(WATCH_KEY) || "[]"
);

let premiumUntil = Number(
  localStorage.getItem(PREMIUM_KEY) || 0
);

let users = JSON.parse(
  localStorage.getItem(USERS_KEY) || "[]"
);


/* =========================
   DEFAULT USERS
========================= */

if (!users.length) {

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

  saveUsers();
}


/* =========================
   SAVE FUNCTIONS
========================= */

function saveCoins() {

  localStorage.setItem(
    COINS_KEY,
    coins
  );

}

function saveWatchlist() {

  localStorage.setItem(
    WATCH_KEY,
    JSON.stringify(watchlist)
  );

}

function savePremium() {

  localStorage.setItem(
    PREMIUM_KEY,
    premiumUntil
  );

}

function saveUsers() {

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

}

function saveAnime() {

  localStorage.setItem(
    ANIME_KEY,
    JSON.stringify(anime)
  );

}


/* =========================
   LOAD ANIME
========================= */

function loadAnime() {

  try {

    const saved =
      localStorage.getItem(ANIME_KEY);

    if (saved) {

      const data = JSON.parse(saved);

      if (Array.isArray(data) && data.length) {
        return data;
      }

    }

  } catch (error) {

    console.log(error);

  }

  return defaultAnime;

}


/* =========================
   RENDER
========================= */

function render() {

  const query =
    ($("search")?.value || "")
      .trim()
      .toLowerCase();

  let filtered = anime.filter(item => {

    return (
      item.name.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query)
    );

  });

  renderGrid(
    $("trendingGrid"),
    filtered.filter(a => a.trending)
  );

  renderGrid(
    $("latestGrid"),
    filtered.filter(a => a.latest)
  );

  renderWatchlist();

  renderGenres();

  updateCoins();

  updatePremium();

}


/* =========================
   GRID
========================= */

function renderGrid(container, list) {

  if (!container) return;

  if (!list.length) {

    container.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:30px;
        color:#71839a;
        text-align:center;
      ">
        No anime found.
      </div>
    `;

    return;
  }


  container.innerHTML = list.map(item => {

    return `

      <article
        class="anime-card"
        onclick="openAnime(${item.id})">

        <img
          class="poster"
          src="${item.poster || "slime-s4.jpg"}"
          alt="${escapeHTML(item.name)}"
          onerror="this.src='slime-s4.jpg'"
        >

        <div class="card-info">

          <h3>
            ${escapeHTML(item.name)}
          </h3>

          <div class="card-meta">

            ⭐ <span class="rating">
              ${item.rating}
            </span>

            • ${escapeHTML(item.genre)}
            • ${item.year}

          </div>

        </div>

      </article>

    `;

  }).join("");

}


/* =========================
   WATCHLIST
========================= */

function renderWatchlist() {

  const grid = $("watchGrid");

  if (!grid) return;

  const list = anime.filter(
    item => watchlist.includes(item.id)
  );

  if (!list.length) {

    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        padding:25px;
        color:#71839a;
      ">
        Your watchlist is empty.
      </div>
    `;

    return;
  }

  renderGrid(grid, list);

}


function toggleWatchlist(id) {

  if (watchlist.includes(id)) {

    watchlist =
      watchlist.filter(
        item => item !== id
      );

  } else {

    watchlist.push(id);

  }

  saveWatchlist();

  render();

}


/* =========================
   GENRES
========================= */

function renderGenres() {

  const box = $("genresGrid");

  if (!box) return;

  const genres = [
    ...new Set(
      anime.map(item => item.genre)
    )
  ];

  box.innerHTML =
    genres.map(genre => {

      return `
        <button
          class="genre-btn"
          onclick="filterGenre('${escapeAttribute(genre)}')">
          ${escapeHTML(genre)}
        </button>
      `;

    }).join("");

}


function filterGenre(genre) {

  const results =
    anime.filter(
      item => item.genre === genre
    );

  $("trendingGrid").innerHTML = "";

  renderGrid(
    $("trendingGrid"),
    results
  );

  document
    .getElementById("trending")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================
   SHOW ALL
========================= */

function showAll() {

  renderGrid(
    $("trendingGrid"),
    anime
  );

}


/* =========================
   COINS
========================= */

function updateCoins() {

  if ($("coins")) {
    $("coins").textContent = coins;
  }

  saveCoins();

}


function claimDaily() {

  const today =
    new Date().toISOString().slice(0,10);

  const last =
    localStorage.getItem(DAILY_KEY);

  if (last === today) {

    alert(
      "Daily coins already claimed today."
    );

    return;
  }

  coins += 10;

  localStorage.setItem(
    DAILY_KEY,
    today
  );

  saveCoins();

  updateCoins();

  alert(
    "🎉 You received 10 free coins!"
  );

}


/* =========================
   PREMIUM
========================= */

function isPremium() {

  return (
    premiumUntil &&
    Date.now() < premiumUntil
  );

}


function updatePremium() {

  const status =
    $("premiumStatus");

  if (!status) return;

  if (isPremium()) {

    const days =
      Math.ceil(
        (premiumUntil - Date.now()) /
        86400000
      );

    status.innerHTML =
      `👑 Premium active — ${days} day(s) remaining.`;

  } else {

    status.innerHTML =
      "Free account";

  }

}


function redeemPremium(cost, days) {

  if (coins < cost) {

    alert(
      `You need ${cost} coins. You currently have ${coins}.`
    );

    return;

  }

  coins -= cost;

  const base =
    isPremium()
      ? premiumUntil
      : Date.now();

  premiumUntil =
    base + days * 86400000;

  saveCoins();
  savePremium();

  updateCoins();
  updatePremium();

  alert(
    `👑 Premium activated for ${days} days!`
  );

}


/* =========================
   OPEN ANIME
========================= */

function openAnime(id) {

  const item =
    anime.find(
      animeItem => animeItem.id === id
    );

  if (!item) return;


  if (item.premium && !isPremium()) {

    alert(
      "👑 This anime requires NOX Premium."
    );

    document
      .getElementById("premium")
      .scrollIntoView({
        behavior: "smooth"
      });

    return;

  }


  $("modalBody").innerHTML = `

    <h2 class="modal-title">
      ${escapeHTML(item.name)}
    </h2>

    <p style="color:#8092a8">
      ${escapeHTML(item.genre)}
      •
      ${item.year}
      •
      ${escapeHTML(item.season)}
    </p>

    <video
      id="player"
      class="real-player"
      controls
      playsinline
      preload="metadata">

      <source
        id="videoSource"
        src=""
        type="video/mp4">

      Your browser does not support HTML5 video.

    </video>

    <div
      style="
        margin-top:12px;
        padding:12px;
        border-radius:10px;
        background:#09192b;
        color:#8296ad;
        font-size:13px;
      ">

      🎬 Add your authorized MP4 video URL
      in <b>VIDEO_URLS</b> inside script.js.

    </div>

    <div class="player-controls">

      <select id="qualitySelect"
        onchange="changeQuality(this.value)">

        <option value="auto">
          Auto Quality
        </option>

        <option value="720p">
          720p HD
        </option>

        <option value="1080p">
          1080p Full HD
        </option>

        <option value="1440p">
          1440p QHD
        </option>

        <option value="4k">
          4K Ultra HD
        </option>

      </select>


      <select id="audioSelect"
        onchange="changeAudio(this.value)">

        <option>
          Japanese / Original
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


    <div class="modal-actions">

      <button
        onclick="toggleWatchlist(${item.id})">

        ❤️ Watchlist

      </button>


      <button
        class="blue"
        onclick="downloadAnime(${item.id})">

        ⬇ Download

      </button>

    </div>

  `;


  $("modal").classList.remove("hidden");

}


/* =========================
   VIDEO URLS
========================= */

/*
  Yahan sirf apni authorized video URLs lagani hain.

  Example:

  1: {
    auto: "https://example.com/slime.mp4"
  }

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


/* =========================
   QUALITY
========================= */

function changeQuality(quality) {

  const item =
    getCurrentAnimeFromModal();

  if (!item) return;

  const urls =
    VIDEO_URLS[item.id];

  if (!urls) {

    alert(
      "No authorized video URL has been added yet."
    );

    return;
  }

  const url =
    urls[quality] || urls.auto;

  if (!url) {

    alert(
      `No ${quality} video URL is configured.`
    );

    return;
  }

  const player = $("player");

  if (!player) return;

  const currentTime =
    player.currentTime || 0;

  player.src = url;

  player.currentTime =
    currentTime;

  player.play().catch(() => {});

}


function getCurrentAnimeFromModal() {

  const title =
    document.querySelector(
      ".modal-title"
    )?.textContent;

  if (!title) return null;

  return anime.find(
    item =>
      item.name.trim() ===
      title.trim()
  );

}


/* =========================
   AUDIO
========================= */

function changeAudio(language) {

  alert(
    `${language} audio selected. Real audio switching requires an authorized multi-audio stream or separate authorized audio/video source.`
  );

}


/* =========================
   DOWNLOAD
========================= */

function downloadAnime(id) {

  const urls =
    VIDEO_URLS[id];

  if (!urls || !urls.auto) {

    alert(
      "No authorized downloadable video URL has been configured."
    );

    return;
  }

  const link =
    document.createElement("a");

  link.href =
    urls.auto;

  link.download =
    "NOX-Anime.mp4";

  link.target =
    "_blank";

  document.body.appendChild(link);

  link.click();

  link.remove();

}


/* =========================
   MODAL
========================= */

function closeModal() {

  const player =
    $("player");

  if (player) {

    player.pause();

  }

  $("modal")
    .classList.add("hidden");

}


$("modal")?.addEventListener(
  "click",
  function(event) {

    if (
      event.target === $("modal")
    ) {

      closeModal();

    }

  }
);


/* =========================
   LOGIN
========================= */

function login() {

  const username =
    prompt("Username:");

  if (!username) return;

  const password =
    prompt("Password:");

  if (!password) return;

  const user =
    users.find(
      item =>
        item.username === username &&
        item.password === password
    );

  if (!user) {

    alert(
      "❌ Wrong username or password."
    );

    return;

  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  alert(
    `Welcome ${user.username}!`
  );

  updateLoginButton();

}


function updateLoginButton() {

  const button =
    $("loginBtn");

  if (!button) return;

  const current =
    JSON.parse(
      localStorage.getItem(
        CURRENT_USER_KEY
      ) || "null"
    );

  if (current) {

    button.textContent =
      current.username;

  } else {

    button.textContent =
      "Login";

  }

}


/* =========================
   ADMIN LOGIN
========================= */

function adminLogin() {

  const username =
    prompt("Admin username:");

  if (!username) return;

  const password =
    prompt("Admin password:");

  if (!password) return;

  const user =
    users.find(
      item =>
        item.username === username &&
        item.password === password &&
        (
          item.role === "admin" ||
          item.role === "super"
        )
    );

  if (!user) {

    alert(
      "❌ Admin login failed."
    );

    return;

  }

  openAdminPanel(user);

}


/* =========================
   ADMIN PANEL
========================= */

function openAdminPanel(user) {

  $("modalBody").innerHTML = `

    <div class="admin-panel">

      <h2>
        ⚙ NOX Admin Panel
      </h2>

      <p style="color:#8296aa">
        Logged in as:
        <b>${escapeHTML(user.username)}</b>
        (${escapeHTML(user.role)})
      </p>


      <hr style="
        border-color:#18324d;
        margin:20px 0;
      ">


      <h3>
        ➕ Add Anime
      </h3>

      <div class="admin-row">

        <input
          id="adminName"
          placeholder="Anime name"
        >

        <input
          id="adminGenre"
          placeholder="Genre"
        >

        <input
          id="adminYear"
          placeholder="Year"
          type="number"
        >

        <input
          id="adminRating"
          placeholder="Rating"
        >

        <input
          id="adminPoster"
          placeholder="Poster filename e.g. slime-s4.jpg"
        >

        <select id="adminPremium">

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

        Add Anime

      </button>


      <div class="admin-list">

        <h3>
          📚 Current Anime
        </h3>

        ${anime.map(item => `

          <div class="admin-item">

            <span>
              ${escapeHTML(item.name)}
            </span>

            <button
              onclick="deleteAnime(${item.id})">

              Delete

            </button>

          </div>

        `).join("")}

      </div>


      ${
        user.role === "super"
        ? `

          <hr style="
            border-color:#18324d;
            margin:25px 0;
          ">

          <h3>
            👑 Create Admin
          </h3>

          <div class="admin-row">

            <input
              id="newAdminUser"
              placeholder="Username"
            >

            <input
              id="newAdminPass"
              placeholder="Password"
            >

          </div>

          <button
            onclick="createAdmin()">

            Create Admin

          </button>

        `
        : ""
      }

    </div>

  `;

  $("modal")
    .classList.remove("hidden");

}


/* =========================
   ADD ANIME
========================= */

function addAnime() {

  const name =
    $("adminName").value.trim();

  const genre =
    $("adminGenre").value.trim() ||
    "Action";

  const year =
    Number(
      $("adminYear").value
    ) || 2026;

  const rating =
    $("adminRating").value.trim() ||
    "8.0";

  const poster =
    $("adminPoster").value.trim() ||
    "slime-s4.jpg";

  const premium =
    $("adminPremium").value === "true";


  if (!name) {

    alert(
      "Anime name required."
    );

    return;

  }


  const newAnime = {

    id:
      Date.now(),

    name,

    genre,

    year,

    season:
      "New",

    rating,

    poster,

    trending:
      true,

    latest:
      true,

    premium

  };


  anime.unshift(
    newAnime
  );

  saveAnime();

  render();

  alert(
    "✅ Anime added!"
  );

  closeModal();

}


/* =========================
   DELETE ANIME
========================= */

function deleteAnime(id) {

  const item =
    anime.find(
      animeItem =>
        animeItem.id === id
    );

  if (!item) return;

  if (
    !confirm(
      `Delete ${item.name}?`
    )
  ) return;


  anime =
    anime.filter(
      animeItem =>
        animeItem.id !== id
    );

  saveAnime();

  render();

  alert(
    "Anime deleted."
  );

}


/* =========================
   CREATE ADMIN
========================= */

function createAdmin() {

  const username =
    $("newAdminUser")
      ?.value.trim();

  const password =
    $("newAdminPass")
      ?.value.trim();


  if (!username || !password) {

    alert(
      "Username and password required."
    );

    return;

  }


  if (
    users.some(
      user =>
        user.username === username
    )
  ) {

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


  saveUsers();

  alert(
    "✅ New admin created!"
  );

}


/* =========================
   ESCAPE
========================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function escapeAttribute(value) {

  return String(value)
    .replaceAll("'", "\\'")
    .replaceAll('"', "&quot;");

}


/* =========================
   SEARCH
========================= */

$("search")?.addEventListener(
  "input",
  render
);


/* =========================
   BUTTONS
========================= */

$("dailyBtn")?.addEventListener(
  "click",
  claimDaily
);

$("loginBtn")?.addEventListener(
  "click",
  login
);

$("adminBtn")?.addEventListener(
  "click",
  adminLogin
);


/* =========================
   START APP
========================= */

function startApp() {

  try {

    render();

    updateLoginButton();

    $("loader")
      ?.classList.add("hidden");

    $("app")
      ?.classList.remove("hidden");

  } catch (error) {

    console.error(
      "NOX Anime Error:",
      error
    );

    $("loader").innerHTML = `

      <div class="loader-logo">
        NOX<span>ANIME</span>
      </div>

      <p style="color:#ff7070">
        Something went wrong.
      </p>

      <button
        onclick="location.reload()"
        style="
          padding:12px 20px;
          background:#168cff;
          color:white;
          border:0;
          border-radius:8px;
        ">

        Reload

      </button>

    `;

  }

}


/* =========================
   FAILSAFE LOADER
========================= */

/*
  Agar kisi browser mein koi
  minor error aaye to website
  permanently loading par nahi
  rukegi.
*/

setTimeout(() => {

  if (
    $("loader") &&
    !$("loader").classList.contains("hidden")
  ) {

    try {

      render();

      $("loader")
        .classList.add("hidden");

      $("app")
        .classList.remove("hidden");

    } catch (error) {

      console.error(error);

    }

  }

}, 2500);


/* =========================
   RUN
========================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startApp
  );

} else {

  startApp();

     }
