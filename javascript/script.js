$(document).ready(function(){
    $('.menubtn').on("click",function(){
    var width=$(".mobnav").width();
    if(width==0){
        $(".mobnav").animate(
        {
            width:"80%",
            paddingLeft:"20%"
        }
    )
    }
    else{
        $(".mobnav").animate(
        {
            width:"0",
            paddingLeft:"0"
        }
    )
    }  
    
})

$('.menutoggle').click(function(){
    var target=$(this).attr("data-target");
    $("."+target).slideToggle();
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
        if(target=="beverages-item1"){
            $(".main-course").toggle(500);
        }
        if(target=="chickendish-item1"){
            $(".rices").toggle(500);
        }
        if(target=="cold-item1"){
            $(".hot").toggle(500);
        }
        if(target=="dessert-item1"){
            $(".main-course").toggle(500);
            $(".beverages").toggle(500);
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
$(".nav-link").on("click",function(){
    var target=$(this).attr("data-target")
    $(".nav-link").removeClass("cactive");
    $.fn.changenav(this);
    $('html, body').animate({
        scrollTop: $(target).offset().top-60
        }, '500');
})
$.fn.changenav=function(a)
{
    $(".nav-link").removeClass("cactive");
    $(a).addClass("cactive");
}
$(window).scroll(function(){
    var x=$("html, body").scrollTop();
    var h=$(".hero").offset().top;
    var m=$(".menu").offset().top;
    var o=$(".order").offset().top;
    var r=$(".reserve").offset().top;
    var l=$(".location").offset().top;
    var c=$(".contact").offset().top;
    console.log("menu: " ,m,o,r,l,c)
    x+=61;
    console.log(x)
    if(x>=h && x<m){
        $.fn.changenav(".homen")
    }
    if(x>=m && x<o){
        $.fn.changenav(".menun")
    }
    if(x>=o && x<r){
        $.fn.changenav(".ordern")
    }
    if(x>=r && x<l){
        $.fn.changenav(".reserven")
    }
    if(x>=l && x<c){
        $.fn.changenav(".locationn")
    }
    if(x>=c){
        $.fn.changenav(".contactn")
    }
    
    
});

})





