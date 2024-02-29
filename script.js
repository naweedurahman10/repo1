document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
  
    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  
    document.addEventListener("mouseleave", function () {
      cursor.style.opacity = "0";
    });
  
    document.addEventListener("mouseenter", function () {
      cursor.style.opacity = "1";
    });
  });
  