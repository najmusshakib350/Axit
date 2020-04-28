$(".nav-item .tab-btn").click(
    function(){
       $(".tab-btn").removeClass("active");
        $(this).addClass("active");
    }
);

$(".text1").show();
$(".text2").hide();
$(".text3").hide();

$("#tab1").click(
    function(){
        $(".tab1").show();
        $(".tab2").hide();
        $(".tab3").hide();
        
    }
);

$("#tab2").click(
    function(){
        $(".tab2").show();
        $(".tab1").hide();
        $(".tab3").hide();
        
    }
);


$("#tab3").click(
    function(){
        $(".tab3").show();
        $(".tab1").hide();
        $(".tab2").hide();
        
    }
);