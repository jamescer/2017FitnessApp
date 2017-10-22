import * as $ from 'jquery';
declare const navProperties: any;

$(function () {
    $("#header-placeholder").load("_header.html", function () {
        $("#nav-placeholder").load(navProperties.mainNav, function () {
            $(".nav-link").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");
        });
    });


    $(".btn-primary").click(function () {
        $(this).closest(".col-md-4").css({ 'max-width': 'none' })
            .animate({ 'flex-basis': '100%' })
    })

});
$('#Adding').on('click', function (event) {
    event.preventDefault(); // To prevent following the link (optional)
    var entry = window.prompt("bitch", "sup");
});
$(function () {
    $("#footer-placeholder").load("_footer.html", function () {
    });
});
$(function () {
    $("#scripts-placeholder").load("_scripts.html", function () {
    });
});