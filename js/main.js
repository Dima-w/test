$(document).ready(function() {
    let box1 = $(".one");
    let box2 = $(".two");
    let box3 = $(".three");
    $(".one,.two,.three").height(Math.max(box1, box2, box3));
    $(".two").hide();
    $(".three").hide();
});

$("#lnk1").live('click', function() {
    $(".one").show();
    $(".two").hide();
    $(".three").hide();
    $('#lnk1').css({'color' : '#00CED1'});
    $('#lnk2').css({'color' : '#C0C0C0'});
    $('#lnk3').css({'color' : '#C0C0C0'});
});

$("#lnk2").live('click', function() {
    $(".two").show();
    $(".one").hide();
    $(".three").hide();
    $('#lnk2').css({'color' : '#00CED1'});
    $('#lnk1').css({'color' : '#C0C0C0'});
    $('#lnk3').css({'color' : '#C0C0C0'});
});
$("#lnk3").live('click', function() {
    $(".three").show();
    $(".one").hide();
    $(".two").hide();
    $('#lnk3').css({'color' : '#00CED1'});
    $('#lnk1').css({'color' : '#C0C0C0'});
    $('#lnk2').css({'color' : '#C0C0C0'});
})
$(document).ready(function() {
    let text1 = $(".info-one");
    let text2 = $(".info-two");
    let text3 = $(".info-three");
    $(".info-one,.info-two,.info-three").height(Math.max(text1, text2, text3));
    $(".info-two").hide();
    $(".info-three").hide();
    $(".spoiler-foto2").hide();
    $(".spoiler-foto3").hide();
});

$("#spoiler1").live('click', function() {
    $(".info-one").show();
    $(".info-two").hide();
    $(".info-three").hide();
    $(".spoiler-foto1").show();
    $(".spoiler-foto2").hide();
    $(".spoiler-foto3").hide();
    $('#spoiler1').css({'color' : 'black'});
    $('#spoiler2').css({'color' : '#C0C0C0'});
    $('#spoiler3').css({'color' : '#C0C0C0'});
});

$("#spoiler2").live('click', function() {
    $(".info-two").show();
    $(".info-one").hide();
    $(".info-three").hide();
    $(".spoiler-foto2").show();
    $(".spoiler-foto1").hide();
    $(".spoiler-foto3").hide();
    $('#spoiler2').css({'color' : 'black'});
    $('#spoiler1').css({'color' : '#C0C0C0'});
    $('#spoiler3').css({'color' : '#C0C0C0'});
});
$("#spoiler3").live('click', function() {
    $(".info-three").show();
    $(".info-one").hide();
    $(".info-two").hide();
    $(".spoiler-foto3").show();
    $(".spoiler-foto1").hide();
    $(".spoiler-foto2").hide();
    $('#spoiler3').css({'color' : 'black'});
    $('#spoiler1').css({'color' : '#C0C0C0'});
    $('#spoiler2').css({'color' : '#C0C0C0'});
});