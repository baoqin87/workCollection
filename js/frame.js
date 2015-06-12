/**
 * Created by Administrator on 2015/6/10.
 */
$(function(){
    $(".yx_menu a").click(function(){
        $(".yx_menu a").each(function(index,item){
            if($(item).hasClass("active")){
                $(item).removeClass("active");
                _switchPic($(item),false);
                return false;
            }
        });
        $(this).addClass("active");
        _switchPic($(this),true);
        $("#yx_iframe").attr("src",$(this).attr("url"));
    });
    $(".yx_menu a").hover(function(){
        if(!$(this).hasClass("active")){
            _switchPic($(this),true);
        }

    },function(){
        if(!$(this).hasClass("active")){
            _switchPic($(this),false);
        }
    });
    refreshIframeHeight();
    $(window).resize(function(){
        refreshIframeHeight();
    });
});
function refreshIframeHeight(){
    var winHeight = $(window).height();
    var footerHeight = $(".yx_footer").outerHeight();
    $(yx_iframe).height(winHeight - footerHeight);
}
/**
 * 修改图片地址
 * @param $img 图片对象
 * @param src 图片地址
 * @private
 */
function _switchPic(parent,isFocus){
    var $menuIcon = $(parent).find(".yx_menu_icon").eq(0);
    if($menuIcon.length > 0){
        var newSrc = _getNewPic($menuIcon.attr("src"),isFocus);
        $menuIcon.attr("src",newSrc);
    }
}
/**
 * 获取新的图片地址
 * @param str 原图片地址
 * @param isFocus 是否变化成拼接_focus
 * @returns {*} 变化过的图片地址
 * @private
 */
function _getNewPic(str,isFocus){
    var imgSrcAttribute = str;
    if(imgSrcAttribute && imgSrcAttribute != ""){
        var imgSrcAttributeArr = imgSrcAttribute.split("/");
        if(imgSrcAttributeArr && imgSrcAttributeArr.length > 1){
            var imgName = imgSrcAttributeArr[imgSrcAttributeArr.length - 1];
            var imgNameArr = imgName.split(".");
            if(isFocus){
                if(imgNameArr[0].indexOf("_focus") == -1){
                    imgNameArr[0] = imgNameArr[0]+"_focus";
                }
            }else{
                imgNameArr[0] = imgNameArr[0].replace("_focus","");
            }
            imgSrcAttributeArr[imgSrcAttributeArr.length - 1] = imgNameArr.join(".");
        }
        var newImgSrc = imgSrcAttributeArr.join("/");
        return newImgSrc;
    }
    return imgSrcAttribute;
}
