$(function () {

    for (var i = 1; i <= 3; i++) {
        $(".tabs-block").on('click', ".tab" + i, qwe())

    }

    function qwe() {
        var a = i;
        return function () {
            for (var k = 1; k <= 3; k++) {
                if (a == k) {
                    $(".tabs-block").find(".slide:nth-child(" + (k + 1) + " )").removeClass("hidden");
                    $(".tabs-block").find(".tab" + k).addClass("active-tab")
                } else {
                    $(".tabs-block").find(".slide:nth-child(" + (k + 1) + ")").addClass("hidden");
                    $(".tabs-block").find(".tab" + k).removeClass("active-tab")
                }
            }
        }
    }
})
$('.parallax-window').parallax({
    imageSrc: 'img/u25_state0.png'
});