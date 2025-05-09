//Typed.js
var Typed = new Typed('#hi', {
    strings: [
        "Redbean0721.",
        "from Tainan, Taiwan.",
        "a student.",
        "hungry.",
        "......?"
    ],
    typeSpeed: 100,
    loop: true,
});

//Nav links
function goHome() {
    $("#home").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#home-section").show();
    $("#blog-section").hide();
    $("#projects-section").hide();
}

function goBlog() {
    $("#blog").addClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#blog-section").show();
    $("#home-section").hide();
    $("#projects-section").hide();

    // $.get("https://blog.imlazy.ink:233/index.php/feed/", function (data) {
    //     $('#blogs').empty();
    //     $(data).find('item').each(function () {
    //         var $item = $(this);
    //         var title = $item.find('title').text();
    //         var link = $item.find('link').text();
    //         //var description = $item.find('description').text();
    //         //var pubDate = $item.find('pubDate').text();
    //         var html = "<div class=\"box-item\">";
    //         html += "<b>" + title + "</b>";
    //         //html += "<em>" + timeString(pubDate) + "</em>";
    //         //html += "<p>" + description + "</p>";
    //         html += "&nbsp;&nbsp;->&nbsp;&nbsp;<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
    //         html += "</div>";
            
    //         $('#blogs').append(html);
    //     });
    // });
}

function goProjects() {
    $("#projects").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects-section").show();
    $("#blog-section").hide();
    $("#home-section").hide();
}
