$(function(){
    $('.return_top').hover(
        function(){
            $('.return_top').css('background-color','rgba(255,255,255,0.8)');
        },
        function(){
            $('.return_top').css('background-color','rgba(255,255,255,0.3)')
        }
    )
    $('.return_top').click(
        function(){
            window.location.href="../top.html";
        }
    )
})