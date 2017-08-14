$(function () {
    $('.rightMenu>a').mouseenter(function () {
        console.log(111);
        var left = $(this).position().left;
        console.log(left)
        var top = $(this).position().top;
        console.log("top"+top)
        var width = $(this).css("width");
        console.log(width)
        var destLeft = parseInt(left) + parseInt(width) / 2 + 5;
        console.log(destLeft)
        $("img#catear").css("left", destLeft);
        $("img#catear").css("top", top + 160);
        $("img#catear").fadeIn(500);
    })
    $('.rightMenu>a').mouseleave(function () {
        $("img#catear").hide();
    })
    function showCategroys(cid){
        // var cid=$('.catagorymenu2').attr("cid");
        var html='';
        html += ".productsAsideCategorys[cid="
        html += cid;
        html += "]"
        $(html).show();
    }
    function hideCategroys(cid){
        
        var html='';
        html += ".productsAsideCategorys[cid="
        html += cid;
        html += "]"
        $(html).hide();
    }
    $(".catagorymenu2").mouseenter(function(){
        // console.log(1)
        var cid=$(this).attr("cid");
        showCategroys(cid)
    })
    $(".catagorymenu2").mouseleave(function(){
        // console.log(1)
        var cid=$(this).attr("cid");
        hideCategroys(cid)
    })
    $(".productsAsideCategorys").mouseenter(function(){
        // console.log(1)
        var cid=$(this).attr("cid");
        showCategroys(cid)
    })
    $(".productsAsideCategorys").mouseleave(function(){
        // console.log(1)
        var cid=$(this).attr("cid");
        hideCategroys(cid)
    })
    // var loginstatus=$('.loginstatus').text();
    // if(loginstatus==="请登录"){
    // 	console.log(1)
    // 	$('.right .mybook').attr("href","./loginin.html");
    // 	$('.right .buycar').attr("href","./loginin.html")
    // }
})