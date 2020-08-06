$(function() {
    // console.log(1)
    // 开始代码
    // $(".closebox").css({
    //     "background": "red"
    // })
    var flag = true
    $(".nav-right-box1").hammer().bind("touchstart", function(ev) {
        $(".nav-right").find(".nav-right-list").css({
            display: "block",
            width: "7.5rem",
            height: "100vh"
        })
        ev.preventDefault()
    })
    $(".nav-list-left").hammer().bind("touchstart", function() {
        $(".nav-right").find(".nav-right-list").css({
            display: "block",
            width: "0"
        })
        $(".nav-li-ul").css(
            "display ", "none"
        )
    })
    var navFlag = true
    $(".nav-li-box").hammer().bind("touchstart", function() {
        console.log(1)
        if (navFlag) {


            $(".nav-li-ul").css(
                "display ", "block"
            )
            navFlag = false
        } else {
            $(".nav-li-ul").css(
                "display ", "none"
            )
            navFlag = true
        }

    })






    // $(".closebox").hammer().bind("tap", function() {

    //     $(this).find("div").css({
    //         transform: "rotate(0)",

    //     })
    //     $(".header").css({
    //         height: 0,
    //         overflow: "hidden"
    //     })
    // })
    // $(".menu-more").hammer().bind("tap", function(ev) {
    //     $(".son").css({
    //         display: "block"
    //     })
    //     ev.stopPropagation()

    // })
    // $(":not(.menu-more)").hammer().bind("tap", function(ev) {
    //         $(".son").css("display", "none")

    //     })
    //     // 拖拽导航
    // var startleft

    // $(".wheel-box").hammer().bind("panstart", function(ev) {
    //     startleft = $(this).position().left
    //     console.log($(this).position().left)

    // })
    // $(".wheel-box").hammer().bind("panleft", function(ev) {
    //     // console.log(ev.gesture.deltaX - startleft)

    //     var left = ev.gesture.deltaX + startleft


    //     if (Math.abs(left) > $(".wheel-box").width() - $(".wheel").width()) {
    //         left = -($(".wheel-box").width() - $(".wheel").width())
    //     }
    //     $(".wheel-box").css({
    //         left: left + "px"
    //     })




    // })
    // $(".wheel-box").hammer().bind("panright", function(ev) {
    //     var right = ev.gesture.deltaX + startleft
    //     if (right > 0) {
    //         right = 0
    //     }
    //     $(".wheel-box").css({
    //         left: right + "px"
    //     })
    // })


})