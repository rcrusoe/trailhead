// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

var running = false;

function carouselTimer(){
    $('.carousel > .feature').addClass('hidden').removeClass('slide-in-left');
    var incoming = 1;
    var carouselLength = 6;
    $('.carousel > .feature:nth-of-type(' + incoming +')').addClass('slide-in-left').removeClass('hidden');
    if (running == false){
        var interval = setInterval(changeItem, 6000);
    }

    function changeItem(){
        running = true;
        incoming++;
        if (incoming > carouselLength){
            incoming = 1;
        }

        $('.carousel > .feature:nth-of-type(' + incoming +')').addClass('slide-in-left').removeClass('hidden');
        $('.carousel > .feature:not(:nth-of-type(' + incoming +'))').addClass('hidden').removeClass('slide-in-left');
    }
}
