var isDark = false;



$( "#sitemode" ).click(function() {

    if(isDark == false){

        // Modalità dark

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
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass('navbar-dark');


        isDark = true;


    }

    else if(isDark == true){

        // Modalità light

        $("#sitemode").attr('style', 'box-shadow: 0px 5px 0px 0px #001a56;');
        $("#sitemode").css("background-color", "#002173");
        $("#sitemode").css("fill", "white");
        $(".colsx").css("background-color", "white");
        $(".coldx").css("background-color", "#F0E7DB");
        $(".welcome").css("color", "black");
        $(".social-icon").css("color", "black");
        $(".navbar-brand").css("color", "black");
        $(".nav-link").css("color", "black");
        $(".description").removeClass('text-white');
        $(".description").addClass('gray');
        $(".navbar").removeClass('navbar-dark');
        $(".navbar").addClass("navbar-light");
        $(".particle").addClass("particlel")
       // $(".particle").removeClass("particle")



        isDark = false;


    }




});