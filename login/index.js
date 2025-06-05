$("#main").on("click", function () {
    $(this).addClass("pressed");
    $(this).removeClass("main");
    $("#title").css("opacity", "0").css("visibility", "hidden");
    $(".close").css("display", "flex")
    setTimeout(show, 200);
    setTimeout(hide, 150);
});

$(".close").on("click", function () {
    $("#second-container").css("display", "none");
    $(this).css("opacity", "0").css("visibility", "hidden");
    $("#title").css("display", "flex").css("opacity", "1").css("visibility", "visible");
    $("#main").removeClass("pressed").addClass("main");
    $(".close").css("display", "none")
});

function hide() {
    $("#title").css("display", "none")
}

function show() {
    $("#second-container").css("display", "flex");
    $(".close").css("opacity", "1").css("visibility", "visible");
    $("#title").css("display", "none")
}
