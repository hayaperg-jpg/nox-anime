/* =========================================================
   NOX ANIME — PREMIUM SCRIPT
   ========================================================= */

const KEY = "nox_anime_premium_v3";


/* =========================================================
   ANIME DATA
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
    color: "#177cff"
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
    color: "#365cff"
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
    color: "#147cff"
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
   STATE
   ========================================================= */

let state =
  JSON.parse(
    localStorage.getItem(KEY) || "null"
  );


if (!state) {

  state = {

    coins: 10,

    username: null,

    role: "user",

    watchlist: [],

    premiumUntil: 0,

    lastDaily: "",

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

  save();

}


/* =========================================================
   HELPERS
   ========================================================= */

function $(id) {
  return document.getElementById(id);
}


function save() {

  localStorage.setItem(
    KEY,
    JSON.stringify(state)
  );

}


function esc(text) {

  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");

}


function initials(title) {

  const parts =
    title.split(" ");

  if (parts.length === 1) {

    return parts[0]
      .substring(0, 2)
      .toUpperCase();

  }

  return (
    parts[0][0] +
    parts[1][0]
  ).toUpperCase();

}


/* =========================================================
   PREMIUM
   ========================================================= */

function isPremium() {

  return (
    Date.now() <
    state.premiumUntil
  );

}


function updatePremium() {

  const box =
    $("premiumStatus");

  if (!box) return;

  if (isPremium()) {

    const days =
      Math.ceil(
        (
          state.premiumUntil -
          Date.now()
        ) / 86400000
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
   COINS
   ========================================================= */

function updateCoins() {

  const box =
    $("coins");

  if (box) {

    box.textContent =
      state.coins;

  }

}


/* =========================================================
   DAILY REWARD
   ========================================================= */

function dailyReward() {

  const date =
    new Date();

  const today =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate();


  if (
    state.lastDaily === today
  ) {

    alert(
      "🎁 Daily reward already claimed today."
    );

    return;

  }


  state.coins += 10;

  state.lastDaily =
    today;

  save();

  updateCoins();

  alert(
    "🎁 Congratulations!\n\n+10 coins added."
  );

}


/* =========================================================
   CARD
   ========================================================= */

function card(anime) {

  const saved =
    state.watchlist
      .includes(anime.title);


  return `

    <article
      class="anime-card"
      onclick="openAnime('${esc(anime.title)}')"
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

          ${anime.premium
            ? "👑 PREMIUM"
            : "HD"}

        </div>

        <div
          style="
            position:absolute;
            inset:0;
            display:grid;
            place-items:center;
            font-size:48px;
            font-weight:900;
            z-index:1;
            color:rgba(255,255,255,.9);
          "
        >

          ${initials(anime.title)}

        </div>

        <div class="play-circle">
          ▶
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

        <div class="anime-meta">

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
   RENDER
   ========================================================= */

function renderTrending(list = animeList) {

  const grid =
    $("trendingGrid");

  if (!grid) return;

  grid.innerHTML =
    list
      .slice(0, 10)
      .map(card)
      .join("");

}


function renderLatest() {

  const grid =
    $("latestGrid");

  if (!grid) return;

  grid.innerHTML =
    animeList
      .slice(10, 20)
      .map(card)
      .join("");

}


function renderWatchlist() {

  const grid =
    $("watchGrid");

  if (!grid) return;


  const list =
    animeList.filter(
      anime =>
        state.watchlist
          .includes(anime.title)
    );


  if (!list.length) {

    grid.innerHTML = `

      <div class="empty-state">

        <strong>
          ❤️ Your Watchlist is Empty
        </strong>

        Tap any anime and add it
        to your watchlist.

      </div>

    `;

    return;

  }


  grid.innerHTML =
    list
      .map(card)
      .join("");

}


function renderGenres() {

  const grid =
    $("genresGrid");

  if (!grid) return;


  const genres =
    [...new Set(
      animeList.map(
        anime => anime.genre
      )
    )];


  grid.innerHTML =
    genres.map(
      genre => `

        <div
          class="genre-card"
          onclick="filterGenre('${esc(genre)}')"
        >

          🎬 ${genre}

        </div>

      `
    ).join("");

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchAnime() {

  const input =
    $("search");

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
    animeList.filter(
      anime =>

        anime.title
          .toLowerCase()
          .includes(query)

        ||

        anime.genre
          .toLowerCase()
          .includes(query)
    );


  const grid =
    $("trendingGrid");


  if (!results.length) {

    grid.innerHTML = `

      <div class="empty-state">

        <strong>
          🔎 No Anime Found
        </strong>

        Try another name or genre.

      </div>

    `;

    return;

  }


  grid.innerHTML =
    results
      .map(card)
      .join("");

}


/* =========================================================
   GENRE
   ========================================================= */

function filterGenre(genre) {

  const results =
    animeList.filter(
      anime =>
        anime.genre === genre
    );


  $("trendingGrid").innerHTML =
    results
      .map(card)
      .join("");


  $("trending")
    ?.scrollIntoView({
      behavior: "smooth"
    });

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


  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) return;


  const saved =
    state.watchlist
      .includes(title);


  body.innerHTML = `

    <div class="form-box">

      <div
        style="
          height:220px;
          border-radius:14px;
          display:grid;
          place-items:center;
          background:
          linear-gradient(
            135deg,
            ${anime.color},
            #050914
          );
          font-size:60px;
          font-weight:900;
          margin-bottom:20px;
        "
      >

        ${initials(title)}

      </div>


      <span class="section-kicker">

        ${anime.premium
          ? "👑 PREMIUM ANIME"
          : "HD ANIME"}

      </span>


      <h2>
        ${anime.title}
      </h2>


      <p style="color:#8193aa">

        ${anime.genre}
        •
        ${anime.year}
        •
        ${anime.episodes} Episodes
        • ⭐ ${anime.rating}

      </p>


      <div
        style="
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:10px;
          margin-top:18px;
        "
      >

        <button
          class="primary-btn"
          onclick="playAnime('${esc(title)}')"
        >
          ▶ Watch
        </button>


        <button
          class="secondary-btn"
          onclick="toggleWatchlist('${esc(title)}')"
        >

          ${saved
            ? "❤️ Remove"
            : "♡ Watchlist"}

        </button>

      </div>


      <button
        class="secondary-btn"
        style="
          width:100%;
          margin-top:10px;
        "
        onclick="downloadAnime('${esc(title)}')"
      >
        ⬇ Download
      </button>


      <div class="player-controls">

        <div class="form-group">

          <label>
            🎧 Audio Language
          </label>

          <select>

            <option>
              Japanese / Original
            </option>

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

          <select>

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
          color:#586d84;
          font-size:10px;
          line-height:1.6;
          margin-top:18px;
        "
      >

        Quality, audio and download options
        become active after authorized media
        sources are configured.

      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


/* =========================================================
   CLOSE
   ========================================================= */

function closeModal() {

  $("modal")
    ?.classList
    .add("hidden");

}


/* =========================================================
   WATCHLIST
   ========================================================= */

function toggleWatchlist(title) {

  const index =
    state.watchlist
      .indexOf(title);


  if (index === -1) {

    state.watchlist.push(title);

    alert(
      "❤️ Added to your Watchlist"
    );

  } else {

    state.watchlist.splice(
      index,
      1
    );

    alert(
      "Removed from Watchlist"
    );

  }


  save();

  renderTrending();

  renderLatest();

  renderWatchlist();

  openAnime(title);

}


/* =========================================================
   PLAYER
   ========================================================= */

function playAnime(title) {

  const anime =
    animeList.find(
      a => a.title === title
    );

  if (!anime) return;


  const body =
    $("modalBody");


  body.innerHTML = `

    <div>

      <div class="player">

        <video
          controls
          playsinline
          preload="metadata"
        >

          <!--
            PUT YOUR AUTHORIZED VIDEO URL HERE.

            Example:

            <source
              src="YOUR_VIDEO_URL.mp4"
              type="video/mp4"
            >

          -->

        </video>

      </div>


      <h2 class="player-title">

        ${anime.title}

      </h2>


      <p class="player-subtitle">

        Episode 1
        • ${anime.genre}
        • ⭐ ${anime.rating}

      </p>


      <div class="player-controls">

        <div class="form-group">

          <label>
            🎧 Audio
          </label>

          <select>

            <option>
              Japanese / Original
            </option>

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
          padding:15px;
          margin-top:18px;
          border-radius:10px;
          background:#07111e;
          color:#71869d;
          font-size:11px;
        "
      >

        🎬 Player ready.

        Add your authorized video
        source to start playback.

      </div>

    </div>

  `;

}


/* =========================================================
   DOWNLOAD
   ========================================================= */

function downloadAnime(title) {

  if (!isPremium()) {

    if (
      confirm(
        "👑 Download is a Premium feature.\n\n" +
        "Open Premium?"
      )
    ) {

      closeModal();

      $("premium")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }

    return;

  }


  alert(
    "⬇ Download source is ready to connect to your authorized file."
  );

}


/* =========================================================
   PREMIUM
   ========================================================= */

function buyPremium(days) {

  const prices = {

    7: 70,

    30: 250

  };


  const price =
    prices[days];


  if (state.coins < price) {

    alert(
      "🪙 Not enough coins.\n\n" +
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


  state.premiumUntil =
    Math.max(
      Date.now(),
      state.premiumUntil
    ) + duration;


  save();

  updateCoins();

  updatePremium();


  alert(
    "👑 Premium Activated!\n\n" +
    days +
    " days added."
  );

}


function coinPack() {

  alert(
    "🪙 Payment system ready.\n\n" +
    "Connect your verified payment provider here."
  );

}


/* =========================================================
   LOGIN
   ========================================================= */

function openLogin() {

  const modal =
    $("modal");

  const body =
    $("modalBody");


  body.innerHTML = `

    <div class="form-box">

      <span class="section-kicker">
        NOX ACCOUNT
      </span>

      <h2>
        Login
      </h2>

      <p
        style="
          color:#8193aa;
          font-size:11px;
        "
      >
        Login to unlock your NOX account.
      </p>


      <div class="form-group">

        <label>
          Username
        </label>

        <input
          id="loginUser"
          placeholder="Username"
        >

      </div>


      <div class="form-group">

        <label>
          Password
        </label>

        <input
          id="loginPass"
          type="password"
          placeholder="Password"
        >

      </div>


      <button
        class="primary-btn form-submit"
        onclick="loginUser()"
      >
        🔐 Login
      </button>


      <p
        style="
          color:#536a82;
          font-size:10px;
          margin-top:15px;
        "
      >

        Demo Super Admin:
        superadmin / ANIMEADMIN

      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


/* =========================================================
   LOGIN PROCESS
   ========================================================= */

function loginUser() {

  const username =
    $("loginUser")
      ?.value
      .trim();


  const password =
    $("loginPass")
      ?.value;


  const user =
    state.users.find(
      u =>
        u.username === username &&
        u.password === password
    );


  if (!user) {

    alert(
      "❌ Invalid username or password."
    );

    return;

  }


  state.username =
    user.username;

  state.role =
    user.role;


  save();

  closeModal();

  updateAccount();


  alert(
    "👋 Welcome " +
    user.username
  );

}


/* =========================================================
   ACCOUNT
   ========================================================= */

function updateAccount() {

  const btn =
    $("loginBtn");


  if (!btn) return;


  if (state.username) {

    btn.textContent =
      "👤 " +
      state.username;


    btn.onclick =
      logout;

  } else {

    btn.textContent =
      "Login";


    btn.onclick =
      openLogin;

  }

}


function logout() {

  state.username =
    null;

  state.role =
    "user";


  save();

  updateAccount();

  alert(
    "Logged out."
  );

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
      "🛡️ Admin login required."
    );

    openLogin();

    return;

  }


  const modal =
    $("modal");

  const body =
    $("modalBody");


  const superAdmin =
    state.role === "superadmin";


  body.innerHTML = `

    <div class="form-box">

      <span class="section-kicker">

        ${superAdmin
          ? "SUPER ADMIN"
          : "ADMIN"}

      </span>


      <h2>
        🛡️ NOX Admin Panel
      </h2>


      <p
        style="
          color:#8193aa;
          font-size:11px;
        "
      >

        Welcome ${state.username}.

        ${
          superAdmin
            ? "You have Super Admin access."
            : "You have Admin access."
        }

      </p>


      <div
        style="
          display:grid;
          gap:9px;
          margin-top:20px;
        "
      >

        <button
          class="primary-btn"
          onclick="adminMessage('Anime Manager')"
        >
          🎬 Anime Manager
        </button>


        <button
          class="secondary-btn"
          onclick="adminMessage('Episode Manager')"
        >
          📺 Episode Manager
        </button>


        <button
          class="secondary-btn"
          onclick="adminMessage('Audio Manager')"
        >
          🎧 Audio Manager
        </button>


        <button
          class="secondary-btn"
          onclick="adminMessage('Quality Manager')"
        >
          🎚️ Quality Manager
        </button>

      </div>


      ${
        superAdmin
        ? `

          <div
            style="
              margin-top:20px;
              padding:16px;
              border-radius:12px;
              background:#07111e;
              border:1px solid #1a3049;
            "
          >

            <h3>
              👑 Create Admin
            </h3>


            <div class="form-group">

              <label>
                New Admin Username
              </label>

              <input
                id="newAdminName"
                placeholder="Username"
              >

            </div>


            <div class="form-group">

              <label>
                New Admin Password
              </label>

              <input
                id="newAdminPassword"
                type="password"
                placeholder="Password"
              >

            </div>


            <button
              class="primary-btn form-submit"
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
          margin-top:20px;
          color:#536a82;
          font-size:9px;
          line-height:1.6;
        "
      >

        Demo browser-based admin system.
        Production security requires server-side
        authentication and database role checks.

      </p>

    </div>

  `;


  modal.classList.remove("hidden");

}


/* =========================================================
   CREATE ADMIN
   ========================================================= */

function createAdmin() {

  if (
    state.role !== "superadmin"
  ) {

    alert(
      "Only Super Admin can create admins."
    );

    return;

  }


  const username =
    $("newAdminName")
      ?.value
      .trim();


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
      u =>
        u.username === username
    )
  ) {

    alert(
      "Username already exists."
    );

    return;

  }


  state.users.push({

    username,

    password,

    role: "admin"

  });


  save();


  alert(
    "👑 New Admin Created!"
  );

}


function adminMessage(name) {

  alert(
    "🛡️ " +
    name +
    " is ready to connect with your anime database."
  );

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderTrending();

    renderLatest();

    renderGenres();

    renderWatchlist();

    updateCoins();

    updatePremium();

    updateAccount();


    $("search")
      ?.addEventListener(
        "input",
        searchAnime
      );


    $("dailyBtn")
      ?.addEventListener(
        "click",
        dailyReward
      );


    $("loginBtn")
      ?.addEventListener(
        "click",
        openLogin
      );


    $("adminBtn")
      ?.addEventListener(
        "click",
        openAdmin
      );


    $("modal")
      ?.addEventListener(
        "click",
        event => {

          if (
            event.target ===
            $("modal")
          ) {

            closeModal();

          }

        }
      );


    setTimeout(
      () => {

        const loader =
          $("loader");

        if (loader) {

          loader.style.opacity = "0";

          loader.style.visibility =
            "hidden";

        }

      },
      700
    );

  }
);
