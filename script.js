window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


window.addEventListener("load", function() {
  var image = document.querySelector(".fade-in");
  image.classList.add("visible");
});
