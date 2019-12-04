$(document).ready(function (){
    $("#move_up").click(function(){
        $("#change_me").animate({top: 30}, 200);
    });
    $("#move_down").click(function(){
        $("#change_me").animate({top: 500}, 2000);
    });
    $("#color").click(function(){
        $("#change_me").css("color","purple");
    });
    $("#disappear").click(function(){
        $("#change_me").toggle("slow");
    });
});