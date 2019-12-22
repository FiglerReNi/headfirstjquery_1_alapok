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

    //handler function lesz belőle, így hívjuk meg lent
    //A változat, a tényleges hasznlat előtt kell létrehozni
    // var checkForCode = function(){
    //     var discount;
    //     if($.contains(this, document.getElementById('hasDiscount'))){
    //         discount = "<p>Your disount is 20%!</p>"
    //     }
    //     else{
    //         discount = "<p>Sorry, no discount this time!</p>";
    //     }
    //     $(this).append(discount);
    //     $(".guessBox").unbind('click');
    // };
    //handler function lesz belőle, így hívjuk meg fent
    //B változat, bárhol létrehozható
    //eltalálta-e a kedvezményt
    function checkForCode() {
        var discount;
        //megnézi hogy az első elem child elemei közt szerepel e a második elem
        if ($.contains(this, document.getElementById('hasDiscount'))) {
            var myNum = getRandom(10, 1);
            discount = "<p>Your disount is " + myNum + "%</p>"
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $(this).append(discount);
        $(".guessBox").unbind('click');
    }

    //C változat anonymous functionnal
    //  $(".guessBox").click(function(){
    //5-10 között generálunk random számokat
    // var discount = Math.floor((Math.random()*6)+5);
    // var discountMsg = "<p>Your disount is " + discount + "%</p>";
    //hozzáfűzés
    // $(this).append(discountMsg);
//Leszedi az eseményt a selectorról
//         $(".guessBox").unbind('click');
//Csak arról szedi le ami kattintva volt:
    // $(this).unbind('click');
//Végig tudunk menni egy selectorhoz tartozó összes elemen egyesével, mint egy ciklus:
//         $(".guessBox").each(function () {
//             $(this).unbind('click');
//         })
//     });

});

//Binding an event
//1. változat: az oldal töltődése közben hozzáadunk egy eseményt a megfelelő elemhez
// $(".guessBox").click(function(){
//     alert($(this).text());
// });

//2.változat: Az oldal betöltődése után adja hozzá az eseményt, ez akkor hasznos, ha például az oldal betöltődése után kódban hozunk létre
//új DOM elemet, amihez eseményt akarunk kötni.
// $(".guessBox").bind('click', function(){
//     alert($(this).text());
// });

//Unbind an event
// $("#myElement").bind ('click', function() {
//     alert($(this).text());
// });
// $("#myElement").unbind('click');

//Unbind events
// $("#myElement").bind ('focus', function() {
//     alert("I've got focus");
// });
// $("#myElement").click(function(){
//     alert('You clicked me.');
// });
// $("#myElement").unbind();

//Functions:
//1. anonymus or self-executing:
// $(".guessBox").click(function(){
//     alert('teszt')
// }
//2. function declaration, bárhol használhatom
// function myFunc1(){
//     $("div").hide();
// }
//3. function expression, csak deklarálás után használhatom a kódban
// var myFunc2 = function() {
//     $("div").show();
// }
