var elementPosition = $('#header_nav').offset();

$(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
        $('#header_nav').css('position', 'fixo').css('top', '0');
    } else {
        $('#header_nav').css('position', 'static');
    }
});

var ele = $('#header_nav').offset();

$(window).scroll(function () {
    if ($(window).scrollTop() > ele.top) {
        $('#header_nav').css()
    }
})


