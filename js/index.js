$(function(){

    $(".serviced").eq(0).mouseenter(function () { 
        // console.log(1);
        $(".serviced").eq(0).css({
            "background":"#0ba1e4",
            "color":"white",
            "transform":"scale(1.1,1.1)",
            "transition":"all 0.5s",
            "z-index":"2"
        })
        $(".titleCard h4").eq(0).css({
            "color":"white"
        })
        $(".clickbtn").eq(0).css({
            "border":"1px solid white",
            "color":"white"
        })
        $(".serviceline").eq(0).css({
            "border": "1px solid white"
        })
    });

    $(".serviced").eq(1).mouseenter(function () { 
        // console.log(1);
        $(".serviced").eq(1).css({
            "background":"#0ba1e4",
            "color":"white",
            "transform":"scale(1.1,1.1)",
            "transition":"all 0.5s",
            "z-index":"2"
        })
        $(".titleCard h4").eq(1).css({
            "color":"white"
        })
        $(".clickbtn").eq(1).css({
            "border":"1px solid white",
            "color":"white"
        })
        $(".serviceline").eq(1).css({
            "border": "1px solid white"
        })
    });

    $(".serviced").eq(2).mouseenter(function () { 
        // console.log(1);
        $(".serviced").eq(2).css({
            "background":"#0ba1e4",
            "color":"white",
            "transform":"scale(1.1,1.1)",
            "transition":"all 0.5s",
            "z-index":"2"
        })
        $(".titleCard h4").eq(2).css({
            "color":"white"
        })
        $(".clickbtn").eq(2).css({
            "border":"1px solid white",
            "color":"white"
        })
        $(".serviceline").eq(2).css({
            "border": "1px solid white"
        })
    });

    $(".serviced").eq(3).mouseenter(function () { 
        // console.log(1);
        $(".serviced").eq(3).css({
            "background":"#0ba1e4",
            "color":"white",
            "transform":"scale(1.1,1.1)",
            "transition":"all 0.5s",
            "z-index":"2"
        })
        $(".titleCard h4").eq(3).css({
            "color":"white"
        })
        $(".clickbtn").eq(3).css({
            "border":"1px solid white",
            "color":"white"
        })
        $(".serviceline").eq(3).css({
            "border": "1px solid white"
        })
    });

    $(".serviced").eq(0).mouseleave(function () { 
        // console.log(1);
        $(".serviced").eq(0).css({
            "background":"#fafafa",
            "color":"black",
            "transform":"scale(1,1)",
            "transition":"all 0.5s",
            "z-index":"0"
        })
        $(".titleCard h4").eq(0).css({
            "color":"#0ba1e4"
        })
        $(".clickbtn").css({
            "border":"1px solid #0ba1e4",
            "color":"#0ba1e4"
        })
        $(".serviceline").eq(0).css({
            "border": "1px solid #ababab"
        })
    });
    $(".serviced").eq(1).mouseleave(function () { 
        // console.log(1);
        $(".serviced").eq(1).css({
            "background":"#fafafa",
            "color":"black",
            "transform":"scale(1,1)",
            "transition":"all 0.5s",
            "z-index":"0"
        })
        $(".titleCard h4").eq(1).css({
            "color":"#0ba1e4"
        })
        $(".clickbtn").css({
            "border":"1px solid #0ba1e4",
            "color":"#0ba1e4"
        })
        $(".serviceline").eq(1).css({
            "border": "1px solid #ababab"
        })
    });

    $(".serviced").eq(2).mouseleave(function () { 
        // console.log(1);
        $(".serviced").eq(2).css({
            "background":"#fafafa",
            "color":"black",
            "transform":"scale(1,1)",
            "transition":"all 0.5s",
            "z-index":"0"
        })
        $(".titleCard h4").eq(2).css({
            "color":"#0ba1e4"
        })
        $(".clickbtn").css({
            "border":"1px solid #0ba1e4",
            "color":"#0ba1e4"
        })
        $(".serviceline").eq(2).css({
            "border": "1px solid #ababab"
        })
    });

    $(".serviced").eq(3).mouseleave(function () { 
        // console.log(1);
        $(".serviced").eq(3).css({
            "background":"#fafafa",
            "color":"black",
            "transform":"scale(1,1)",
            "transition":"all 0.5s",
            "z-index":"0"
        })
        $(".titleCard h4").eq(3).css({
            "color":"#0ba1e4"
        })
        $(".clickbtn").css({
            "border":"1px solid #0ba1e4",
            "color":"#0ba1e4"
        })
        $(".serviceline").eq(3).css({
            "border": "1px solid #ababab"
        })
    });

    $(".silderman").mouseenter(function(){
        $(".sildertips").show();
    })
    $(".silderman").mouseleave(function(){
        $(".sildertips").hide();
    })

    $(".silderQQ").mouseenter(function(){
        $(".sildertips2").show();
    })
    $(".silderQQ").mouseleave(function(){
        $(".sildertips2").hide();
    })

    $(".silderphone").mouseenter(function(){
        $(".sildertips3").show();
    })
    $(".silderphone").mouseleave(function(){
        $(".sildertips3").hide();
    })
    $(".silderchat").mouseenter(function(){
        $(".sildertips4").show();
    })
    $(".silderchat").mouseleave(function(){
        $(".sildertips4").hide();
    })

    $(".backtop").hide();

    $(window).scroll(function(){
        if ($(window).scrollTop()>400){
            $(".backtop").fadeIn();
        }else{
            $(".backtop").fadeOut();
        }
    });

    $(".backtop").click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
    });

})