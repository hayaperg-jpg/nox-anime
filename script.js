const DEFAULT=[["Solo Leveling","Action","9.1"],["Attack on Titan","Action","9.8"],["Jujutsu Kaisen","Action","9.0"],["Demon Slayer","Fantasy","9.2"],["One Piece","Adventure","9.4"],["Naruto","Adventure","9.0"],["Naruto Shippuden","Adventure","9.1"],["Bleach","Action","9.0"],["Dragon Ball Super","Action","8.9"],["My Hero Academia","Superhero","8.8"],["Chainsaw Man","Action","8.7"],["Spy x Family","Comedy","8.9"],["Blue Lock","Sports","8.6"],["Haikyuu!!","Sports","9.0"],["Death Note","Mystery","9.0"],["One Punch Man","Action","8.8"],["Black Clover","Fantasy","8.6"],["Tokyo Revengers","Drama","8.5"],["Hunter x Hunter","Adventure","9.1"],["Mob Psycho 100","Action","8.9"]];

let A=JSON.parse(localStorage.getItem('animehub_anime')||'null')||DEFAULT;
let coins=Number(localStorage.getItem('animehub_coins')||10);
let claimed=localStorage.getItem('animehub_claimed')===new Date().toDateString();

document.getElementById('coins').textContent=coins;

function img(n){
 return 'https://source.unsplash.com/600x850/?anime,'+encodeURIComponent(n);
}

function render(){
 let q=document.getElementById('q').value.toLowerCase();
 let list=A.filter(x=>x.join(' ').toLowerCase().includes(q));

 document.getElementById('grid').innerHTML=list.map(x=>
 '<article class="card" onclick="details('+JSON.stringify(x[0])+')">'+
 '<img class="poster" src="'+img(x[0])+'">'+
 '<div><b>'+x[0]+'</b><p class="muted">'+x[1]+' • ⭐ '+x[2]+'</p></div>'+
 '</article>'
 ).join('');

 document.getElementById('genresBox').innerHTML=
 [...new Set(A.map(x=>x[1]))].map(g=>
 '<button class="genre" onclick="document.getElementById(\'q\').value=\''+g+'\';render()">'+g+'</button>'
 ).join('');
}

function claim(){
 if(claimed)return alert('Daily 10 coins already claimed. Come back tomorrow.');
 coins+=10;
 claimed=true;
 localStorage.setItem('animehub_coins',coins);
 localStorage.setItem('animehub_claimed',new Date().toDateString());
 document.getElementById('coins').textContent=coins;
 alert('🎁 10 free coins added!');
}

function redeem(c,d){
 if(coins<c)return alert('Not enough coins.');
 coins-=c;
 localStorage.setItem('animehub_coins',coins);
 document.getElementById('coins').textContent=coins;
 alert('👑 Demo: Premium activated for '+d+' days.');
}

function details(n){
 document.getElementById('body').innerHTML=
 '<h2>'+n+'</h2><p class="muted">Details and episodes</p>'+
 [1,2,3,4,5,6].map(i=>
 '<button onclick="watch('+JSON.stringify(n+' — Episode '+i)+')">Episode '+i+'</button>'
 ).join(' ');
 openM();
}

function watch(n){
 document.getElementById('body').innerHTML=
 '<h2>▶ '+n+'</h2>'+
 '<div style="aspect-ratio:16/9;background:#050507;display:grid;place-items:center;border-radius:10px">Licensed video source goes here</div>'+
 '<p class="muted">Connect your authorized video/API source.</p>';
 openM();
}

function openM(){
 document.getElementById('modal').classList.remove('hidden');
}

function closeM(){
 document.getElementById('modal').classList.add('hidden');
}

function adminLogin(){
 let p=prompt('Admin password (demo):');
 if(p!=='ANIMEADMIN')return alert('Wrong password.');
 adminPanel();
}

function adminPanel(){
 document.getElementById('body').innerHTML=
 '<h2>🛠 Admin Panel</h2>'+
 '<p class="muted">Demo only. Real admin security must be server-side.</p>'+
 '<div class="adminrow"><input id="an" placeholder="Anime name"><input id="ag" placeholder="Genre"><input id="ar" placeholder="Rating"><button class="pink" onclick="addAnime()">Add</button></div>'+
 A.map((x,i)=>
 '<div class="adminrow"><input value="'+x[0]+'" id="n'+i+'"><input value="'+x[1]+'" id="g'+i+'"><input value="'+x[2]+'" id="r'+i+'"><button onclick="delAnime('+i+')">Delete</button></div>'
 ).join('');

 openM();
}

function addAnime(){
 let n=document.getElementById('an').value.trim();
 let g=document.getElementById('ag').value.trim()||'Anime';
 let r=document.getElementById('ar').value.trim()||'8.0';

 if(!n)return;

 A.push([n,g,r]);
 save();
 adminPanel();
 render();
}

function delAnime(i){
 A.splice(i,1);
 save();
 adminPanel();
 render();
}

function save(){
 localStorage.setItem('animehub_anime',JSON.stringify(A));
}

render();
