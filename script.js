/* =========================================================
   NOX ANIME
   Complete frontend demo
   ========================================================= */


/* ================= STORAGE ================= */

const ANIME_KEY = "nox_anime_data_v3";
const USERS_KEY = "nox_users_v3";
const CURRENT_USER_KEY = "nox_current_user_v3";
const WATCH_KEY = "nox_watchlist_v3";
const COINS_KEY = "nox_coins_v3";
const DAILY_KEY = "nox_daily_v3";
const PREMIUM_KEY = "nox_premium_v3";


/* ================= DEFAULT ANIME ================= */

const DEFAULT_ANIME = [

  {
    id:1,
    name:"That Time I Got Reincarnated as a Slime",
    genre:"Fantasy",
    year:"2024",
    rating:"8.5",
    season:"Season 4",
    poster:"slime-s4.jpg",
    video:"",
    premium:false,
    trending:true,
    latest:true
  },

  {
    id:2,
    name:"Solo Leveling",
    genre:"Action",
    year:"2024",
    rating:"9.1",
    season:"Season 2",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:true
  },

  {
    id:3,
    name:"One Piece",
    genre:"Adventure",
    year:"1999",
    rating:"9.0",
    season:"Ongoing",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:false
  },

  {
    id:4,
    name:"Jujutsu Kaisen",
    genre:"Action",
    year:"2020",
    rating:"8.8",
    season:"Season 2",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:true
  },

  {
    id:5,
    name:"Demon Slayer",
    genre:"Fantasy",
    year:"2019",
    rating:"8.6",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:false
  },

  {
    id:6,
    name:"Attack on Titan",
    genre:"Dark",
    year:"2013",
    rating:"9.0",
    season:"Final Season",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:false
  },

  {
    id:7,
    name:"Naruto",
    genre:"Adventure",
    year:"2002",
    rating:"8.4",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  },

  {
    id:8,
    name:"Bleach",
    genre:"Action",
    year:"2004",
    rating:"8.2",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:false
  },

  {
    id:9,
    name:"Dragon Ball Super",
    genre:"Action",
    year:"2015",
    rating:"8.0",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  },

  {
    id:10,
    name:"My Hero Academia",
    genre:"Superhero",
    year:"2016",
    rating:"8.0",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:false
  },

  {
    id:11,
    name:"Black Clover",
    genre:"Fantasy",
    year:"2017",
    rating:"8.2",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  },

  {
    id:12,
    name:"Chainsaw Man",
    genre:"Action",
    year:"2022",
    rating:"8.5",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:false
  },

  {
    id:13,
    name:"Spy x Family",
    genre:"Comedy",
    year:"2022",
    rating:"8.5",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  },

  {
    id:14,
    name:"Haikyuu!!",
    genre:"Sports",
    year:"2014",
    rating:"8.7",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:false
  },

  {
    id:15,
    name:"Blue Lock",
    genre:"Sports",
    year:"2022",
    rating:"8.3",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  },

  {
    id:16,
    name:"Death Note",
    genre:"Mystery",
    year:"2006",
    rating:"8.9",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:false
  },

  {
    id:17,
    name:"Tokyo Ghoul",
    genre:"Dark",
    year:"2014",
    rating:"7.7",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:false
  },

  {
    id:18,
    name:"Frieren",
    genre:"Fantasy",
    year:"2023",
    rating:"9.0",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:true,
    latest:true
  },

  {
    id:19,
    name:"Hunter x Hunter",
    genre:"Adventure",
    year:"2011",
    rating:"9.0",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:false
  },

  {
    id:20,
    name:"Vinland Saga",
    genre:"Historical",
    year:"2019",
    rating:"8.8",
    season:"TV",
    poster:"",
    video:"",
    premium:false,
    trending:false,
    latest:true
  }

];


/* ================= DATA ================= */

let animeList = loadAnime();

let users = loadUsers();

let currentUser = localStorage.getItem(CURRENT_USER_KEY) || "";

let coins = Number(
  localStorage.getItem(COINS_KEY) || "10"
);

let watchlist = JSON.parse(
  localStorage.getItem(WATCH_KEY) || "[]"
);

let premiumUntil = Number(
  localStorage.getItem(PREMIUM_KEY) || "0"
);


/* ================= HELPERS ================= */

function $(id){
  return document.getElementById(id);
}


function saveAnimeData(){
  localStorage.setItem(
    ANIME_KEY,
    JSON.stringify(animeList)
  );
}


function loadAnime(){

  try{

    const saved = JSON.parse(
      localStorage.getItem(ANIME_KEY)
    );

    if(Array.isArray(saved) && saved.length){
      return saved;
    }

  }catch(e){}

  localStorage.setItem(
    ANIME_KEY,
    JSON.stringify(DEFAULT_ANIME)
  );

  return [...DEFAULT_ANIME];
}


function loadUsers(){

  try{

    const saved = JSON.parse(
      localStorage.getItem(USERS_KEY)
    );

    if(Array.isArray(saved) && saved.length){
      return saved;
    }

  }catch(e){}

  const defaultUsers = [

    {
      id:1,
      username:"superadmin",
      password:"ANIMEADMIN",
      role:"super"
    },

    {
      id:2,
      username:"admin",
      password:"ADMIN123",
      role:"admin"
    }

  ];

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(defaultUsers)
  );

  return defaultUsers;
}


function saveUsers(){

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

}


function saveCoins(){

  localStorage.setItem(
    COINS_KEY,
    String(coins)
  );

}


function saveWatchlist(){

  localStorage.setItem(
    WATCH_KEY,
    JSON.stringify(watchlist)
  );

}


function isPremium(){

  return (
    premiumUntil &&
    Date.now() < premiumUntil
  );

}


function isSuperAdmin(){

  const user = users.find(
    u => u.username === currentUser
  );

  return user && user.role === "super";

}


function isAdmin(){

  const user = users.find(
    u => u.username === currentUser
  );

  return (
    user &&
    (user.role === "admin" || user.role === "super")
  );

}


/* ================= INIT ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(() => {

      $("loader").style.display = "none";

    },700);


    renderAnime();

    updateCoins();

    updatePremium();

    updateLoginUI();

    renderGenres();

  }
);


/* ================= RENDER ================= */

function renderAnime(){

  const query = (
    $("search")?.value || ""
  ).toLowerCase().trim();


  let filtered = animeList.filter(
    anime =>
      anime.name
        .toLowerCase()
        .includes(query)
  );


  renderGrid(
    $("trendingGrid"),
    filtered.filter(a => a.trending)
  );


  renderGrid(
    $("latestGrid"),
    filtered.filter(a => a.latest)
  );


  const watched = filtered.filter(
    a => watchlist.includes(a.id)
  );


  renderGrid(
    $("watchGrid"),
    watched
  );

}


function renderGrid(container, list){

  if(!container) return;


  if(!list.length){

    container.innerHTML =
      `<div class="empty">
        No anime found.
      </div>`;

    return;
  }


  container.innerHTML =
    list.map(
      animeCard
    ).join("");

}


function animeCard(anime){

  const poster = anime.poster
    ? anime.poster
    : "";


  return `

    <div class="anime-card">

      <div
        class="poster-wrap"
        onclick="openAnime(${anime.id})"
      >

        ${
          poster

          ?

          `<img
            class="poster"
            src="${escapeHTML(poster)}"
            alt="${escapeHTML(anime.name)}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          >`

          :

          ""
        }


        <div
          class="poster-fallback"
          style="display:${poster ? "none" : "flex"}"
        >
          ${escapeHTML(anime.name)}
        </div>


        ${
          anime.premium

          ?

          `<div class="premium-tag">
            👑 PREMIUM
          </div>`

          :

          ""
        }

      </div>


      <div class="card-info">

        <h3>
          ${escapeHTML(anime.name)}
        </h3>

        <div class="card-meta">
          ⭐ ${escapeHTML(anime.rating)}
          •
          ${escapeHTML(anime.year)}
        </div>


        <div class="card-buttons">

          <button
            onclick="openAnime(${anime.id})"
          >
            ▶ Watch
          </button>

          <button
            onclick="toggleWatchlist(${anime.id})"
          >
            ${
              watchlist.includes(anime.id)
              ? "✓ Saved"
              : "＋ Save"
            }
          </button>

        </div>

      </div>

    </div>

  `;

}


/* ================= GENRES ================= */

function renderGenres(){

  const container = $("genresGrid");

  if(!container) return;


  const genres = [
    ...new Set(
      animeList.map(
        anime => anime.genre
      )
    )
  ];


  container.innerHTML =
    genres.map(
      genre => `

        <button
          class="genre-btn"
          onclick="filterGenre('${escapeJS(genre)}')"
        >
          ${escapeHTML(genre)}
        </button>

      `
    ).join("");

}


function filterGenre(genre){

  const search = $("search");

  if(search){

    search.value = genre;

    renderAnime();

  }

  scrollToSection("trending");

}


function showAllAnime(){

  if($("search")){
    $("search").value = "";
  }

  renderAnime();

  scrollToSection("trending");

}


/* ================= WATCHLIST ================= */

function toggleWatchlist(id){

  const index =
    watchlist.indexOf(id);


  if(index === -1){

    watchlist.push(id);

  }else{

    watchlist.splice(index,1);

  }


  saveWatchlist();

  renderAnime();

}


/* ================= OPEN ANIME ================= */

function openAnime(id){

  const anime =
    animeList.find(
      a => a.id === id
    );


  if(!anime) return;


  if(
    anime.premium &&
    !isPremium()
  ){

    alert(
      "👑 Premium required for this anime."
    );

    scrollToSection("premium");

    return;

  }


  const videoURL =
    anime.video ||
    "";


  $("animeDetails").innerHTML = `

    <div class="player-title">
      ${escapeHTML(anime.name)}
    </div>

    <div class="player-meta">
      ⭐ ${escapeHTML(anime.rating)}
      •
      ${escapeHTML(anime.season)}
      •
      ${escapeHTML(anime.genre)}
    </div>


    ${
      videoURL

      ?

      `

      <video
        id="videoPlayer"
        class="real-player"
        controls
        playsinline
        preload="metadata"
      >

        <source
          src="${escapeHTML(videoURL)}"
          type="video/mp4"
        >

        Your browser does not support HTML5 video.

      </video>

      `

      :

      `

      <div class="empty" style="margin-top:20px">

        <h3>🎬 Video not connected</h3>

        <p>
          Add an authorized MP4 video URL from the
          Admin Panel.
        </p>

      </div>

      `

    }


    <div class="player-controls">

      <select
        class="player-select"
        onchange="changeQuality(this.value)"
      >

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


      <select
        class="player-select"
        onchange="changeAudio(this.value)"
      >

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


    <div class="player-actions">

      <button
        class="secondary-btn"
        onclick="toggleWatchlist(${anime.id})"
      >
        ${
          watchlist.includes(anime.id)
          ? "✓ In Watchlist"
          : "＋ Watchlist"
        }
      </button>


      ${
        videoURL

        ?

        `<button
          class="primary-btn"
          onclick="downloadAnime(${anime.id})"
        >
          ⬇ Download
        </button>`

        :

        ""

      }

    </div>

  `;


  $("animeModal").classList.remove(
    "hidden"
  );

}


function closeModal(id){

  const modal = $(id);

  if(modal){

    modal.classList.add(
      "hidden"
    );

  }

}


/* ================= VIDEO ================= */

function changeQuality(value){

  if(value === "auto"){
    return;
  }

  alert(
    "Quality selected: " +
    value +
    "\n\nActual quality switching requires separate authorized video streams or an HLS/DASH stream."
  );

}


function changeAudio(value){

  alert(
    "Audio selected: " +
    value +
    "\n\nActual audio switching requires separate authorized audio/video tracks or an HLS/DASH stream."
  );

}


function downloadAnime(id){

  const anime =
    animeList.find(
      a => a.id === id
    );


  if(!anime || !anime.video){

    alert(
      "No authorized download video has been added yet."
    );

    return;
  }


  const link =
    document.createElement("a");

  link.href = anime.video;

  link.download =
    anime.name + ".mp4";

  link.target = "_blank";

  document.body.appendChild(link);

  link.click();

  link.remove();

}


/* ================= DAILY COINS ================= */

function claimDaily(){

  const today =
    new Date()
      .toISOString()
      .slice(0,10);


  const last =
    localStorage.getItem(
      DAILY_KEY
    );


  if(last === today){

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
    "🎉 You received +10 free coins!"
  );

}


function updateCoins(){

  $("coinCount").textContent =
    coins;

}


/* ================= PREMIUM ================= */

function redeemPremium(cost,days){

  if(coins < cost){

    alert(
      "You need " +
      cost +
      " coins."
    );

    return;
  }


  coins -= cost;

  const now = Date.now();

  const base =
    isPremium()
    ? premiumUntil
    : now;


  premiumUntil =
    base +
    days *
    24 *
    60 *
    60 *
    1000;


  localStorage.setItem(
    PREMIUM_KEY,
    String(premiumUntil)
  );


  saveCoins();

  updateCoins();

  updatePremium();


  alert(
    "👑 Premium activated for " +
    days +
    " days!"
  );

}


function updatePremium(){

  const box =
    $("premiumStatus");

  if(!box) return;


  if(isPremium()){

    const remaining =
      Math.ceil(
        (premiumUntil - Date.now()) /
        86400000
      );


    box.innerHTML =
      "👑 Premium Active • " +
      remaining +
      " day(s) remaining";

  }else{

    box.innerHTML =
      "Free account • Redeem coins to unlock Premium.";

  }

}


function paymentNotice(){

  alert(
    "Payment system is not connected in this static GitHub Pages demo."
  );

}


/* ================= LOGIN ================= */

function openLogin(){

  closeModal("signupModal");

  $("loginModal").classList.remove(
    "hidden"
  );

}


function openSignup(){

  closeModal("loginModal");

  $("signupModal").classList.remove(
    "hidden"
  );

}


function signupUser(){

  const username =
    $("signupUsername").value.trim();

  const password =
    $("signupPassword").value;


  if(!username || !password){

    alert(
      "Please enter username and password."
    );

    return;
  }


  if(
    users.some(
      u =>
        u.username.toLowerCase() ===
        username.toLowerCase()
    )
  ){

    alert(
      "Username already exists."
    );

    return;
  }


  const newUser = {

    id:
      Date.now(),

    username:
      username,

    password:
      password,

    role:
      "user"

  };


  users.push(newUser);

  saveUsers();


  currentUser =
    username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  closeModal("signupModal");

  updateLoginUI();


  alert(
    "Account created successfully."
  );

}


function loginUser(){

  const username =
    $("loginUsername").value.trim();

  const password =
    $("loginPassword").value;


  const user =
    users.find(
      u =>
        u.username === username &&
        u.password === password
    );


  if(!user){

    alert(
      "Wrong username or password."
    );

    return;
  }


  currentUser =
    user.username;


  localStorage.setItem(
    CURRENT_USER_KEY,
    currentUser
  );


  closeModal("loginModal");

  updateLoginUI();


  alert(
    "Welcome " +
    user.username +
    "!"
  );

}


function logoutUser(){

  currentUser = "";

  localStorage.removeItem(
    CURRENT_USER_KEY
  );

  updateLoginUI();

}


function updateLoginUI(){

  const loginBtn =
    $("loginBtn");

  const adminBtn =
    $("adminBtn");


  if(!currentUser){

    loginBtn.textContent =
      "Login";

    loginBtn.onclick =
      openLogin;

    adminBtn.classList.add(
      "hidden"
    );

    return;
  }


  loginBtn.textContent =
    "Logout";


  loginBtn.onclick =
    logoutUser;


  if(isAdmin()){

    adminBtn.classList.remove(
      "hidden"
    );

  }else{

    adminBtn.classList.add(
      "hidden"
    );

  }

}


/* ================= ADMIN ================= */

function openAdmin(){

  if(!isAdmin()){

    alert(
      "Admin access required."
    );

    return;
  }


  renderAdminAnime();

  renderAdminUsers();


  $("adminModal").classList.remove(
    "hidden"
  );

}


function adminTab(id,button){

  document
    .querySelectorAll(
      ".admin-tab-content"
    )
    .forEach(
      el =>
        el.classList.add("hidden")
    );


  document
    .querySelectorAll(
      ".admin-tab"
    )
    .forEach(
      el =>
        el.classList.remove("active")
    );


  $(id).classList.remove(
    "hidden"
  );


  button.classList.add(
    "active"
  );

}


/* ================= ADMIN ANIME ================= */

function saveAnime(){

  if(!isAdmin()){

    alert(
      "Admin access required."
    );

    return;
  }


  const id =
    Number(
      $("adminAnimeId").value
    );


  const name =
    $("adminName").value.trim();

  const genre =
    $("adminGenre").value.trim() ||
    "Other";

  const year =
    $("adminYear").value.trim() ||
    "2026";

  const rating =
    $("adminRating").value.trim() ||
    "N/A";

  const poster =
    $("adminPoster").value.trim();

  const video =
    $("adminVideo").value.trim();

  const premium =
    $("adminPremium").value ===
    "true";


  if(!name){

    alert(
      "Anime name is required."
    );

    return;
  }


  if(id){

    const anime =
      animeList.find(
        a => a.id === id
      );


    if(anime){

      anime.name =
        name;

      anime.genre =
        genre;

      anime.year =
        year;

      anime.rating =
        rating;

      anime.poster =
        poster;

      anime.video =
        video;

      anime.premium =
        premium;

    }

  }else{

    animeList.push({

      id:
        Date.now(),

      name:
        name,

      genre:
        genre,

      year:
        year,

      rating:
        rating,

      season:
        "TV",

      poster:
        poster,

      video:
        video,

      premium:
        premium,

      trending:
        true,

      latest:
        true

    });

  }


  saveAnimeData();

  renderAnime();

  renderGenres();

  renderAdminAnime();

  clearAnimeForm();


  alert(
    "Anime saved successfully."
  );

}


function editAnime(id){

  const anime =
    animeList.find(
      a => a.id === id
    );


  if(!anime) return;


  $("adminAnimeId").value =
    anime.id;

  $("adminName").value =
    anime.name;

  $("adminGenre").value =
    anime.genre;

  $("adminYear").value =
    anime.year;

  $("adminRating").value =
    anime.rating;

  $("adminPoster").value =
    anime.poster || "";

  $("adminVideo").value =
    anime.video || "";

  $("adminPremium").value =
    anime.premium
    ? "true"
    : "false";


  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function deleteAnime(id){

  if(!isAdmin()) return;


  const anime =
    animeList.find(
      a => a.id === id
    );


  if(!anime) return;


  if(
    !confirm(
      "Delete " +
      anime.name +
      "?"
    )
  ){

    return;

  }


  animeList =
    animeList.filter(
      a => a.id !== id
    );


  watchlist =
    watchlist.filter(
      a => a !== id
    );


  saveAnimeData();

  saveWatchlist();

  renderAnime();

  renderGenres();

  renderAdminAnime();

}


function clearAnimeForm(){

  $("adminAnimeId").value =
    "";

  $("adminName").value =
    "";

  $("adminGenre").value =
    "";

  $("adminYear").value =
    "";

  $("adminRating").value =
    "";

  $("adminPoster").value =
    "";

  $("adminVideo").value =
    "";

  $("adminPremium").value =
    "false";

}


function renderAdminAnime(){

  const box =
    $("adminAnimeList");

  if(!box) return;


  if(!animeList.length){

    box.innerHTML =
      `<div class="empty">
        No anime available.
      </div>`;

    return;
  }


  box.innerHTML =
    animeList.map(
      anime => `

        <div class="admin-item">

          <div>

            <div class="admin-item-title">
              ${escapeHTML(anime.name)}
            </div>

            <div class="admin-item-meta">
              ${escapeHTML(anime.genre)}
              •
              ${escapeHTML(anime.year)}
              •
              ${
                anime.video
                ? "Video ✓"
                : "Video not added"
              }
            </div>

          </div>


          <button
            onclick="editAnime(${anime.id})"
          >
            ✏ Edit
          </button>


          <button
            class="delete"
            onclick="deleteAnime(${anime.id})"
          >
            🗑 Delete
          </button>

        </div>

      `
    ).join("");

}


/* ================= ADMIN USERS ================= */

function renderAdminUsers(){

  const box =
    $("adminUsersList");

  if(!box) return;


  box.innerHTML =
    users.map(
      user => `

        <div class="admin-item">

          <div>

            <div class="admin-item-title">
              ${escapeHTML(user.username)}
            </div>

            <div class="admin-item-meta">
              Role:
              ${escapeHTML(user.role)}
            </div>

          </div>


          ${
            user.role === "super"

            ?

            `<span>
              👑 Super Admin
            </span>`

            :

            isSuperAdmin()

            ?

            `

            <button
              onclick="toggleUserRole(${user.id})"
            >
              ${
                user.role === "admin"
                ? "Make User"
                : "Make Admin"
              }
            </button>

            <button
              class="delete"
              onclick="deleteUser(${user.id})"
            >
              🗑
            </button>

            `

            :

            `<span>
              ${escapeHTML(user.role)}
            </span>`

          }

        </div>

      `
    ).join("");

}


function toggleUserRole(id){

  if(!isSuperAdmin()){

    alert(
      "Only Super Admin can change user roles."
    );

    return;
  }


  const user =
    users.find(
      u => u.id === id
    );


  if(!user) return;


  if(user.role === "admin"){

    user.role =
      "user";

  }else{

    user.role =
      "admin";

  }


  saveUsers();

  renderAdminUsers();

}


function deleteUser(id){

  if(!isSuperAdmin()){

    alert(
      "Only Super Admin can delete users."
    );

    return;
  }


  const user =
    users.find(
      u => u.id === id
    );


  if(!user) return;


  if(user.role === "super"){

    alert(
      "Super Admin cannot be removed."
    );

    return;
  }


  if(
    !confirm(
      "Delete user " +
      user.username +
      "?"
    )
  ){

    return;
  }


  users =
    users.filter(
      u => u.id !== id
    );


  saveUsers();

  renderAdminUsers();

}


/* ================= UTILITIES ================= */

function scrollToSection(id){

  const element =
    $(id);

  if(element){

    element.scrollIntoView({
      behavior:"smooth"
    });

  }

}


function escapeHTML(value){

  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


function escapeJS(value){

  return String(value ?? "")
    .replaceAll("\\","\\\\")
    .replaceAll("'","\\'");
}


/* ================= CLOSE MODAL ON BACKDROP ================= */

document.addEventListener(
  "click",
  function(event){

    if(
      event.target.classList.contains(
        "modal"
      )
    ){

      event.target.classList.add(
        "hidden"
      );

    }

  }
);


/* ================= ESC KEY ================= */

document.addEventListener(
  "keydown",
  function(event){

    if(event.key !== "Escape"){
      return;
    }


    document
      .querySelectorAll(".modal")
      .forEach(
        modal =>
          modal.classList.add("hidden")
      );

  }
);
