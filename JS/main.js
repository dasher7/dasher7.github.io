window.addEventListener("load", () => {
  //removing animation CSS class for mobile;
  if (window.innerWidth < 950) {
    //removing sidebar animations
    document.getElementById("sidebar").classList.remove("animated");
    document.getElementById("sidebar").classList.remove("fadeInRight");
    document.getElementById("sidebar").classList.remove("slow");
    //removing sidebar title animations
    document.getElementById("sidebar-title").classList.remove("animated");
    document.getElementById("sidebar-title").classList.remove("zoomIn");
    //removing sidebar text animations
    document.getElementById("skill-title").classList.remove("animated");
    document.getElementById("skill-title").classList.remove("zoomIn");
    //removing image animations
    document.getElementById("propic").classList.remove("animated");
    document.getElementById("propic").classList.remove("zoomIn");
    //removing icons animations
    document.getElementById("sidebar-icon").classList.remove("animated");
    document.getElementById("sidebar-icon").classList.remove("zoomIn");
    //removing buttons animations
    document.getElementById("sidebar-buttons").classList.remove("animated");
    document.getElementById("sidebar-buttons").classList.remove("zoomIn");
    //removing skill animations
    document.getElementById("skills").classList.remove("animated");
    document.getElementById("skills").classList.remove("fadeInRight");
    document.getElementById("skills").classList.remove("slow");
    document.getElementById("skills-container").classList.remove("animated");
    document.getElementById("skills-container").classList.remove("pulse");
    document.getElementById("skills-container").classList.remove("slow");
    document.getElementById("skill-title").classList.remove("animated");
    document.getElementById("skill-title").classList.remove("slow");
    //removing exp animations
    document.getElementById("personal-experience").classList.remove("animated");
    document
      .getElementById("personal-experience")
      .classList.remove("fadeInRight");
    document.getElementById("personal-experience").classList.remove("slow");
    document
      .getElementById("personal-experience-container")
      .classList.remove("animated");
    document
      .getElementById("personal-experience-container")
      .classList.remove("pulse");
    document
      .getElementById("personal-experience-container")
      .classList.remove("slow");
    document
      .getElementById("personal-experience-title")
      .classList.remove("animated");
    document
      .getElementById("personal-experience-title")
      .classList.remove("zoomIn");
  }
});
