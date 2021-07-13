
$('document').ready(function () {


    let currentUrl = location.href;
    let currentAtr = currentUrl.split("/");
    let currentPage = currentAtr.pop();

    $(".nav-link").each(function () {
        let now = $(this).attr("href");
        if (now == currentPage){
            $(this).addClass("active");
        }
    });

    let screenHeight = $(window).height();

    $(window).scroll(function(){
        let currentPlace = $(this).scrollTop();
        console.log(currentPlace);
        if(currentPlace > screenHeight-252){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
        }
    });




    $(".navbar-toggler").click(function(){
        let output = $(".navbar-collapse").hasClass("show");
        console.log(output);

        if(output){
            $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
        }else{
            $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
        }

    });

    new WOW().init();


});

    $(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});


    


  











