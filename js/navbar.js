$(document).ready(function() {
    var $page = window.location.href;
    console.log($page);
    $(".navbar-text-links li a").each(function() {
        var $href = $(this).attr("href");
        $href = new URL($href, $page).href;
        if ($href == $page || $href == "") {
            $(this).addClass("navbar-text-link-highlight");
            console.log("Success on", $(this).text());
        } else {
            $(this).removeClass("navbar-text-link-highlight");
        }
        console.log($href, $page);
    });

    
    
});

function toggle_navbar_links() {
    $('.navbar-links').toggleClass("navbar-links-showing");
    console.log("called");
}