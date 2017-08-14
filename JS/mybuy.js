$(function(){
    var $all=$('.orderType a[orderstatus="all"]');
    var $waitPay=$('.orderType a[orderstatus="waitPay"]');
    var $waitDelivery=$('.orderType a[orderstatus="waitDelivery"]');
    var $waitReview=$('.orderType a[orderstatus="waitReview"]');
    var $waitConfirm=$('.orderType a[orderstatus="waitConfirm"]');
    $all.click(function(){
        $(this).parent('.choosestatus').addClass('hover').siblings().removeClass('hover');
        $('.orderListItemTable').addClass('active')
    })
    $waitPay.click(function(){
        console.log(1)
        $(this).parent('.choosestatus').addClass('hover').siblings().removeClass('hover');
        $('table[orderstatus="waitPay"]').addClass('active').siblings().removeClass('active');
    })
    $waitDelivery.click(function(){
        console.log(2)
        $(this).parent('.choosestatus').addClass('hover').siblings().removeClass('hover');
        $('table[orderstatus="waitDelivery"]').addClass('active').siblings().removeClass('active');
    })
    $waitReview.click(function(){
        console.log(1)
        $(this).parent('.choosestatus').addClass('hover').siblings().removeClass('hover');
        $('table[orderstatus="waitReview"]').addClass('active').siblings().removeClass('active');
    })
    $waitConfirm.click(function(){
        console.log(2)
        $(this).parent('.choosestatus').addClass('hover').siblings().removeClass('hover');
        $('table[orderstatus="waitConfirm"]').addClass('active').siblings().removeClass('active');
    })
    $('.orderListItemDelete').click(function(){
        var oid=$(this).parent().attr("oid");
        // console.log(oid)
        var html="";
        html += ".orderListItemTable[oid="
        html += oid;
        html += "]";
        // console.log(html)
        $(html).css("display","none");
    })
})