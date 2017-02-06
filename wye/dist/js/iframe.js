/**
 * Created by hyx on 2016/12/5.
 */
$(document).ready(function () {

    var w_width = $(window).width();
    var left_col = $(".scroll-view ").width();
    $(".right_content").css('width',w_width-left_col)

    $('#menu_toggle').click(function () {

        WidthH();

        /*iframe 的宽*/
        var w_width = $(window).width();
        var left_col1 = $(".scroll-view ").width();
        $(".right_content").css('width',w_width-left_col1)

        /*iframe*/
        $('#iframe_id').toggleClass("main_ifame");
        /*ifame end*/

        
        $('.change-footer').toggle();
        
        $(".change-footer").click(function () {
            $(".hidden-small-list").toggle();
        })
scrolling();
        /*菜单显示/隐藏*/

         $("#side-menu>li").each(function () {
             var index = $(this).index();
             $(this).click(function () {
                 $("#sidebar-menu-chirld>ul:eq("+index+")").toggle();
                 $("#sidebar-menu-chirld>ul:eq("+index+")").siblings().css('display', 'none');
             });

             if($(this).hasClass('active-sm')){
                 $("#sidebar-menu-chirld>ul:eq("+index+")").css('display', 'block');
                 $(this).addClass('active');
             }else {
                 $("#sidebar-menu-chirld>ul:eq("+index+")").css('display', 'none');
                 $(".hidden-small-list").css('display', 'none')
             }
         });

        });

/*滚动*/
    function scrolling() {

        $('#demo').scroll(function () {

            WidthH();

            if($("body").hasClass('nav-sm')){
                $("#side-menu>li").each(function () {
                    var index1 = $(this).index();
                    if ($(this).hasClass('active')) {
                        var top1 = $("#sidebar-menu-chirld>ul:eq(" + index1 + ")").offset().top;
                        if (top1<70) {
                            $("#sidebar-menu-chirld>ul:eq(" + index1 + ")").css('display', 'none');
                            $(this).removeClass('active');
                            $(this).find('ul').css('display', 'none')
                        }
                    }
                });
            }
        })
    }
    /*滚动*/

    $('#demo').scroll(function () {
        WidthH();
    })

    /*缩放*/
    window.onresize = function () {

        var w_width = $(window).width();
        var left_col = $(".scroll-view ").width();
        $(".right_content").css('width',w_width-left_col)
        $('#menu_toggle').click(function () {
            var left_col1 = $(".scroll-view ").width();
            $(".right_content").css('width',w_width-left_col1)
        });
    }
});
/*缩放*/

/*宽度*/
function WidthH() {
    $("#side-menu>li").each(function () {
        var index = $(this).index();
        var t = $(".side-menu>li:eq("+index+")").offset().top;
        var w = $('#nav-ul1').width();
        $("#sidebar-menu-chirld>ul:eq("+index+")").css({'top':t,'left':w});
    })
}
/*宽度*/


/* 插件*/

$('#demo').perfectScrollbar();

/*插件*/





