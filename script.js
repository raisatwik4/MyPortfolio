$(document).ready(function(){

    $('#menu').on('click',function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');  //click akrne pe menu pe select karne par nav hat jayega apne aap
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){ //go to home button show and hide when at top
            $('.top').show();
        }
        else{
            $('.top').hide();   
        } 
    });
    
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        
        e.preventDefault();
        
        $('html,body').animate({
           scrollTop: $($(this).attr('href')).offset().top
        },
         500,
         'linear'
        );
    })
}); 
var typed=new Typed(".s",{
    strings: ["Satwik Rai"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})   
var typed=new Typed(".s1",{
    strings: ["Satwik Rai","Front End Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
})   
var typed=new Typed(".head2",{
    strings: ["KNIT Sultanpur"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})   