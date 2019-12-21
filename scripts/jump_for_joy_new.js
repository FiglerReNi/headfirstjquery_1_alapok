$(document).ready(function(){
    $(".guessBox").click(function(){
        //5-10 között generálunk random számokat
        var discount = Math.floor((Math.random()*6)+5);
        var discountMsg = "<p>Your disount is " + discount + "%</p>";
        //hozzáfűzés
        $(this).append(discountMsg);
//Leszedi az eseményt a selectorról
        $(".guessBox").unbind('click');
//Csak arról szedi le ami kattintva volt:
        // $(this).unbind('click');
//Végig tudunk menni egy selectorhoz tartozó összes elemen egyesével, mint egy ciklus:
//         $(".guessBox").each(function () {
//             $(this).unbind('click');
//         })
    })
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
//2. function declaration
// function myFunc1(){
//     $("div").hide();
// }
//3. function expression
// var myFunc1 = function() {
//     $("div").show();
// }