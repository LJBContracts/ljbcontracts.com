$(document).ready(function() {
    var delay = 4000;
    setTimeout(function() {
        $("#photo_stream img").animate({left: '-=186'}, 2000, 'swing', function() {
            var left = $(this).position().left;
            if (left < 154) {
                $(this).css('left', '+=1116');
            }
        });
        setTimeout(arguments.callee, delay);
    }, delay);
});