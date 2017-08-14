$(function(){
    $('.productDetailTopPart>a').click(function(){
        console.log(111)
        $(this).addClass('selected').siblings().removeClass('selected');
        console.log($(this).index())
        if($(this).index()==1){
            $('.productReviewDiv').css("display","block")
            $('.productiseus').css("display","none")
        }else{
            $('.productReviewDiv').css("display","none")
            $('.productiseus').css("display","block")
        }
    })
    /*图片模糊，所以需要预加载*/
    /*这里本来是直接使用src来获取图片路径的，但是会模糊，所以借助bigImageURL*/
    $('.smallImageDiv>.smallImage').mouseenter(function(){
        var imgurl=$(this).attr("bigImageURL")
        $('.bigImg').attr("src",imgurl);
        // console.log(imgurl)
        // console.log(1)
    })
    // img4load
    $(".bigImg").load(
        function(){
            $(".smallImage").each(function(){
                var bigImageURL = $(this).attr("bigImageURL");
                img = new Image();
                img.src = bigImageURL;
                img.onload = function(){
                    console.log(bigImageURL);   
                    $("div.img4load").append($(img));
                };
            });     
        }
    );
    var sock=parseInt($('.sock').text());
    console.log(sock);
    $('.productNumberSetting').keyup(function(){
        var num=$('.productNumberSetting').val();
        num=parseInt(num);
        if(isNaN(num)){
            num=1;
        }else if(num<=0){
            num=1;
        }else if(num>sock){
            alert("库存只有"+sock+"件,不能超过库存数量")
            num=sock;
        }
        // console.log(a)
        $('.productNumberSetting').val(num)
    })
    $('.updown').click(function(){
        var num=$('.productNumberSetting').val();
        num++;
        $('.productNumberSetting').val(num);
        if(num>sock){
            alert("库存只有"+sock+"件")
            num=sock;
        }
    })
    $('.lessdown').click(function(){
        /*这里还需要补充冒泡事件，阻止向上冒泡，防止出现点击两次的效果*/
        var num=$('.productNumberSetting').val();
        console.log(num);
        num--;
        console.log(num)
        if(num<1){
            num=1;
        }
        $('.productNumberSetting').val(num);
    })
})