/* =========================================================
   NOX ANIME
   Frontend Demo
   ========================================================= */


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const STORAGE_KEY = "nox_anime_v4";
const WATCH_KEY = "nox_watchlist";
const USERS_KEY = "nox_users";
const COINS_KEY = "nox_coins";
const DAILY_KEY = "nox_daily";
const PREMIUM_KEY = "nox_premium";
const CURRENT_USER_KEY = "nox_current_user";


/* =========================================================
   DEFAULT ANIME DATABASE
   ========================================================= */

const defaultAnime = [

  {
    name: "Solo Leveling",
    genre: "Action",
    rating: "9.1",
    year: "2024",
    trend: true,
    latest: true,

    sources: {
      "Original": {
        "Auto": "",
        "720p": "",
        "1080p": "",
        "1440p": "",
        "4K": ""
      },

      "Hindi": {
        "Auto": "",
        "720p": "",
        "1080p": ""
      },

      "English": {
        "Auto": "",
        "720p": "",
        "1080p": ""
      }
    },

    download: {
      "Auto": ""
    }
  },


  {
    name: "One Piece",
    genre: "Adventure",
    rating: "9.0",
    year: "1999",
    trend: true
  },


  {
    name: "Jujutsu Kaisen",
    genre: "Action",
    rating: "8.8",
    year: "2020",
    trend: true,
    latest: true
  },


  {
    name: "Demon Slayer",
    genre: "Fantasy",
    rating: "8.6",
    year: "2019",
    trend: true
  },


  {
    name: "Attack on Titan",
    genre: "Dark",
    rating: "9.0",
    year: "2013",
    trend: true
  },


  {
    name: "Naruto",
    genre: "Adventure",
    rating: "8.4",
    year: "2002",
    latest: true
  },


  {
    name: "Bleach",
    genre: "Action",
    rating: "8.2",
    year: "2004"
  },


  {
    name: "Dragon Ball Super",
    genre: "Action",
    rating: "8.0",
    year: "2015",
    latest: true
  },


  {
    name: "My Hero Academia",
    genre: "Superhero",
    rating: "8.0",
    year: "2016"
  },


  {
    name: "Black Clover",
    genre: "Fantasy",
    rating: "8.2",
    year: "2017",
    latest: true
  },


  {
    name: "Chainsaw Man",
    genre: "Action",
    rating: "8.5",
    year: "2022",
    trend: true
  },


  {
    name: "Spy x Family",
    genre: "Comedy",
    rating: "8.5",
    year: "2022",
    latest: true
  },


  {
    name: "Haikyuu!!",
    genre: "Sports",
    rating: "8.7",
    year: "2014"
  },


  {
    name: "Blue Lock",
    genre: "Sports",
    rating: "8.3",
    year: "2022"
  },


  {
    name: "Death Note",
    genre: "Mystery",
    rating: "8.9",
    year: "2006"
  },


  {
    name: "Tokyo Ghoul",
    genre: "Dark",
    rating: "7.7",
    year: "2014"
  },


  {
    name: "Frieren",
    genre: "Fantasy",
    rating: "9.0",
    year: "2023",
    latest: true
  },


  {
    name: "Hunter x Hunter",
    genre: "Adventure",
    rating: "9.0",
    year: "2011"
  },


  {
    name: "Mob Psycho 100",
    genre: "Action",
    rating: "8.6",
    year: "2016"
  },


  {
    name: "Vinland Saga",
    genre: "Historical",
    rating: "8.8",
    year: "2019",
    latest: true
  }

];



/* =========================================================
   LOAD DATA
   ========================================================= */

let anime = JSON.parse(
  localStorage.getItem(STORAGE_KEY)
);

if (!Array.isArray(anime)) {
  anime = defaultAnime;
}


let watchlist = JSON.parse(
  localStorage.getItem(WATCH_KEY) || "[]"
);


let users = JSON.parse(
  localStorage.getItem(USERS_KEY)
);


if (!Array.isArray(users)) {

  users = [
    {
      name: "Super Admin",
      role: "super"
    }
  ];

}


let currentUser =
  localStorage.getItem(
    CURRENT_USER_KEY
  ) || "Guest";


let coins =
  Number(
    localStorage.getItem(COINS_KEY) || 0
  );



/* =========================================================
   SAVE FUNCTIONS
   ========================================================= */

function saveAnime() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(anime)
  );

}


function saveWatchlist() {

  localStorage.setItem(
    WATCH_KEY,
    JSON.stringify(watchlist)
  );

}


function saveUsers() {

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

}


function saveCoins() {

  localStorage.setItem(
    COINS_KEY,
    coins
  );

}



/* =========================================================
   SECURITY / HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(
      /[&<>"']/g,
      function (character) {

        const map = {

          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"

        };

        return map[character];

      }
    );

}



/* =========================================================
   SAFE NAME
   ========================================================= */

function safeName(name) {

  return String(name)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");

}



/* =========================================================
   POSTER
   ========================================================= */

function posterStyle(name) {

  const safeText =
    String(name)
      .replace(/[<>&'"]/g, "")
      .substring(0, 18);

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="500"
     height="700">

  <defs>

    <linearGradient
      id="g"
      x2="1"
      y2="1">

      <stop
        stop-color="#7c3aed"/>

      <stop
        offset="1"
        stop-color="#db2777"/>

    </linearGradient>

  </defs>

  <rect
    width="100%"
    height="100%"
    fill="#111"/>

  <circle
    cx="390"
    cy="130"
    r="180"
    fill="url(#g)"
    opacity=".7"/>

  <text
    x="35"
    y="610"
    fill="white"
    font-size="42"
    font-family="Arial"
    font-weight="bold">

    ${safeText}

  </text>

</svg>
`;

  return `
background:
linear-gradient(
  145deg,
  #2a1747,
  #111827
),
url("data:image/svg+xml,
${encodeURIComponent(svg)}
")
center/cover;
`;

}



/* =========================================================
   ANIME CARD
   ========================================================= */

function createCard(item) {

  const name =
    escapeHTML(item.name);

  const rawName =
    safeName(item.name);


  const saved =
    watchlist.includes(item.name);


  return `

<article class="card">

  <div
    class="poster"
    style="${posterStyle(item.name)}"
  >

    <b>
      ${name}
    </b>

  </div>


  <div class="card-body">

    <h3>
      ${name}
    </h3>

    <div class="meta">

      ★ ${escapeHTML(item.rating || "—")}

      • ${escapeHTML(item.year || "—")}

      • ${escapeHTML(item.genre || "Anime")}

    </div>


    <button
      onclick="openAnime('${rawName}')"
    >

      ▶ Watch

    </button>


    <button
      onclick="toggleWatch('${rawName}')"
    >

      ${saved
        ? "✓ In Watchlist"
        : "＋ Watchlist"}

    </button>

  </div>

</article>

`;

}



/* =========================================================
   RENDER
   ========================================================= */

function renderAnime(list = anime) {

  const searchBox =
    document.getElementById("search");


  const query =
    (searchBox.value || "")
      .trim()
      .toLowerCase();


  if (query) {

    list = list.filter(
      item => {

        const text =
          (
            item.name +
            " " +
            item.genre +
            " " +
            item.year
          ).toLowerCase();

        return text.includes(query);

      }
    );

  }


  const trending =
    list
      .filter(item => item.trend)
      .slice(0, 10);


  const latest =
    list
      .filter(item => item.latest)
      .slice(0, 10);


  const saved =
    list.filter(
      item =>
        watchlist.includes(item.name)
    );


  document.getElementById(
    "trendingGrid"
  ).innerHTML =

    trending.length
      ? trending.map(createCard).join("")
      : `<div class="empty">No anime found.</div>`;


  document.getElementById(
    "latestGrid"
  ).innerHTML =

    latest.length
      ? latest.map(createCard).join("")
      : `<div class="empty">No anime found.</div>`;


  document.getElementById(
    "watchGrid"
  ).innerHTML =

    saved.length
      ? saved.map(createCard).join("")
      : `<div class="empty">
          Your watchlist is empty.
         </div>`;


  renderGenres();


  document.getElementById(
    "coins"
  ).textContent = coins;


  updatePremium();

}



/* =========================================================
   SEARCH
   ========================================================= */

function runSearch() {

  renderAnime(anime);

}



/* =========================================================
   GENRES
   ========================================================= */

function renderGenres() {

  const genres = [
    ...new Set(
      anime.map(
        item => item.genre
      )
    )
  ];


  document.getElementById(
    "genresGrid"
  ).innerHTML =

    genres.map(
      genre => `

      <button
        class="genre"
        onclick="filterGenre('${safeName(genre)}')"
      >

        ${escapeHTML(genre)}

        <small>→</small>

      </button>

      `
    ).join("");

}



/* =========================================================
   GENRE FILTER
   ========================================================= */

function filterGenre(genre) {

  document.getElementById(
    "search"
  ).value = genre;


  renderAnime(anime);


  location.hash = "latest";

}



/* =========================================================
   WATCHLIST
   ========================================================= */

function toggleWatch(name) {

  if (watchlist.includes(name)) {

    watchlist =
      watchlist.filter(
        item => item !== name
      );

  } else {

    watchlist.push(name);

  }


  saveWatchlist();

  renderAnime(anime);

}



/* =========================================================
   MODAL
   ========================================================= */

function openModal() {

  document
    .getElementById("modal")
    .classList.add("show");

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.remove("show");

}



/* =========================================================
   OPEN ANIME
   ========================================================= */

function openAnime(name) {

  const item =
    anime.find(
      animeItem =>
        animeItem.name === name
    );


  if (!item) {

    alert("Anime not found.");

    return;

  }


  const escaped =
    escapeHTML(item.name);


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <h2>
      ${escaped}
    </h2>


    <p class="meta">

      ★ ${escapeHTML(item.rating || "—")}

      • ${escapeHTML(item.genre || "Anime")}

      • ${escapeHTML(item.year || "—")}

    </p>


    <video
      id="player"
      class="player"
      controls
      preload="metadata"
    ></video>


    <div class="controls">

      <label>

        Language

        <select id="languageSelect">

          <option>
            Original
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

      </label>


      <label>

        Quality

        <select id="qualitySelect">

          <option>
            Auto
          </option>

          <option>
            720p
          </option>

          <option>
            1080p
          </option>

          <option>
            1440p
          </option>

          <option>
            4K
          </option>

        </select>

      </label>


      <label>

        Episode

        <select id="episodeSelect">

          <option>
            Episode 1
          </option>

          <option>
            Episode 2
          </option>

          <option>
            Episode 3
          </option>

          <option>
            Episode 4
          </option>

          <option>
            Episode 5
          </option>

          <option>
            Episode 6
          </option>

        </select>

      </label>

    </div>


    <div
      style="
        display:flex;
        gap:8px;
        margin-top:15px;
        flex-wrap:wrap;
      "
    >

      <button
        class="primary"
        onclick="loadConfiguredVideo('${safeName(name)}')"
      >

        ▶ Load Video

      </button>


      <button
        class="ghost"
        onclick="
          toggleWatch('${safeName(name)}');
          closeModal();
        "
      >

        ＋ Watchlist

      </button>


      <a
        id="downloadBtn"
        class="ghost"
        target="_blank"
        rel="noopener"
        style="padding:12px"
      >

        ⬇ Download

      </a>

    </div>


    <p
      class="meta"
      style="margin-top:15px"
    >

      Only authorized video URLs
      configured by the content owner
      will play/download.

    </p>

  `;


  openModal();

}



/* =========================================================
   VIDEO LOADER
   ========================================================= */

function loadConfiguredVideo(name) {

  const item =
    anime.find(
      animeItem =>
        animeItem.name === name
    );


  if (!item) {

    alert("Anime not found.");

    return;

  }


  const language =
    document.getElementById(
      "languageSelect"
    ).value;


  const quality =
    document.getElementById(
      "qualitySelect"
    ).value;


  let source = "";


  /*
    Source priority:

    Selected language + quality
    Selected language + Auto
    Original + quality
    Original + Auto
  */


  if (
    item.sources &&
    item.sources[language]
  ) {

    source =
      item.sources[language][quality] ||
      item.sources[language]["Auto"] ||
      "";

  }


  if (
    !source &&
    item.sources &&
    item.sources["Original"]
  ) {

    source =
      item.sources["Original"][quality] ||
      item.sources["Original"]["Auto"] ||
      "";

  }


  const player =
    document.getElementById("player");


  const download =
    document.getElementById(
      "downloadBtn"
    );


  if (!source) {

    player.removeAttribute("src");

    player.load();

    download.removeAttribute("href");


    alert(
      "इस language/quality के लिए अभी authorized video URL configure नहीं किया गया है."
    );

    return;

  }


  player.src = source;

  player.load();


  player.play().catch(
    () => {}
  );


  let downloadURL = "";


  if (
    item.download &&
    item.download[quality]
  ) {

    downloadURL =
      item.download[quality];

  }


  if (
    !downloadURL &&
    item.download &&
    item.download["Auto"]
  ) {

    downloadURL =
      item.download["Auto"];

  }


  if (!downloadURL) {

    downloadURL = source;

  }


  download.href =
    downloadURL;

}



/* =========================================================
   PREMIUM
   ========================================================= */

function buyPremium(days) {

  const expiry =
    Date.now() +
    days *
    24 *
    60 *
    60 *
    1000;


  localStorage.setItem(
    PREMIUM_KEY,
    String(expiry)
  );


  updatePremium();


  alert(
    "Demo Premium activated!"
  );

}



function updatePremium() {

  const expiry =
    Number(
      localStorage.getItem(
        PREMIUM_KEY
      ) || 0
    );


  const status =
    document.getElementById(
      "premiumStatus"
    );


  if (!status) return;


  if (expiry > Date.now()) {

    status.textContent =
      "✓ Premium active until " +
      new Date(
        expiry
      ).toLocaleDateString();

  } else {

    status.textContent =
      "Free plan";

  }

}



/* =========================================================
   DAILY COINS
   ========================================================= */

function claimDaily() {

  const today =
    new Date()
      .toISOString()
      .slice(0, 10);


  const last =
    localStorage.getItem(
      DAILY_KEY
    );


  if (last === today) {

    alert(
      "Daily reward already claimed today."
    );

    return;

  }


  coins += 10;


  localStorage.setItem(
    DAILY_KEY,
    today
  );


  saveCoins();


  renderAnime(anime);


  alert(
    "+10 coins added!"
  );

}



/* =========================================================
   LOGIN
   ========================================================= */

function openLogin() {

  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <h2>
      Login / Signup
    </h2>


    <div class="login-form">

      <input
        id="username"
        placeholder="Username"
        autocomplete="off"
      >


      <input
        id="password"
        type="password"
        placeholder="Password"
      >


      <button
        onclick="doLogin()"
      >

        Continue

      </button>


      <p class="meta">

        Demo only:
        accounts are stored in
        this browser.

        <br><br>

        Do not use real passwords.

      </p>

    </div>

  `;


  openModal();

}



function doLogin() {

  const input =
    document.getElementById(
      "username"
    );


  const name =
    (input.value || "")
      .trim();


  if (!name) {

    alert(
      "Username enter करें."
    );

    return;

  }


  let user =
    users.find(
      item =>
        item.name.toLowerCase() ===
        name.toLowerCase()
    );


  if (!user) {

    user = {

      name: name,

      role: "user"

    };


    users.push(user);

    saveUsers();

  }


  currentUser =
    user.name;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  document.getElementById(
    "loginBtn"
  ).textContent =
    currentUser;


  closeModal();

}



/* =========================================================
   CURRENT USER
   ========================================================= */

function getCurrentUser() {

  return users.find(
    user =>
      user.name === currentUser
  );

}



/* =========================================================
   SUPER ADMIN CHECK
   ========================================================= */

function isSuperAdmin() {

  const user =
    getCurrentUser();


  return (
    user &&
    user.role === "super"
  );

}



/* =========================================================
   ADMIN PANEL
   ========================================================= */

function openAdminPanel() {

  if (!isSuperAdmin()) {

    alert(
      "Demo Super Admin only. Login as Super Admin first."
    );

    return;

  }


  renderAdminPanel();

}



/* =========================================================
   ADMIN PANEL UI
   ========================================================= */

function renderAdminPanel() {

  const animeRows =
    anime.map(
      (item, index) => `

        <div class="admin-item">

          <span>
            ${escapeHTML(item.name)}
          </span>

          <button
            onclick="deleteAnime(${index})"
          >

            Delete

          </button>

        </div>

      `
    ).join("");


  const userRows =
    users.map(
      (user, index) => {

        if (
          user.role === "super"
        ) {

          return `

            <div class="admin-item">

              <span>
                ${escapeHTML(user.name)}
                — Super Admin
              </span>

              <small>
                Protected
              </small>

            </div>

          `;

        }


        return `

          <div class="admin-item">

            <span>

              ${escapeHTML(user.name)}
              —
              ${escapeHTML(user.role)}

            </span>


            <button
              onclick="toggleAdminRole(${index})"
            >

              ${
                user.role === "admin"
                  ? "Make User"
                  : "Make Admin"
              }

            </button>

          </div>

        `;

      }
    ).join("");


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <h2>
      NOX Admin Panel
    </h2>


    <p class="meta">

      Logged in as:
      <b>${escapeHTML(currentUser)}</b>

    </p>


    <h3>
      Add Anime
    </h3>


    <div class="admin-form">

      <input
        id="adminAnimeName"
        placeholder="Anime name"
      >


      <input
        id="adminGenre"
        placeholder="Genre"
      >


      <input
        id="adminRating"
        placeholder="Rating"
      >


      <input
        id="adminYear"
        placeholder="Year"
      >


      <input
        id="adminLanguage"
        placeholder="Language e.g. Hindi"
      >


      <input
        id="adminQuality"
        placeholder="Quality e.g. 1080p"
      >


      <input
        id="adminVideo"
        placeholder="Authorized video URL"
      >


      <input
        id="adminDownload"
        placeholder="Authorized download URL"
      >


      <button
        onclick="addAnimeFromAdmin()"
      >

        + Add Anime

      </button>

    </div>


    <div class="admin-list">

      <h3>
        Anime Management
      </h3>

      ${animeRows}

    </div>


    <div class="admin-list">

      <h3>
        Users / Admins
      </h3>

      <p class="meta">

        Super Admin cannot be removed.

      </p>

      ${userRows}

    </div>

  `;


  openModal();

}



/* =========================================================
   ADD ANIME
   ========================================================= */

function addAnimeFromAdmin() {

  const name =
    document.getElementById(
      "adminAnimeName"
    ).value.trim();


  if (!name) {

    alert(
      "Anime name enter करें."
    );

    return;

  }


  const genre =
    document.getElementById(
      "adminGenre"
    ).value.trim() ||
    "Anime";


  const rating =
    document.getElementById(
      "adminRating"
    ).value.trim() ||
    "—";


  const year =
    document.getElementById(
      "adminYear"
    ).value.trim() ||
    new Date().getFullYear();


  const language =
    document.getElementById(
      "adminLanguage"
    ).value.trim() ||
    "Original";


  const quality =
    document.getElementById(
      "adminQuality"
    ).value.trim() ||
    "Auto";


  const video =
    document.getElementById(
      "adminVideo"
    ).value.trim();


  const download =
    document.getElementById(
      "adminDownload"
    ).value.trim();


  const newAnime = {

    name: name,

    genre: genre,

    rating: rating,

    year: year,

    latest: true,

    trend: false,

    sources: {},

    download: {}

  };


  if (video) {

    newAnime.sources[
      language
    ] = {};

    newAnime.sources[
      language
    ][quality] = video;

  }


  if (download) {

    newAnime.download[
      quality
    ] = download;

  }


  anime.unshift(
    newAnime
  );


  saveAnime();

  renderAnime(anime);

  renderAdminPanel();


  alert(
    "Anime successfully added!"
  );

}



/* =========================================================
   DELETE ANIME
   ========================================================= */

function deleteAnime(index) {

  const item =
    anime[index];


  if (!item) return;


  const confirmed =
    confirm(
      `Delete "${item.name}"?`
    );


  if (!confirmed) return;


  anime.splice(
    index,
    1
  );


  saveAnime();

  renderAnime(anime);

  renderAdminPanel();

}



/* =========================================================
   USER ↔ ADMIN
   ========================================================= */

function toggleAdminRole(index) {

  if (!isSuperAdmin()) {

    alert(
      "Only Super Admin can change roles."
    );

    return;

  }


  const user =
    users[index];


  if (!user) return;


  if (
    user.role === "super"
  ) {

    return;

  }


  if (
    user.role === "admin"
  ) {

    user.role = "user";

  } else {

    user.role = "admin";

  }


  saveUsers();

  renderAdminPanel();

}



/* =========================================================
   CLOSE MODAL WHEN CLICKING BACKGROUND
   ========================================================= */

document
  .getElementById("modal")
  .addEventListener(
    "click",
    function (event) {

      if (
        event.target === this
      ) {

        closeModal();

      }

    }
  );



/* =========================================================
   HEADER BUTTONS
   ========================================================= */

document
  .getElementById("dailyBtn")
  .addEventListener(
    "click",
    claimDaily
  );


document
  .getElementById("loginBtn")
  .addEventListener(
    "click",
    openLogin
  );


document
  .getElementById("adminBtn")
  .addEventListener(
    "click",
    openAdminPanel
  );



/* =========================================================
   INITIALIZE
   ========================================================= */

window.addEventListener(
  "load",
  function () {

    setTimeout(
      function () {

        const loader =
          document.getElementById(
            "loader"
          );

        if (loader) {

          loader.style.display =
            "none";

        }

      },
      500
    );


    renderAnime(anime);


    const loginButton =
      document.getElementById(
        "loginBtn"
      );


    if (
      currentUser &&
      currentUser !== "Guest"
    ) {

      loginButton.textContent =
        currentUser;

    }


  }
);
