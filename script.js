/* =====================================================
   NOX ANIME
   COMPLETE SCRIPT.JS
   ===================================================== */


/* =========================
   STORAGE KEYS
========================= */

const COINS_KEY = "nox_coins";
const WATCH_KEY = "nox_watchlist";
const PREMIUM_KEY = "nox_premium";
const USERS_KEY = "nox_users";
const DAILY_KEY = "nox_daily";
const CURRENT_USER_KEY = "nox_current_user";
const ANIME_KEY = "nox_anime";


/* =========================
   HELPERS
========================= */

const $ = (id) => document.getElementById(id);

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadJSON(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (error) {
    console.error("Storage error:", error);
    return fallback;
  }
}


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
   ANIME DATA
========================= */

let anime = loadJSON(ANIME_KEY, null);

if (!Array.isArray(anime) || anime.length === 0) {
  anime = defaultAnime;
  saveJSON(ANIME_KEY, anime);
}


/* =========================
   USER DATA
========================= */

let coins = Number(
  localStorage.getItem(COINS_KEY) || 10
);

let watchlist = loadJSON(
  WATCH_KEY,
  []
);

let premiumUntil = Number(
  localStorage.getItem(PREMIUM_KEY) || 0
);

let users = loadJSON(
  USERS_KEY,
  []
);

let currentUser = localStorage.getItem(
  CURRENT_USER_KEY
) || "Guest";


/* =========================
   DEFAULT ADMIN USERS
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

  saveJSON(USERS_KEY, users);
}


/* =========================
   SAVE DATA
========================= */

function saveCoins() {
  localStorage.setItem(
    COINS_KEY,
    String(coins)
  );
}

function saveWatchlist() {
  saveJSON(
    WATCH_KEY,
    watchlist
  );
}

function savePremium() {
  localStorage.setItem(
    PREMIUM_KEY,
    String(premiumUntil)
  );
}

function saveUsers() {
  saveJSON(
    USERS_KEY,
    users
  );
}

function saveAnime() {
  saveJSON(
    ANIME_KEY,
    anime
  );
}


/* =========================
   PREMIUM
========================= */

function hasPremium() {

  return Date.now() < premiumUntil;

}


function updatePremium() {

  const status = $("premiumStatus");

  if (!status) return;

  if (hasPremium()) {

    const remaining =
      Math.ceil(
        (premiumUntil - Date.now()) /
        (1000 * 60 * 60 * 24)
      );

    status.innerHTML = `
      <div class="premium-active">
        👑 Premium Active
        <br>
        <small>${remaining} day(s) remaining</small>
      </div>
    `;

  } else {

    status.innerHTML = `
      <div class="premium-inactive">
        Premium inactive
      </div>
    `;

  }

}


/* =========================
   DAILY COINS
========================= */

function claimDaily() {

  const today =
    new Date().toISOString().slice(0, 10);

  const lastClaim =
    localStorage.getItem(DAILY_KEY);

  if (lastClaim === today) {

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

  render();

  alert(
    "🎁 You received +10 coins!"
  );
}


/* =========================
   PREMIUM REDEEM
========================= */

function redeemPremium(cost, days) {

  if (hasPremium()) {

    alert(
      "You already have active Premium."
    );

    return;
  }

  if (coins < cost) {

    alert(
      `You need ${cost} coins. You currently have ${coins}.`
    );

    return;
  }

  coins -= cost;

  premiumUntil =
    Date.now() +
    days * 24 * 60 * 60 * 1000;

  saveCoins();
  savePremium();

  render();

  alert(
    `👑 Premium activated for ${days} days!`
  );
}


/* =========================
   WATCHLIST
========================= */

function isInWatchlist(id) {

  return watchlist.includes(id);

}


function toggleWatchlist(id) {

  id = Number(id);

  if (isInWatchlist(id)) {

    watchlist =
      watchlist.filter(
        item => Number(item) !== id
      );

  } else {

    watchlist.push(id);

  }

  saveWatchlist();

  render();
}


/* =========================
   OLD COMPATIBILITY
========================= */

function toggleWatch(name) {

  const item =
    anime.find(
      a => a.name === name
    );

  if (!item) return;

  toggleWatchlist(item.id);
}


/* =========================
   SEARCH
========================= */

function getSearchValue() {

  const input = $("search");

  if (!input) return "";

  return input.value
    .trim()
    .toLowerCase();

}


/* =========================
   RENDER
========================= */

function render() {

  const query =
    getSearchValue();

  let filtered = anime.filter(item => {

    if (!query) return true;

    return (
      item.name
        .toLowerCase()
        .includes(query) ||

      item.genre
        .toLowerCase()
        .includes(query) ||

      String(item.year)
        .includes(query)
    );

  });


  renderGrid(
    "trendingGrid",
    filtered.filter(
      item => item.trending
    )
  );


  renderGrid(
    "latestGrid",
    filtered.filter(
      item => item.latest
    )
  );


  renderGrid(
    "watchGrid",
    filtered.filter(
      item =>
        watchlist.includes(item.id)
    )
  );


  renderGenres(filtered);


  const coinBox = $("coins");

  if (coinBox) {
    coinBox.textContent =
      coins;
  }


  updatePremium();


  updateLoginButton();

}


/* =========================
   ANIME GRID
========================= */

function renderGrid(
  elementId,
  list
) {

  const container =
    $(elementId);

  if (!container) return;


  if (!list || list.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        No anime found.
      </div>
    `;

    return;
  }


  container.innerHTML =
    list.map(item => {

      const inWatch =
        isInWatchlist(item.id);

      const premiumBadge =
        item.premium
          ? `<span class="premium-badge">👑 PREMIUM</span>`
          : "";

      return `

        <article class="anime-card">

          <div class="poster-wrap">

            <img
              class="poster"
              src="${item.poster || "slime-s4.jpg"}"
              alt="${escapeHTML(item.name)}"
              onerror="this.src='slime-s4.jpg'"
            >

            ${premiumBadge}

            <div class="rating">
              ⭐ ${item.rating}
            </div>

          </div>


          <div class="anime-info">

            <h3>
              ${escapeHTML(item.name)}
            </h3>

            <p>
              ${escapeHTML(item.genre)}
              •
              ${item.year}
            </p>

            <div class="card-actions">

              <button
                class="watch-btn"
                onclick="openAnime(${item.id})">
                ▶ Watch
              </button>

              <button
                class="watchlist-btn"
                onclick="toggleWatchlist(${item.id})">
                ${inWatch ? "✓ Saved" : "＋ Watchlist"}
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


  if (genres.length === 0) {

    container.innerHTML =
      `<div class="empty-state">No genres found.</div>`;

    return;
  }


  container.innerHTML =
    genres.map(genre => {

      const count =
        list.filter(
          item =>
            item.genre === genre
        ).length;

      return `

        <button
          class="genre-card"
          onclick="filterGenre('${escapeAttribute(genre)}')">

          <span>🎭</span>

          <strong>
            ${escapeHTML(genre)}
          </strong>

          <small>
            ${count} anime
          </small>

        </button>

      `;

    }).join("");

}


/* =========================
   GENRE FILTER
========================= */

function filterGenre(genre) {

  const search =
    $("search");

  if (!search) return;

  search.value =
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

  const search =
    $("search");

  if (search) {
    search.value = "";
  }

  render();

  const trending =
    $("trending");

  if (trending) {

    trending.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================
   ANIME PLAYER
========================= */


/*
  IMPORTANT:

  Add only authorized video URLs here.

  Example:

  1: {
    auto: "https://your-domain.com/video.mp4",
    "720p": "https://your-domain.com/video-720.mp4",
    "1080p": "https://your-domain.com/video-1080.mp4",
    "1440p": "",
    "4k": ""
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


let currentAnimeId = null;


/* =========================
   AUDIO DATA
========================= */

const AUDIO_URLS = {

  1: {
    Original: "",
    Hindi: "",
    English: "",
    Urdu: "",
    Spanish: "",
    French: "",
    German: "",
    Korean: ""
  }

};


/* =========================
   OPEN ANIME
========================= */

function openAnime(id) {

  id = Number(id);

  const item =
    anime.find(
      a => Number(a.id) === id
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
      "👑 This anime requires Premium."
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


  const videoData =
    VIDEO_URLS[id] || {};


  const audioData =
    AUDIO_URLS[id] || {};


  const firstVideo =
    videoData.auto ||
    videoData["720p"] ||
    "";


  body.innerHTML = `

    <div class="player-header">

      <div>

        <h2>
          ${escapeHTML(item.name)}
        </h2>

        <p>
          ${escapeHTML(item.genre)}
          •
          ${item.year}
          •
          ${escapeHTML(item.season)}
        </p>

      </div>

    </div>


    <div class="video-area">

      <video
        id="player"
        class="real-player"
        controls
        playsinline
        preload="metadata">

        <source
          id="videoSource"
          src="${firstVideo}"
          type="video/mp4">

      </video>

    </div>


    <div class="player-controls">

      <div class="control-group">

        <label>
          Episode
        </label>

        <select id="episodeSelect">

          <option value="1">
            Episode 1
          </option>

          <option value="2">
            Episode 2
          </option>

          <option value="3">
            Episode 3
          </option>

          <option value="4">
            Episode 4
          </option>

          <option value="5">
            Episode 5
          </option>

          <option value="6">
            Episode 6
          </option>

        </select>

      </div>


      <div class="control-group">

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


      <div class="control-group">

        <label>
          Audio
        </label>

        <select id="audioSelect">

          <option value="Original">
            Original / Japanese
          </option>

          <option value="Hindi">
            Hindi
          </option>

          <option value="English">
            English
          </option>

          <option value="Urdu">
            Urdu
          </option>

          <option value="Spanish">
            Spanish
          </option>

          <option value="French">
            French
          </option>

          <option value="German">
            German
          </option>

          <option value="Korean">
            Korean
          </option>

        </select>

      </div>

    </div>


    <div class="player-buttons">

      <button
        class="watch-btn"
        onclick="loadSelectedVideo()">

        ▶ Load Video

      </button>


      <a
        id="downloadBtn"
        class="download-btn"
        href="#"
        download
        target="_blank">

        ⬇ Download

      </a>

    </div>


    <div class="video-message">

      ${
        firstVideo
          ? "Video source available."
          : `
            <strong>
              Video not connected yet.
            </strong>

            <br>

            Add your authorized MP4
            URL inside VIDEO_URLS
            in script.js.
          `
      }

    </div>

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


  const audio =
    $("audioSelect");

  if (audio) {

    audio.addEventListener(
      "change",
      loadSelectedAudio
    );

  }


  const episode =
    $("episodeSelect");

  if (episode) {

    episode.addEventListener(
      "change",
      loadSelectedVideo
    );

  }


  updateDownloadButton();

}


/* =========================
   LOAD SELECTED VIDEO
========================= */

function loadSelectedVideo() {

  if (!currentAnimeId) return;


  const qualityElement =
    $("qualitySelect");

  const episodeElement =
    $("episodeSelect");

  const player =
    $("player");

  const source =
    $("videoSource");


  if (
    !player ||
    !source
  ) return;


  const quality =
    qualityElement
      ? qualityElement.value
      : "auto";


  const episode =
    episodeElement
      ? episodeElement.value
      : "1";


  const data =
    VIDEO_URLS[currentAnimeId] || {};


  let url =
    data[quality] ||
    data.auto ||
    "";


  /*
    If you later create
    episode-specific URLs,
    you can use episode here.
  */


  if (!url) {

    alert(
      `No authorized video URL is configured for ${quality}, Episode ${episode}.`
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
   AUDIO SWITCH
========================= */

function loadSelectedAudio() {

  if (!currentAnimeId) return;


  const audioSelect =
    $("audioSelect");

  if (!audioSelect) return;


  const language =
    audioSelect.value;


  const data =
    AUDIO_URLS[currentAnimeId] || {};


  const audioURL =
    data[language] || "";


  if (!audioURL) {

    if (language !== "Original") {

      alert(
        `${language} audio is not connected yet.`
      );

    }

    return;
  }


  /*
    Separate audio files are not
    automatically synchronized with
    the video by a normal <video>
    element.

    Use HLS/DASH for real
    multi-audio switching.
  */

  alert(
    `${language} audio URL is configured. For synchronized multi-language playback, use HLS/DASH.`
  );

}


/* =========================
   DOWNLOAD
========================= */

function updateDownloadButton() {

  const button =
    $("downloadBtn");

  if (!button) return;


  const data =
    VIDEO_URLS[currentAnimeId] || {};


  const qualityElement =
    $("qualitySelect");


  const quality =
    qualityElement
      ? qualityElement.value
      : "auto";


  const url =
    data[quality] ||
    data.auto ||
    "";


  if (url) {

    button.href =
      url;

    button.style.pointerEvents =
      "auto";

    button.style.opacity =
      "1";

  } else {

    button.href =
      "#";

    button.style.pointerEvents =
      "none";

    button.style.opacity =
      "0.5";

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
    } catch (error) {}

  }


  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }


  currentAnimeId =
    null;

}


/* =========================
   LOGIN
========================= */

function openLogin() {

  const modal =
    $("modal");

  const body =
    $("modalBody");


  if (!modal || !body) return;


  body.innerHTML = `

    <div class="auth-box">

      <h2>
        🔐 NOX Anime Login
      </h2>

      <p>
        Login to your NOX Anime account.
      </p>


      <input
        id="loginUsername"
        type="text"
        placeholder="Username"
        autocomplete="username"
      >


      <input
        id="loginPassword"
        type="password"
        placeholder="Password"
        autocomplete="current-password"
      >


      <button
        class="watch-btn"
        onclick="loginUser()">

        Login

      </button>


      <button
        class="secondary-btn"
        onclick="openSignup()">

        Create Account

      </button>


      <div
        id="loginMessage"
        class="auth-message">
      </div>

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
      ?.value
      .trim();


  const password =
    $("loginPassword")
      ?.value;


  const message =
    $("loginMessage");


  if (!username || !password) {

    if (message) {

      message.textContent =
        "Please enter username and password.";

    }

    return;
  }


  const user =
    users.find(
      item =>
        item.username === username &&
        item.password === password
    );


  if (!user) {

    if (message) {

      message.textContent =
        "❌ Invalid username or password.";

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

    <div class="auth-box">

      <h2>
        ✨ Create Account
      </h2>


      <input
        id="signupUsername"
        type="text"
        placeholder="Username"
      >


      <input
        id="signupPassword"
        type="password"
        placeholder="Password"
      >


      <button
        class="watch-btn"
        onclick="signupUser()">

        Create Account

      </button>


      <button
        class="secondary-btn"
        onclick="openLogin()">

        Back to Login

      </button>


      <div
        id="signupMessage"
        class="auth-message">
      </div>

    </div>

  `;

}


/* =========================
   CREATE USER
========================= */

function signupUser() {

  const username =
    $("signupUsername")
      ?.value
      .trim();


  const password =
    $("signupPassword")
      ?.value;


  const message =
    $("signupMessage");


  if (
    !username ||
    !password
  ) {

    if (message) {

      message.textContent =
        "Please fill all fields.";

    }

    return;
  }


  if (username.length < 3) {

    if (message) {

      message.textContent =
        "Username must be at least 3 characters.";

    }

    return;
  }


  if (password.length < 4) {

    if (message) {

      message.textContent =
        "Password must be at least 4 characters.";

    }

    return;
  }


  const exists =
    users.some(
      user =>
        user.username.toLowerCase() ===
        username.toLowerCase()
    );


  if (exists) {

    if (message) {

      message.textContent =
        "Username already exists.";

    }

    return;
  }


  users.push({

    username,
    password,
    role: "user"

  });


  saveUsers();


  currentUser =
    username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  closeModal();

  render();


  alert(
    "✅ Account created successfully!"
  );

}


/* =========================
   LOGIN BUTTON
========================= */

function updateLoginButton() {

  const button =
    $("loginBtn");

  if (!button) return;


  if (
    currentUser &&
    currentUser !== "Guest"
  ) {

    button.textContent =
      currentUser;

  } else {

    button.textContent =
      "Login";

  }

}


/* =========================
   ADMIN PANEL
========================= */

function openAdmin() {

  const modal =
    $("modal");

  const body =
    $("modalBody");


  if (!modal || !body) return;


  body.innerHTML = `

    <div class="auth-box">

      <h2>
        🛡️ NOX Admin
      </h2>

      <p>
        Enter admin credentials.
      </p>


      <input
        id="adminUsername"
        type="text"
        placeholder="Admin username"
      >


      <input
        id="adminPassword"
        type="password"
        placeholder="Admin password"
      >


      <button
        class="watch-btn"
        onclick="adminLogin()">

        Open Admin Panel

      </button>


      <div
        id="adminMessage"
        class="auth-message">
      </div>

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
      ?.value
      .trim();


  const password =
    $("adminPassword")
      ?.value;


  const message =
    $("adminMessage");


  const admin =
    users.find(
      user =>
        (
          user.role === "admin" ||
          user.role === "super"
        ) &&
        user.username === username &&
        user.password === password
    );


  if (!admin) {

    if (message) {

      message.textContent =
        "❌ Invalid admin credentials.";

    }

    return;
  }


  closeModal();

  openAdminPanel();

}


/* =========================
   ADMIN PANEL UI
========================= */

function openAdminPanel() {

  const modal =
    $("modal");

  const body =
    $("modalBody");


  if (!modal || !body) return;


  const isSuper =
    users.some(
      user =>
        user.username === currentUser &&
        user.role === "super"
    );


  body.innerHTML = `

    <div class="admin-panel">

      <h2>
        🛡️ NOX Admin Panel
      </h2>

      <p>
        Logged in as:
        <strong>
          ${escapeHTML(currentUser)}
        </strong>
      </p>


      <hr>


      <h3>
        ➕ Add Anime
      </h3>


      <input
        id="newAnimeName"
        type="text"
        placeholder="Anime name"
      >


      <input
        id="newAnimeGenre"
        type="text"
        placeholder="Genre"
      >


      <input
        id="newAnimeYear"
        type="number"
        placeholder="Year"
      >


      <input
        id="newAnimeRating"
        type="text"
        placeholder="Rating"
      >


      <input
        id="newAnimePoster"
        type="text"
        placeholder="Poster filename e.g. slime-s4.jpg"
        value="slime-s4.jpg"
      >


      <label class="check-row">

        <input
          id="newAnimeTrending"
          type="checkbox"
        >

        Trending

      </label>


      <label class="check-row">

        <input
          id="newAnimeLatest"
          type="checkbox"
        >

        Latest

      </label>


      <label class="check-row">

        <input
          id="newAnimePremium"
          type="checkbox"
        >

        Premium

      </label>


      <button
        class="watch-btn"
        onclick="addAnime()">

        + Add Anime

      </button>


      <hr>


      <h3>
        📚 Anime Management
      </h3>


      <div id="adminAnimeList">

        ${renderAdminAnimeList()}

      </div>


      ${
        isSuper
          ? `

            <hr>

            <h3>
              👑 Admin Management
            </h3>

            <input
              id="newAdminUsername"
              type="text"
              placeholder="New admin username"
            >

            <input
              id="newAdminPassword"
              type="password"
              placeholder="New admin password"
            >

            <button
              class="watch-btn"
              onclick="addAdmin()">

              + Add Admin

            </button>

            <div id="adminUsersList">
              ${renderAdminUsers()}
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
   ADMIN ANIME LIST
========================= */

function renderAdminAnimeList() {

  return anime.map(item => `

    <div class="admin-item">

      <div>

        <strong>
          ${escapeHTML(item.name)}
        </strong>

        <small>
          ${escapeHTML(item.genre)}
          •
          ${item.year}
        </small>

      </div>


      <button
        class="danger-btn"
        onclick="deleteAnime(${item.id})">

        Delete

      </button>

    </div>

  `).join("");

}


/* =========================
   ADD ANIME
========================= */

function addAnime() {

  const name =
    $("newAnimeName")
      ?.value
      .trim();


  const genre =
    $("newAnimeGenre")
      ?.value
      .trim();


  const year =
    Number(
      $("newAnimeYear")
        ?.value
    );


  const rating =
    $("newAnimeRating")
      ?.value
      .trim();


  const poster =
    $("newAnimePoster")
      ?.value
      .trim() ||
    "slime-s4.jpg";


  if (
    !name ||
    !genre
  ) {

    alert(
      "Anime name and genre are required."
    );

    return;
  }


  const newId =
    anime.length
      ? Math.max(
          ...anime.map(
            item => Number(item.id)
          )
        ) + 1
      : 1;


  anime.push({

    id: newId,

    name,

    genre,

    year:
      year || new Date().getFullYear(),

    season:
      "Season 1",

    rating:
      rating || "N/A",

    poster,

    trending:
      $("newAnimeTrending")?.checked || false,

    latest:
      $("newAnimeLatest")?.checked || false,

    premium:
      $("newAnimePremium")?.checked || false

  });


  saveAnime();

  render();

  openAdminPanel();


  alert(
    "✅ Anime added successfully!"
  );

}


/* =========================
   DELETE ANIME
========================= */

function deleteAnime(id) {

  id = Number(id);


  const item =
    anime.find(
      a => Number(a.id) === id
    );


  if (!item) return;


  if (
    !confirm(
      `Delete "${item.name}"?`
    )
  ) return;


  anime =
    anime.filter(
      a => Number(a.id) !== id
    );


  watchlist =
    watchlist.filter(
      itemId =>
        Number(itemId) !== id
    );


  saveAnime();

  saveWatchlist();

  render();

  openAdminPanel();

}


/* =========================
   ADD ADMIN
========================= */

function addAdmin() {

  const current =
    users.find(
      user =>
        user.username === currentUser
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
      ?.value
      .trim();


  const password =
    $("newAdminPassword")
      ?.value;


  if (
    !username ||
    !password
  ) {

    alert(
      "Enter admin username and password."
    );

    return;
  }


  const exists =
    users.some(
      user =>
        user.username.toLowerCase() ===
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


  saveUsers();

  openAdminPanel();


  alert(
    "✅ Admin added successfully!"
  );

}


/* =========================
   ADMIN USERS
========================= */

function renderAdminUsers() {

  return users
    .filter(
      user =>
        user.role === "admin" ||
        user.role === "super"
    )
    .map(user => {

      const protectedUser =
        user.role === "super";


      return `

        <div class="admin-item">

          <div>

            <strong>
              ${escapeHTML(user.username)}
            </strong>

            <small>
              ${user.role}
            </small>

          </div>


          ${
            protectedUser
              ? `<span>👑 Protected</span>`
              : `
                <button
                  class="danger-btn"
                  onclick="deleteAdmin('${escapeAttribute(user.username)}')">

                  Remove

                </button>
              `
          }

        </div>

      `;

    })
    .join("");

}


/* =========================
   DELETE ADMIN
========================= */

function deleteAdmin(username) {

  const current =
    users.find(
      user =>
        user.username === currentUser
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
      user =>
        user.username === username
    );


  if (!target) return;


  if (target.role === "super") {

    alert(
      "❌ Super Admin cannot be removed."
    );

    return;
  }


  if (
    !confirm(
      `Remove admin "${username}"?`
    )
  ) return;


  users =
    users.filter(
      user =>
        user.username !== username
    );


  saveUsers();

  openAdminPanel();


  alert(
    "Admin removed."
  );

}


/* =========================
   ESCAPE HTML
========================= */

function escapeHTML(value) {

  return String(value)
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


function escapeAttribute(value) {

  return String(value)
    .replace(
      /'/g,
      "\\'"
    )
    .replace(
      /"/g,
      "&quot;"
    );

}


/* =========================
   MODAL BACKDROP
========================= */

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


/* =========================
   KEYBOARD
========================= */

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


/* =========================
   START NOX
========================= */

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


    const dailyBtn =
      $("dailyBtn");


    if (dailyBtn) {

      dailyBtn.addEventListener(
        "click",
        claimDaily
      );

    }


    const loginBtn =
      $("loginBtn");


    if (loginBtn) {

      loginBtn.addEventListener(
        "click",
        openLogin
      );

    }


    const adminBtn =
      $("adminBtn");


    if (adminBtn) {

      adminBtn.addEventListener(
        "click",
        openAdmin
      );

    }


    console.log(
      "NOX Anime started successfully."
    );

  }

  catch (error) {

    console.error(
      "NOX Anime Error:",
      error
    );


    const loader =
      $("loader");


    if (loader) {

      loader.innerHTML = `

        <div
          style="
            text-align:center;
            padding:30px;
          "
        >

          <div
            style="
              font-size:40px;
              margin-bottom:15px;
            "
          >
            ⚠️
          </div>


          <h2>
            NOX Anime Error
          </h2>


          <p>
            Something went wrong.
          </p>


          <button
            onclick="location.reload()"
            style="
              padding:12px 22px;
              border:0;
              border-radius:10px;
              background:#168cff;
              color:white;
              font-size:16px;
              cursor:pointer;
            "
          >
            Refresh
          </button>

        </div>

      `;

    }

  }

}


/* =========================
   PAGE LOAD
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
