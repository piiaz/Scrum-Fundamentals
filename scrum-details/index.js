$("#footer").hover(
  function () {
    $("#footerText").css({display: "flex" });
    $("#dot").css({ opacity: 0, transform: "scale(0.7) translateY(-10px)" });
    setTimeout(function () {
      $("#footerText").css({ opacity: 1 });
      $("#dot").css({display: "none" });
    }, 100);
  },
  function () {
    $("#footerText").css({ opacity: 0, display: "none" });
    $("#dot").css({ opacity: 1, transform: "scale(1) translateY(0)", display: "flex" });
  }
);