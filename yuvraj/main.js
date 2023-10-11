console.log("Hello world");
function myFunction() {
  let sunsine = document.getElementById("sun");
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    sunsine.src = "/img/sun.png";
  } else {
    sunsine.src = "/img/moon.png";
  }
}

let IS_BURGER_ON = false;

function toggle_mobile_burger() {
  const burger_content = document.querySelector(".navbar-burger ul");
  if (IS_BURGER_ON) {
    burger_content.style = "display: none;";
    IS_BURGER_ON = false;
  } else {
    burger_content.style = "display: block;";
    IS_BURGER_ON = true;
  }
}
