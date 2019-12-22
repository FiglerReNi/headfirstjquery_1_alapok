$(document).ready(function () {
    $(".guessBox").click(checkForCode);

    //melyik kép mögött legyen a kedvezmény
    var hideCode = function () {
        var random = getRandom(4, 0);
        $(".guessBox").each(function (index, value) {
            if (index == random) {
                $(this).append('<span id="hasDiscount"></span>');
                return false;
            }
        })
    };
    hideCode();

    //random generátor
    function getRandom(num1, num2) {
        var randomNumber = Math.floor((Math.random() * num1) + num2);
        return randomNumber;
    }

    function checkForCode() {
        var discount;
        //megnézi hogy az első elem child elemei közt szerepel e a második elem
        if ($.contains(this, document.getElementById('hasDiscount'))) {
            var myNum = getRandom(100, 1);
            discount = "<p>Your disount is " + myNum + "%</p>"
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $(".guessBox").each(function (index, value) {
            if ($.contains(this, document.getElementById('hasDiscount'))) {
                $(this).addClass('discount');
            }
            else{
                $(this).addClass('no_discount');
            }
        });
        $("#result").append(discount);
        $(".guessBox").unbind('click');
    }

//A változat
//     $(".guessBox").mouseenter(function(){
//         $(this).removeClass('no_hover');
//         $(this).addClass('hover');
//     })
//     $(".guessBox").mouseleave(function(){
//         $(this).removeClass('hover');
//         $(this).addClass('no_hover');
//     })
//B változat
    $(".guessBox").hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        })
});