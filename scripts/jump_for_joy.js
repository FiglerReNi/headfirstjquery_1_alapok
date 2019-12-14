$(document).ready(function(){
    $(".guessBox").click(function(){
        //eltávolítás
        //$("div div p").remove();
        $(".guessBox p").remove();
        //5-10 között generálunk random számokat
        var discount = Math.floor((Math.random()*6)+5);
        var discountMsg = "<p>Your disount is " + discount + "%</p>";
        //hozzáfűzés
        $(this).append(discountMsg);
    })
});