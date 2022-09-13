var isDark = false;

$( "#sitemode" ).click(function() {

    if (isDark == false) {

        // Modalità dark

        $("#sitemode").attr('style', 'box-shadow: 0px 5px 0px 0px #4DC4A6FF;');
        $("#sitemode").css("background-color", "#64FFDA");
        $("#sitemode").css("fill", "#212121FF");
        //$(".colsx").css("background-color", "#212121FF");
        $(".colsx").css("background-color", "#0A192F");
        $(".coldx").css("background-color", "#0A192F");
        $(".coldx-npt").css("background-color", "#0A192F");
        $(".welcome").css("color", "white");
        $(".subtext").css("color", "#ccd6f6");
        $(".social-icon").css("color", "white");
        $(".navbar-brand").css("color", "white");
        $(".nav-link").css("color", "white");
        $(".bluedot").css("color", "#64FFDA");
        $(".bluedot-small").css("color", "#64FFDA");
        $(".description").removeClass('gray');
        $(".description").addClass('text-white');
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass('navbar-dark');
        $(".particle").addClass('particle-dark');
        $(".particle").removeClass('particle');
        $(".navbar").css("background-color", "initial");



        isDark = true;


    } else if (isDark == true) {

        // Modalità light

        $("#sitemode").attr('style', 'box-shadow: 0px 5px 0px 0px #001a56;');
        $("#sitemode").css("background-color", "#002173");
        $("#sitemode").css("fill", "white");
        $(".colsx").css("background-color", "white");
        $(".coldx").css("background-color", "#F0E7DB");
        $(".coldx-npt").css("background-color", "#F0E7DB");
        $(".welcome").css("color", "black");
        $(".social-icon").css("color", "black");
        $(".navbar-brand").css("color", "black");
        $(".nav-link").css("color", "black");
        $(".bluedot").css("color", "#0b5ed7");
        $(".bluedot-small").css("color", "#0b5ed7");
        $(".description").removeClass('text-white');
        $(".description").addClass('gray');
        $(".navbar").removeClass('navbar-dark');
        $(".navbar").addClass("navbar-light");
        $(".particle-dark").addClass('particle');
        $(".particle-dark").removeClass('particle-dark');



        isDark = false;


    }

});

    /* TYPEWRITER */

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

    };


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});




