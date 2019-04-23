window.onload(function() {
  let width = document.body.clientWidth;
  if (width < 800) {
    document
      .getElementsByClassName("sidebar-content-grid")
      .classList.remove("animated");
  }
});
