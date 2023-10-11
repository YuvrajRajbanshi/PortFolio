console.log("this is virat")

console.log("Hello world")
function myFunction() {
    let sunsine = document.getElementById("sun");
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        sunsine.src = "/img/sun.png";
    } else {
        sunsine.src = "/img/moon.png";
    }
}