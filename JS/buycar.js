/*公共函数*/
function formatMoney(num){
    /*第一步：将传入的num值的$符号或，都先去除——复习知识点正则*/
    num=num.toString().replace(/\$|\,/g,'');
    /*isNaN()判断一个值是不是无效的数字，字符串传入的值，会自动转换为数字的*/
    if(isNaN(num)){
        num="0";
    }
    /*判断一个数字是负数还是正数,Math.abs()是取一个值的绝对值，字符串传入的值，会自动转换为数字的*/
    sign=(num==(num=Math.abs(num)));
    /*结果是只取两位小数，所以将要取的两位小数四舍五入*/
    num=Math.floor(num*100+0.50000000001)
    cents=num%100;
    num=Math.floor(num/100).toString(); /*Math.floor()就是向下取整*/
    /*如果小数位只有一位，就在前面加0*/
    if(cents<10){
        cents="0"+cents;
    }
    /*截取三位数字，加一个逗号*/
    /*
    复习一个string类型变量的截取方法：num.substring(0,3),截取index为0，1，2三位的数字
    num.substring(3),从index为3开始，截取一直往后的数字，直至结束。
    字符串的index是从0算起，长度length，是从1开始算起
    var num="0123456789"
    num.length=10
    num[0]="0";num[1]="1";num[9]="9"
    */
    for(var i=0;i<Math.floor((num.length-(1+i))/3);i++){
        num=num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
    }
    return (((sign)?'':'-')+num+'.'+cents)
}

// var a=formatMoney(1234567.890766)
// // console.log(a);
// function syncCreateOrderButton(){
//     var selectAny=false;
//     $('.cartProductItemIfSelected').each(function(){
//         if('selectit'==$(this).attr("selectit")){
//             selectAny=true;
//             console.log(selectAny)
//         }
//     })

// }
function SumPrice(){
    var sum=0;
    var totalNumber=0;
    // $(".cartProductItemIfSelected[selectit='selectit']").each(function(){
    //     sum +=1;
    //     var price=$(this).parent().find(".sumprice>.pricenum").text()
    //     pricepure=price.replace(/\¥|\,/g,'');
    //     console.log(pricepure);
    //     totalNumber += pricepure;
    // })
    $(".cartProductItemIfSelected[selectit='selectit']").each(function(){
        var oiid=$(this).attr("oiid");
        // var price=$('.pricenum[oiid="+{oiid}+"]').text();
        var html="";
        html +=".pricenum[oiid=";
        html += oiid;
        html += "]";
        var price =$(html).text();
        pricepure=price.replace(/\¥|\,/g,'');
        sum += new Number(pricepure);
        var num="";
        num +=".numinput[oiid=";
        num += oiid;
        num += "]";    
        var num=$(num).val();
        totalNumber += new Number(num);
    })
    $('.cartSumNumber').text(totalNumber);
    $('.cartSumPrice').text("¥"+formatMoney(sum));
    $('.cartTitlePrice').text("¥"+formatMoney(sum));
}
function syncPrice(pid,num,price){
    var html="";
        html +=".numinput[pid=";
        html += pid;
        html += "]";
    console.log('html'+html);
    var pricenum="";
        pricenum +=".pricenum[pid=";
        pricenum += pid;
        pricenum += "]";
    console.log('pricenum'+pricenum);
    $(html).val(num);
    console.log($(html))
    console.log(formatMoney(num*price));
    $(pricenum).html("¥"+formatMoney(num*price));
    SumPrice()
}

function selectall(){
    var selectAll = true;
    $(".cartProductItemIfSelected").each(function(){
        if("false"==$(this).attr("selectit")){
            selectAll = false;
        }
    });
    if(selectAll)
        $(".titlechoose").attr("src","http://how2j.cn/tmall/img/site/cartSelected.png");
    else
        $(".titlechoose").attr("src","http://how2j.cn/tmall/img/site/cartNotSelected.png");
}
function buttonchange(){
    var selectAny=false;
    $(".cartProductItemIfSelected").each(function(){
        if(($(this).attr("selectit"))=="selectit"){
            selectAny=true;
        }
        if(selectAny){
            $('.createOrderButton').css("background-color","#C40000");
            $('.createOrderButton').removeAttr("disabled")
        }else{
            $('.createOrderButton').css("background-color","#AAAAAA");
            $('.createOrderButton').attr("disabled","disabled")
        }
    })
}

$(function(){
    $('.numinput').val(1);
    $(".cartProductItemIfSelected").click(function(){
        var selectit=$(this).attr("selectit")
        console.log(selectit);
        if("selectit"==selectit){
            $(this).attr("src","http://how2j.cn/tmall/img/site/cartNotSelected.png");
            $(this).attr("selectit","false");
            $(this).parents(".carCotent-middle").css("background-color","#fff");
        }else{
            
            $(this).attr("src","http://how2j.cn/tmall/img/site/cartSelected.png");
            $(this).attr("selectit","selectit");
            $(this).parents(".carCotent-middle").css("background-color","#FFF8E1");
        }
        selectall();
        buttonchange();
        SumPrice();
    })
    $('.titlechoose').click(function(){
        var selectit=$(this).attr("selectit");
        if("selectit"==selectit){
            $('.titlechoose').attr("src","http://how2j.cn/tmall/img/site/cartNotSelected.png");
            $('.titlechoose').attr("selectit",false);
            $('.cartProductItemIfSelected').each(function(){
                $(this).attr("src","http://how2j.cn/tmall/img/site/cartNotSelected.png");
                $(this).attr("selectit","false");
                $(this).parents(".carCotent-middle").css("background-color","#fff");
            })
        }else{
            $('.titlechoose').attr("src","http://how2j.cn/tmall/img/site/cartSelected.png");
            $('.titlechoose').attr("selectit","selectit");
            $('.cartProductItemIfSelected').each(function(){
                $(this).attr("src","http://how2j.cn/tmall/img/site/cartSelected.png");
                $(this).attr("selectit","selectit");
                $(this).parents(".carCotent-middle").css("background-color","#FFF8E1");
            })
        }
        buttonchange();
        SumPrice();
    })
    $(".numinput").keyup(function(){
        var pid=$(this).attr("pid");
        console.log("pid"+pid)
        // var stock= $("span.orderItemStock[pid="+pid+"]").text();
        // var a=$('.numinput[pid="365"]').attr("pid")
        var html="";
        html += ".pricenow[pid=";
        html += pid;
        html += "]";
        
        var num="";
        num += ".numinput[pid=";
        num += pid;
        num += "]";
        var price= $(html).text();
        console.log("price"+price);
        pricepure=price.replace(/\¥|\,/g,'');
        var num= $(num).val();
        console.log("num"+num)
        num = parseInt(num);
        if(isNaN(num))
            num= 1;
        if(num<=0)
            num = 1;
        // if(num>stock)
        //     num = stock;
        syncPrice(pid,num,pricepure);
    });
    $('.add').click(function(){
        // var pid=$(this).attr("pid");
        var num=$(this).parent().parent().find('.numinput').val();
        num++;
        $(this).parent().parent().find('.numinput').val(num);
        // if(num)
        var price=$(this).parent().parent().find('.pricenow').text();
        pricepure=price.replace(/\¥|\,/g,'');
        var result=formatMoney(pricepure*num);
        $(this).parent().parent().find('.pricenum').html(result);
        SumPrice()
    })
    $('.less').click(function(){
        // var pid=$(this).attr("pid");
        var num=$(this).parent().parent().find('.numinput').val();
        num--;
        if(num<0){
            num=1;
        }
        $(this).parent().parent().find('.numinput').val(num);
        var price=$(this).parent().parent().find('.pricenow').text();
        pricepure=price.replace(/\¥|\,/g,'');
        var result=formatMoney(pricepure*num);
        $(this).parent().parent().find('.pricenum').html(result);
        SumPrice()
    })
    // $('.options span[oiid="936"]')
    $('.options span').click(function(){
        $(this).parent().parent(".carCotent-middle").css("display","none")
    })
})