$('.menubtn').on("click",function(){
    $(".mobnav").toggle();
})





$('.menutoggle').click(function(){
    var target=$(this).attr("data-target");
    $("."+target).toggleClass("hide");
    if($(this).children("i").hasClass("fa-chevron-down")){
        $(this).children("i").removeClass("fa-chevron-down");
        $(this).children("i").addClass("fa-chevron-up");
    }
    else{
        $(this).children("i").removeClass("fa-chevron-up");
        $(this).children("i").addClass("fa-chevron-down");
    }
    var vw=$(window).width();
    if(vw>=768){
        if(target=="beverages-item"){
            $(".main-course").toggle();
        }
        if(target=="chickendish-item"){
            $(".rices").toggle();
        }
        if(target=="cold-item"){
            $(".hot").toggle();
        }
        if(target=="dessert-item"){
            $(".main-course").toggle();
            $(".beverages").toggle();
        }
    }
})
$('.reserve input').on("click",function(){
    var target=$(this).attr("data-target");
    $(target).fadeIn();
    $(".alertoverlay").show();
    })
$(".mheader button").on("click",function(){
    $('#modal').hide();
    $(".alertoverlay").hide();
})
$.fn.calert=function(a){
    $("#alert").fadeIn(200);
    $('#alert h6').text(a);
} 
$('#alert button').on("click",function(){
    $('#alert').fadeOut(200);
    $(".alertoverlay").hide();
})
$('.mbody input[type="button"]').on("click",function(){
    var tel=$('.form-group input[type="tel"]').val();
    var num=$('.form-group input[type="number"]').val();
    var flag=0;
    if(tel==""){
    $.fn.calert("Please Enter Mobile Number");}
    else if(num==""){
    $.fn.calert("Please Enter Number of seats");}
    else if($.isNumeric(tel)==false || tel.length<10){
        $.fn.calert("Invalild Mobile Number");
        flag=1;
    }
    else if(num<1){
        $.fn.calert("Invalild Number of seats");
    }
    else if(num>20){
        $.fn.calert("Sorry we only have 20 seats left")
    }
    else{
        $('#modal').hide();
        $.fn.calert("Reserved");
        $(".alertoverlay").hide();
    }
    
})




