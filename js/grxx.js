/**
 * Created by Administrator on 2015/6/11.
 */
$(function(){
    $("#nav-tabs a").click(function(){
        switchNavTab($(this));
    });
});
function switchNavTab(tabItem){
    $("#nav-tabs a").removeClass("active");
    $(".yx_nav_content > div").hide();
    $(tabItem).addClass("active");
    var relDiv = $(tabItem).attr("rel");
    $("#"+relDiv).show();
}