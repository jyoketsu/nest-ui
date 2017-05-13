/**
 * Created by jiexu on 2017/4/24.
 */
// 设置tab面板高度
var setTabContentHeight = function () {
    $(".nestTab").each(function () {
        var nestTabHeight = $(this).height();
        $(this).find(".nestTabContent").each(function () {
            $(this).height(nestTabHeight-42);
        });
    });
}

var setContainerHeight = function () {
    var height = $("#thumbnailList").height();
    $("#thumbnailContainer").height(height-25);
}

$(document).ready(function(){
    setTabContentHeight();
    setContainerHeight();

    $(window).resize(function () {
        setTabContentHeight();
        setContainerHeight();
    });
});