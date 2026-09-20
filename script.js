/* =========================================================
   NOX ANIME — PREMIUM SYSTEM
   ========================================================= */

const KEY = "nox_anime_premium_v1";


/* =========================================================
   DATA
   ========================================================= */

const animeList = [
  {
    title: "Solo Leveling",
    genre: "Action",
    year: "2024",
    episodes: 25,
    rating: "9.1",
    premium: true,
    color: "#168cff"
  },
  {
    title: "One Piece",
    genre: "Adventure",
    year: "1999",
    episodes: 1150,
    rating: "9.0",
    premium: false,
    color: "#0878d1"
  },
  {
    title: "Jujutsu Kaisen",
    genre: "Action",
    year: "2020",
    episodes: 47,
    rating: "8.8",
    premium: true,
    color: "#2457ff"
  },
  {
    title: "Demon Slayer",
    genre: "Action",
    year: "2019",
    episodes: 63,
    rating: "8.7",
    premium: true,
    color: "#008cff"
  },
  {
    title: "Naruto",
    genre: "Adventure",
    year: "2002",
    episodes: 220,
    rating: "8.4",
    premium: false,
    color: "#f28c28"
  },
  {
    title: "Naruto Shippuden",
    genre: "Action",
    year: "2007",
    episodes: 500,
    rating: "8.7",
    premium: false,
    color: "#1b6fff"
  },
  {
    title: "Bleach",
    genre: "Action",
    year: "2004",
    episodes: 366,
    rating: "8.2",
    premium: false,
    color: "#147dff"
  },
  {
    title: "Attack on Titan",
    genre: "Drama",
    year: "2013",
    episodes: 89,
    rating: "9.1",
    premium: true,
    color: "#315b80"
  },
  {
    title: "Dragon Ball Super",
    genre: "Action",
    year: "2015",
    episodes: 131,
    rating: "8.3",
    premium: false,
    color: "#177cff"
  },
  {
    title: "My Hero Academia",
    genre: "Superhero",
    year: "2016",
    episodes: 159,
    rating: "8.0",
    premium: false,
    color: "#168cff"
  },
  {
    title: "Black Clover",
    genre: "Fantasy",
    year: "2017",
    episodes: 170,
    rating: "8.2",
    premium: false,
    color: "#102d64"
  },
  {
    title: "Hunter x Hunter",
    genre: "Adventure",
    year: "2011",
    episodes: 148,
    rating: "9.0",
    premium: true,
    color: "#1576b8"
  },
  {
    title: "Death Note",
    genre: "Mystery",
    year: "2006",
    episodes: 37,
    rating: "8.9",
    premium: false,
    color: "#172033"
  },
  {
    title: "Chainsaw Man",
    genre: "Action",
    year: "2022",
    episodes: 12,
    rating: "8.5",
    premium: true,
    color: "#d53b32"
  },
  {
    title: "Spy x Family",
    genre: "Comedy",
    year: "2022",
    episodes: 37,
    rating: "8.4",
    premium: false,
    color: "#1a82bd"
  },
  {
    title: "Blue Lock",
    genre: "Sports",
    year: "2022",
    episodes: 38,
    rating: "8.3",
    premium: true,
    color: "#086bdb"
  },
  {
    title: "Tokyo Revengers",
    genre: "Drama",
    year: "2021",
    episodes: 50,
    rating: "7.8",
    premium: false,
    color: "#0a315c"
  },
  {
    title: "Haikyuu",
    genre: "Sports",
    year: "2014",
    episodes: 85,
    rating: "8.7",
    premium: false,
    color: "#ff7a00"
  },
  {
    title: "Vinland Saga",
    genre: "Drama",
    year: "2019",
    episodes: 48,
    rating: "8.8",
    premium: true,
    color: "#315d70"
  },
  {
    title: "Mob Psycho 100",
    genre: "Comedy",
    year: "2016",
    episodes: 37,
    rating: "8.6",
    premium: false,
    color: "#5730c8"
  }
];


/* =========================================================
   DEFAULT USER
   ========================================================= */

let state = JSON.parse(
  localStorage.getItem(KEY) || "null"
);

if (!state) {

  state = {
    coins: 10,

    username: null,

    role: "user",

    watchlist: [],

    premiumUntil: 0,

    lastDaily: 0,

    users: [
      {
        username: "superadmin",
        password: "ANIMEADMIN",
        role: "superadmin"
      },
      {
        username: "admin",
        password: "ADMIN123",
        role: "admin"
      }
    ]
  };

  saveState();
}


/* =========================================================
   SAVE
   ========================================================= */

function saveState() {

  localStorage.setItem(
    KEY,
    JSON.stringify(state)
  );
}


/* =========================================================
   DOM
   ========================================================= */

const $ = id => document.getElementById(id);


/* =========================================================
   LOADER
   ========================================================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = $("loader");

    if (loader) {

      loader.style.opacity = "0";
      loader.style.visibility = "hidden";

    }

  }, 700);

});


/* =========================================================
   COINS
   ========================================================= */

function updateCoins() {

  const coins = $("coins");

  if (coins) {

    coins.textContent = state.coins;

  }
}


/* =========================================================
   PREMIUM STATUS
   ========================================================= */

function isPremium() {

  return Date.now() < state.premiumUntil;

}


function updatePremiumStatus() {

  const box = $("premiumStatus");

  if (!box) return;

  if (isPremium()) {

    const days = Math.ceil(
      (state.premiumUntil - Date.now()) /
      86400000
    );

    box.textContent =
      "👑 Premium Active • " +
      days +
      " day(s) remaining";

  } else {

    box.textContent =
      "Free Account • Upgrade to Premium";

  }
}


/* =========================================================
   DAILY REWARD
   ========================================================= */

function dailyReward() {

  const now = new Date();

  const today =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1) +
    "-" +
    now.getDate();

  if (state.lastDaily === today) {

    alert("Daily reward already claimed today.");

    return;
  }

  state.coins += 10;

  state.lastDaily = today;

  saveState();

  updateCoins();

  alert("🎁 +10 coins added!");

}


/* =========================================================
   ANIME CARD
   ========================================================= */

function createAnimeCard(anime) {

  const saved =
    state.watchlist.includes(anime.title);

  return `

    <article
      class="anime-card"
      onclick="openAnime('${escapeJS(anime.title)}')"
    >

      <div
        class="anime-poster"
        style="
          background:
          linear-gradient(
            145deg,
            ${anime.color},
            #050914
          );
        "
      >

        <div class="anime-badge">
          ${anime.premium ? "👑 PREMIUM" : "HD"}
        </div>

        <div class="play-circle">
          ▶
        </div>

        <div
          style="
            position:absolute;
            inset:0;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:42px;
            font-weight:900;
            color:rgba(255,255,255,.9);
            text-shadow:0 4px 20px rgba(0,0,0,.5);
          "
        >
          ${getInitials(anime.title)}
        </div>

      </div>

      <div class="anime-info">

        <div class="anime-title">
          ${anime.title}
        </div>

        <div class="anime-meta">

          <span>
            ${anime.genre}
          </span>

          <span>
            ⭐ ${anime.rating}
          </span>

        </div>

        <div
          class="anime-meta"
          style="margin-top:5px"
        >

          <span>
            ${anime.episodes} Episodes
          </span>

          <span>
            ${saved ? "❤️" : "♡"}
          </span>

        </div>

      </div>

    </article>

  `;
}


/* =========================================================
   INITIALS
   ========================================================= */

function getInitials(title) {

  const words = title
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) {

    return words[0]
      .substring(0, 2)
      .toUpperCase();

  }

  return (
    words[0][0] +
    words[1][0]
  ).toUpperCase();
}


/* =========================================================
   ESCAPE
   ========================================================= */

function escapeJS(text) {

  return text
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}


/* =========================================================
   RENDER TRENDING
   ========================================================= */

function renderTrending(list = animeList) {

  const grid = $("trendingGrid");

  if (!grid) return;

  grid.innerHTML =
    list
      .slice(0, 10)
      .map(createAnimeCard)
      .join("");

}


/* =========================================================
   RENDER LATEST
   ========================================================= */

function renderLatest(list = animeList) {

  const grid = $("latestGrid");

  if (!grid) return;

  grid.innerHTML =
    list
      .slice(10, 20)
      .map(createAnimeCard)
      .join("");

}


/* =========================================================
   RENDER WATCHLIST
   ========================================================= */

function renderWatchlist() {

  const grid = $("watchGrid");

  if (!grid) return;

  const list =
    animeList.filter(anime =>
      state.watchlist.includes(anime.title)
    );

  if (!list.length) {

    grid.innerHTML = `

      <div class="empty-state">

        <strong>
          ❤️ Your watchlist is empty
        </strong>

        Add anime to your watchlist
        and they will appear here.

      </div>

    `;

    return;
  }

  grid.innerHTML =
    list.map(createAnimeCard).join("");

}


/* =========================================================
   GENRES
   ========================================================= */

function renderGenres() {

  const grid = $("genresGrid");

  if (!grid) return;

  const genres = [
    ...new Set(
      animeList.map(a => a.genre)
    )
  ];

  grid.innerHTML =
    genres.map(genre => `

      <div
        class="genre-card"
        onclick="filterGenre('${escapeJS(genre)}')"
      >

        <span>
          ${genre}
        </span>

      </div>

    `).join("");

}


/* =========================================================
   GENRE FILTER
   ========================================================= */

function filterGenre(genre) {

  const results =
    animeList.filter(
      anime => anime.genre === genre
    );

  const grid = $("trendingGrid");

  if (!grid) return;

  grid.innerHTML =
    results.map(createAnimeCard).join("");

  document
    .getElementById("trending")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchAnime() {

  const input = $("search");

  if (!input) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  if (!query) {

    renderTrending();
    renderLatest();

    return;
  }

  const results =
    animeList.filter(anime =>
      anime.title
        .toLowerCase()
        .includes(query) ||

      anime.genre
        .toLowerCase()
        .includes(query)
    );

  const grid = $("trendingGrid");

  if (!grid) return;

  if (!results.length) {

    grid.innerHTML = `

      <div class="empty-state">

        <strong>
          No anime found
        </strong>

        Try another search.

      </div>

    `;

    return;
  }

  grid.innerHTML =
    results.map(createAnimeCard).join("");

}


/* =========================================================
   OPEN ANIME
   ========================================================= */

function openAnime(title) {

  const anime =
    animeList.find(
      a => a.title === title
    );

  if (!anime) return;

  const modal = $("modal");
  const body = $("modalBody");

  if (!modal || !body) return;


  const saved =
    state.watchlist.includes(title);


  body.innerHTML = `

    <div class="form-box">

      <div
        style="
          height:230px;
          border-radius:15px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:
          linear-gradient(
            135deg,
            ${anime.color},
            #050914
          );
          margin-bottom:20px;
          font-size:55px;
          font-weight:900;
        "
      >

        ${getInitials(title)}

      </div>


      <span class="section-kicker">
        ${anime.premium ? "👑 PREMIUM ANIME" : "HD ANIME"}
      </span>


      <h2 style="font-size:30px;margin:5px 0;">
        ${anime.title}
      </h2>


      <p style="color:#8ea3bd;margin-bottom:18px;">
        ${anime.genre} •
        ${anime.year} •
        ${anime.episodes} Episodes •
        ⭐ ${anime.rating}
      </p>


      <div
        style="
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
          margin-bottom:15px;
        "
      >

        <button
          class="accent"
          onclick="playAnime('${escapeJS(title)}')"
        >
          ▶ Watch Now
        </button>


        <button
          onclick="toggleWatchlist('${escapeJS(title)}')"
        >
          ${saved
            ? "❤️ Remove"
            : "♡ Watchlist"}
        </button>

      </div>


      <button
        style="
          width:100%;
          padding:12px;
          background:#0d1a2e;
          border:1px solid rgba(66,181,255,.2);
          color:white;
        "
        onclick="downloadAnime('${escapeJS(title)}')"
      >
        ⬇ Download
      </button>


      <div
        style="
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
          margin-top:20px;
        "
      >

        <div class="form-group">

          <label>
            🎧 Audio Language
          </label>

          <select id="audioSelect">

            <option>Japanese / Original</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Korean</option>

          </select>

        </div>


        <div class="form-group">

          <label>
            🎚️ Video Quality
          </label>

          <select id="qualitySelect">

            <option>Auto</option>
            <option>720p</option>
            <option>1080p</option>
            <option>1440p</option>
            <option>4K</option>

          </select>

        </div>

      </div>


      <p
        style="
          color:#647991;
          font-size:11px;
          margin-top:15px;
        "
      >
        Video/audio sources must be authorized by
        the content owner. Quality and language
        options become active when those sources
        are configured.
      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

  const modal = $("modal");

  if (modal) {

    modal.classList.add("hidden");

  }

}


/* =========================================================
   CLICK OUTSIDE MODAL
   ========================================================= */

window.addEventListener("click", event => {

  const modal = $("modal");

  if (
    modal &&
    event.target === modal
  ) {

    closeModal();

  }

});


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =========================================================
   PLAY ANIME
   ========================================================= */

function playAnime(title) {

  const anime =
    animeList.find(
      a => a.title === title
    );

  if (!anime) return;


  const body = $("modalBody");

  if (!body) return;


  body.innerHTML = `

    <div>

      <div class="player">

        <video
          id="animeVideo"
          controls
          playsinline
          preload="metadata"
        >

          <!--
            ADD YOUR AUTHORIZED VIDEO URL HERE
            WHEN AVAILABLE.

            Example:

            <source
              src="YOUR_AUTHORIZED_VIDEO_URL.mp4"
              type="video/mp4"
            >
          -->

        </video>

      </div>


      <h2 class="player-title">
        ${anime.title}
      </h2>


      <p class="player-subtitle">
        Episode 1 • ${anime.genre} • ⭐ ${anime.rating}
      </p>


      <div class="player-controls">

        <div class="form-group">

          <label>
            🎧 Audio
          </label>

          <select>

            <option>Japanese / Original</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Korean</option>

          </select>

        </div>


        <div class="form-group">

          <label>
            🎚️ Quality
          </label>

          <select>

            <option>Auto</option>
            <option>720p</option>
            <option>1080p</option>
            <option>1440p</option>
            <option>4K</option>

          </select>

        </div>

      </div>


      <div
        style="
          display:flex;
          gap:10px;
          margin-top:15px;
        "
      >

        <button
          class="accent"
          onclick="previousEpisode()"
        >
          ◀ Previous
        </button>

        <button
          class="accent"
          onclick="nextEpisode('${escapeJS(title)}')"
        >
          Next ▶
        </button>

      </div>


      <div
        style="
          margin-top:18px;
          padding:14px;
          border-radius:10px;
          background:#0a1424;
          color:#71869d;
          font-size:12px;
        "
      >

        ℹ️ Player ready. Add your authorized
        video URL/HLS stream to start playback.

      </div>

    </div>

  `;

}


/* =========================================================
   PREVIOUS / NEXT
   ========================================================= */

function previousEpisode() {

  alert("Previous episode selected.");

}


function nextEpisode(title) {

  alert(
    "Next episode for " +
    title +
    " selected."
  );

}


/* =========================================================
   WATCHLIST
   ========================================================= */

function toggleWatchlist(title) {

  const index =
    state.watchlist.indexOf(title);

  if (index === -1) {

    state.watchlist.push(title);

    alert("❤️ Added to Watchlist");

  } else {

    state.watchlist.splice(index, 1);

    alert("Removed from Watchlist");

  }

  saveState();

  renderTrending();
  renderLatest();
  renderWatchlist();

  openAnime(title);

}


/* =========================================================
   DOWNLOAD
   ========================================================= */

function downloadAnime(title) {

  if (!isPremium()) {

    const answer =
      confirm(
        "⬇ Download is a Premium feature.\n\n" +
        "Open Premium section?"
      );

    if (answer) {

      closeModal();

      document
        .getElementById("premium")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }

    return;
  }

  alert(
    "Download is ready to connect to your authorized video file."
  );

}


/* =========================================================
   BUY PREMIUM
   ========================================================= */

function buyPremium(days) {

  const prices = {

    7: 70,

    30: 250

  };

  const price = prices[days];

  if (!price) return;


  if (state.coins < price) {

    alert(
      "Not enough coins.\n\n" +
      "You need " +
      price +
      " coins."
    );

    return;
  }


  state.coins -= price;


  const duration =
    days *
    24 *
    60 *
    60 *
    1000;


  const base =
    Math.max(
      Date.now(),
      state.premiumUntil
    );


  state.premiumUntil =
    base + duration;


  saveState();

  updateCoins();

  updatePremiumStatus();


  alert(
    "👑 Premium activated for " +
    days +
    " days!"
  );

}


/* =========================================================
   LOGIN
   ========================================================= */

function openLogin() {

  const modal = $("modal");
  const body = $("modalBody");

  if (!modal || !body) return;


  body.innerHTML = `

    <div class="form-box">

      <span class="section-kicker">
        ACCOUNT
      </span>

      <h2>
        Login to NOX
      </h2>


      <div class="form-group">

        <label>
          Username
        </label>

        <input
          id="loginUser"
          placeholder="Enter username"
        >

      </div>


      <div class="form-group">

        <label>
          Password
        </label>

        <input
          id="loginPass"
          type="password"
          placeholder="Enter password"
        >

      </div>


      <button
        class="accent form-submit"
        onclick="loginUser()"
      >
        Login
      </button>


      <p
        style="
          margin-top:15px;
          color:#667c94;
          font-size:11px;
        "
      >
        Demo Super Admin:
        superadmin / ANIMEADMIN
      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


function loginUser() {

  const username =
    $("loginUser")?.value.trim();

  const password =
    $("loginPass")?.value;


  const user =
    state.users.find(
      u =>
        u.username === username &&
        u.password === password
    );


  if (!user) {

    alert("Invalid username or password.");

    return;
  }


  state.username = user.username;

  state.role = user.role;

  saveState();

  closeModal();

  updateAccountButtons();

  alert(
    "Welcome " +
    user.username +
    "!"
  );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutUser() {

  state.username = null;

  state.role = "user";

  saveState();

  updateAccountButtons();

  alert("Logged out.");

}


/* =========================================================
   ACCOUNT BUTTON
   ========================================================= */

function updateAccountButtons() {

  const btn = $("loginBtn");

  if (!btn) return;


  if (state.username) {

    btn.textContent =
      "👤 " +
      state.username;

    btn.onclick =
      () => logoutUser();

  } else {

    btn.textContent = "Login";

    btn.onclick =
      () => openLogin();

  }

}


/* =========================================================
   ADMIN
   ========================================================= */

function openAdmin() {

  if (
    state.role !== "admin" &&
    state.role !== "superadmin"
  ) {

    alert(
      "Admin access required."
    );

    return;
  }


  const modal = $("modal");
  const body = $("modalBody");

  if (!modal || !body) return;


  const canManageAdmins =
    state.role === "superadmin";


  body.innerHTML = `

    <div class="form-box">

      <span class="section-kicker">
        ${state.role.toUpperCase()}
      </span>

      <h2>
        NOX Admin Panel
      </h2>


      <div
        style="
          display:grid;
          gap:10px;
          margin-bottom:20px;
        "
      >

        <button
          class="accent"
          onclick="adminAnimeMessage()"
        >
          🎬 Manage Anime
        </button>


        <button
          onclick="adminAnimeMessage()"
        >
          📺 Manage Episodes
        </button>


        <button
          onclick="adminAnimeMessage()"
        >
          🎧 Manage Audio
        </button>


        <button
          onclick="adminAnimeMessage()"
        >
          🎚️ Manage Quality
        </button>

      </div>


      ${
        canManageAdmins
        ? `

          <div
            style="
              padding:18px;
              border-radius:12px;
              background:#0a1424;
              border:1px solid rgba(66,181,255,.15);
            "
          >

            <h3 style="margin-bottom:12px;">
              👑 Admin Management
            </h3>

            <input
              id="newAdminName"
              placeholder="Username"
              style="
                width:100%;
                padding:11px;
                margin-bottom:8px;
                background:#07101d;
                border:1px solid #20324b;
                border-radius:8px;
                color:white;
              "
            >

            <input
              id="newAdminPassword"
              placeholder="Password"
              type="password"
              style="
                width:100%;
                padding:11px;
                margin-bottom:8px;
                background:#07101d;
                border:1px solid #20324b;
                border-radius:8px;
                color:white;
              "
            >

            <button
              class="accent"
              style="width:100%;padding:11px;"
              onclick="createAdmin()"
            >
              + Create Admin
            </button>

          </div>

        `
        : ""
      }


      <p
        style="
          color:#657990;
          font-size:11px;
          margin-top:18px;
        "
      >
        Browser/localStorage admin controls are
        demo-level only. Secure production roles
        require a backend database and server-side
        authentication.
      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


/* =========================================================
   CREATE ADMIN
   ========================================================= */

function createAdmin() {

  if (state.role !== "superadmin") {

    alert(
      "Only Super Admin can create admins."
    );

    return;
  }


  const username =
    $("newAdminName")
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


  if (
    state.users.some(
      u => u.username === username
    )
  ) {

    alert("Username already exists.");

    return;
  }


  state.users.push({

    username,

    password,

    role: "admin"

  });


  saveState();

  alert(
    "👑 Admin created successfully."
  );

}


function adminAnimeMessage() {

  alert(
    "Admin manager UI is ready. Connect your authorized anime/video database here."
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderTrending();

    renderLatest();

    renderGenres();

    renderWatchlist();

    updateCoins();

    updatePremiumStatus();

    updateAccountButtons();


    const search =
      $("search");

    if (search) {

      search.addEventListener(
        "input",
        searchAnime
      );

    }


    const daily =
      $("dailyBtn");

    if (daily) {

      daily.addEventListener(
        "click",
        dailyReward
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

  }
);


/* =========================================================
   AUTO UPDATE PREMIUM
   ========================================================= */

setInterval(
  updatePremiumStatus,
  60000
);
