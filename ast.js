let logo = document.getElementById("logo");
let carre = document.getElementById("carre")
let marca = document.getElementById("marplaca");
let login = document.getElementById("login");
let back1 = document.getElementById("one");
let back2 = document.getElementById("two");
let back3 = document.getElementById("thr");
let back4 = document.getElementById("four");
let back5 = document.getElementById("five");
let back6 = document.getElementById("six");
let login_sys = document.getElementById("login_sys");

// 🔧 DEV Tools - reset do sistema
document.addEventListener("keydown", function (event) {
 if (event.key === "F9") {
  localStorage.clear();
  location.reload();
 }
});

// animação inicial
setTimeout(() => {
 marca.style.display = "block";
}, 2000);

setTimeout(() => {
 marca.style.display = "none";
 logo.style.display = "block";
 carre.style.display = "block";

 document.body.classList.add("boot-bg");

 setTimeout(() => {
  Start();
 }, 2000);

}, 5000);

function Start() {
 let ja_iniciou = localStorage.getItem("ja_iniciou");

 if (ja_iniciou === "1") {
  logo.style.display = "none";
  desktop();
 } else {
  document.body.classList.remove("boot-bg");
  logo.style.display = "none";
  login.style.display = "block";
 }
}

function login_start() {
 let userPC = document.getElementById("userPC").value;
 let user = document.getElementById("user").value;
 let pass = document.getElementById("pass").value;

 if (userPC === "" || user === "") {
  alert("Por favor, preencha o nome do computador e o nome do usuário.");
  return;
 }

 login.style.display = "none";

 localStorage.setItem("userPC", userPC);
 localStorage.setItem("user", user);
 localStorage.setItem("pass", pass);
 localStorage.setItem("ja_iniciou", "1");

 setTimeout(() => {
  marca.style.display = "none";
  logo.style.display = "block";
  carre.style.display = "block";

  setTimeout(() => {
   desktop();
  }, 2000);

 }, 5000);

 console.log("Nome do computador:", localStorage.getItem("userPC"));
 console.log("Nome do usuário:", localStorage.getItem("user"));
 console.log("Senha:", localStorage.getItem("pass"));
}

function desktop(){
 
 console.log("Nome do computador:", localStorage.getItem("userPC"));
 console.log("Nome do usuário:", localStorage.getItem("user"));
 console.log("Senha:", localStorage.getItem("pass"));

 let barra = document.getElementById("barra");

 document.body.classList.remove("boot-bg");

 logo.style.display = "none";
 carre.style.display = "none";

 document.body.style.backgroundColor = "#00083B";
 //animação 
 back1.style.display = "block";
 back1.style.animation = "fadeIn 1s ease-in-out";
 setTimeout(() => {
  back2.style.display = "block";
  back2.style.animation = "fadeIn 1s ease-in-out";
 }, 500);
 setTimeout(() => {
  back3.style.display = "block";
  back3.style.animation = "fadeIn 1s ease-in-out";
 }, 1000);
 setTimeout(() => {
  back4.style.display = "block";
  back4.style.animation = "fadeIn 1s ease-in-out";
 }, 1500);
 setTimeout(() => {
  back5.style.display = "block";
  back5.style.animation = "fadeIn 1s ease-in-out";
 }, 2000);
 setTimeout(() => {
  back6.style.display = "block";
  back6.style.animation = "fadeIn 1s ease-in-out";
 }, 2500);
 
 setTimeout(() => {
  let user_sys = document.getElementById("user_sys");
  let A = document.getElementById("A");
  if (!localStorage.getItem("pass")) {
  barra.style.display = "block";
  barra.style.animation = "fadeIn 1s ease-in-out";
 } else {
  A.style.display = "block";
  user_sys.textContent = localStorage.getItem("user");
  login_sys.style.display = "block";
  login_sys.style.animation = "fadeIn 1s ease-in-out";
 }
 }, 3000);
}

enter_sys = () => {
 let pass_sys = document.getElementById("pass_sys").value;
 let button = document.getElementById("bar_img");

 if (pass_sys === localStorage.getItem("pass")) {
  login_sys.style.display = "none";
  login_sys.style.animation = "fadeOut 1s ease-in-out";
 
  button.style.display = "block";
  barra.style.display = "block";
  barra.style.animation = "fadeIn 1s ease-in-out";
  button.style.animation = "fadeIn 1s ease-in-out";
 } else {
  alert("Senha incorreta. Tente novamente.");
 }

 menu_bar = () => {
  let menu = document.getElementById("menu");
  
  if (menu.style.display === "block") {
   menu.style.display = "none";
  } else {
   menu.style.display = "block";
  }
 }
}