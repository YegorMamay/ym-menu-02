var menu = function () {
    $("nav").hide();
    $("#menu-btn").click(function () {
        $("nav").slideToggle("fast", "linear");
    })
}();