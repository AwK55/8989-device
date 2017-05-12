 var link = document.querySelector(".contacts-feedback");

 var popup = document.querySelector(".modal-feedback");
 var close = popup.querySelector(".modal-window-close");

 var form = popup.querySelector("form");
 var name = popup.querySelector("[name=first-name]");
 var email = popup.querySelector("[name=email]");

 // var storage = localStorage.getItem("first-name");

 link.addEventListener("click", function (event) {
   event.preventDefault();
   popup.classList.add("modal-feedback--show");

   // if (storage) {
   //   name.value = storage;
   //   email.focus();
   // } else {
   //   name.focus();
   // }

 });

 close.addEventListener("click", function (event) {
   event.preventDefault();
   popup.classList.remove("modal-feedback--show");
 });

 form.addEventListener("submit", function (event) {
   if (!login.value || !password.value) {
     event.preventDefault();
     popup.offsetWidth = popup.offsetWidth;
   } else {
     localStorage.setItem("name", name.value);
   }
 });

 window.addEventListener("keydown", function (event) {
   if (event.keyCode === 27) {
     if (popup.classList.contains("modal-feedback--show")) {
       popup.classList.remove("modal-feedback--show");
     }
   }
 });

 var mapOpen = document.querySelector(".contacts-map__ref");

 var mapPopup = document.querySelector(".modal-map-window");
 var mapClose = mapPopup.querySelector(".modal-close");

 mapOpen.addEventListener("click", function (event) {
   event.preventDefault();
   mapPopup.classList.add("modal-window--show");
 });

 mapClose.addEventListener("click", function (event) {
   event.preventDefault();
   mapPopup.classList.remove("modal-window--show");
 });

 window.addEventListener("keydown", function (event) {
   if (event.keyCode === 27) {
     if (mapPopup.classList.contains("modal-window--show")) {
       mapPopup.classList.remove("modal-window--show");
     }
   }
 });
