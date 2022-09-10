var isDark = false;

$( "#sitemode" ).click(function() {

    if(isDark == false){

        $("#sitemode").attr('style', 'box-shadow: 0px 5px 0px 0px #ffb14b;');
        $("#sitemode").css("background-color", "#ffed3f");
        $("#sitemode").css("fill", "#212121FF");
        $(".colsx").css("background-color", "#212121FF");
        $(".coldx").css("background-color", "black");
        $(".welcome").css("color", "white");
        $(".social-icon").css("color", "white");
        $(".navbar-brand").css("color", "white");
        $(".nav-link").css("color", "white");
        $(".description").removeClass('gray');
        $(".description").addClass('text-white');


        isDark = true;


    }

    else if(isDark == true){

        $("#sitemode").attr('style', 'box-shadow: 0px 5px 0px 0px #9A5BB6FF;');
        $("#sitemode").css("background-color", "#c681e6");
        $("#sitemode").css("fill", "white");
        $(".colsx").css("background-color", "white");
        $(".coldx").css("background-color", "#F0E7DB");
        $(".welcome").css("color", "black");
        $(".social-icon").css("color", "black");
        $(".navbar-brand").css("color", "black");
        $(".nav-link").css("color", "black");
        $(".description").removeClass('text-white');
        $(".description").addClass('gray');



        isDark = false;


    }




});