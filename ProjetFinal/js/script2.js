var width;
var height;

$('.zoom').hover(function () {
    $(this).zoom()
}, function () {
    $(this).trigger('zoom.destroy')
});