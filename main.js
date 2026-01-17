$(document).ready(function () {
    if ($.cookie('visited') === undefined) {

        $('.TOFDiv').css("display", "flex")
        $('.wrap').css("filter", "blur(20px)")
    }

    $("#AgreeBtn").click(function () {

        $.cookie("visited", "yes", { expires: 7, path: '/' })

        $(".TOFDiv").css("display", "none")
        $(".wrap").css("filter", "blur(0)")
    })
})

$()

$("#ExitBtn").click(function () {
    window.close()
})