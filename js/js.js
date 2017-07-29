// 顶部 右边导航栏的移动事件
var topIndex=0;
$('.top-right-text').mouseover(function() {
    topIndex=$(this).index();
    $('.launch-item'+topIndex).show();
    $('.top-text'+topIndex+' img').css({
        'background':'#fff'
    })
});
$('.top-right-text').mouseout(function() {
    $('.launch-item'+topIndex).hide();
    $('.top-text'+topIndex+' img').css({
        'background':'#f3f5f7'
    })
});
$('.launch-item div').mouseover(function() {
    $(this).css({
        'background':'#cdd0d4'
    });
});
$('.launch-item div').mouseout(function() {
    $(this).css({
        'background':'#fff'
    });
});
// 顶部 登录点击事件
$('#login,.login-text').click(function(event) {
    var htmlContent=$('.loginContent').html();
    showLayer(htmlContent,340,360);
    clearTips();
    $('.login-text').css({
        'border-bottom': '2px solid red',
        'color':'red'
    });
    $('.register-text').css({
        'border-bottom': 'none',
        'color':'#4d555d'
    });

    // 登录账户密码 取消焦点事件
    $('.username').blur(function(event) {
        if(isNaN($(this).val())){
            $('.username-tips').html('&nbsp');
        }else{
            if($(this).val().length==11){
                $('.username-tips').html('&nbsp');
            }else{
                $('.username-tips').text('请输入正确的邮箱或手机号');
            }
        }
    });
    $('.paw').blur(function(event) {
        if($(this).val().length>=6 && $(this).val().length<=16){
            $('.paw-tips').html('&nbsp');
        }else{
            $('.paw-tips').text('请输入6-16位密码，区分大小写，不能使用空格');
        }
    });

});
// 顶部 注册点击事件
$('#register,.register-text').click(function(event) {
    var htmlContent=$('.registerContent').html();
    showLayer(htmlContent,340,340);
    clearTips();
    $('.login-text').css({
        'border-bottom': 'none',
        'color':'#4d555d'
    });
    $('.register-text').css({
        'border-bottom': '2px solid red',
        'color':'red'
    });
    // 注册账户和验证码 取消焦点事件
    $('.reg-username').blur(function(event) {
        if(isNaN($(this).val())){
            $('.reg-username-tips').html('&nbsp');
        }else{
            if($(this).val().length==11){
                $('.reg-username-tips').html('&nbsp');
            }else{
                $('.reg-username-tips').text('请输入正确的邮箱或手机号');
            }
        }
    });
    $('.code').blur(function(event) {
        if($(this).val().length!=4){
            $('.code-tips').text('请输入正确的验证码');
        }else{
            $('.code-tips').html('&nbsp');
        }
    });
});
// 登录窗口 关闭按钮点击事件
$('.closeButton').click(function(event) {
    hideLayer();
    clearTips();
});

// 显示弹出层
function showLayer(html,width,height){
    $('.layer-mask').show();
    $('.layer-window').show();
    $('.layer-content').html(html);
    $('.layer-window').css({
        'width': width,
        'height': height
    });
}
// 隐藏弹出层
function hideLayer(){
    $('.layer-mask').hide();
    $('.layer-window').hide();
}
// 清空提示
function clearTips(){
    $('.username,.paw,.reg-username,.code').val('');
    $('.username-tips,.paw-tips,.reg-username-tips,.code-tips').html('&nbsp');
}

// 购物车 移动事件
$('.shoppingCar').mouseover(function(event) {
    $('.shoppingContent').show();
    $('.shoppingContentBottom').show();
    $('.shoppingImg').attr('src','素材/icon/25.png');
    $('.shoppingImg2').attr('src','素材/icon/24.png');
    $('.shoppingCar').css({
        'background-color': '#fff',
    });
    $('.shoppingContentTop span').css({
        'color': 'red'
    });
    $('.vertical-line').css({
        'color': '#4d555d'
    });

});
$('.shoppingCar').mouseout(function(event) {
    $('.shoppingContent').hide();
    $('.shoppingContentBottom').hide();
    $('.shoppingImg').attr('src','素材/icon/26.png');
    $('.shoppingImg2').attr('src','素材/icon/23.png');
    $('.shoppingCar').css({
        'background-color': 'red',
    });
    $('.shoppingContentTop span').css({
        'color': '#fff'
    });
    $('.vertical-line').css({
        'color': 'red'
    });
});
$('.shopping-box').mouseover(function(event) {
    $(this).css({
        'background-color': '#f3f5f7',
        'color': 'red'
    });
});
$('.shopping-box').mouseout(function(event) {
    $(this).css({
        'background-color': '#fff',
        'color': '#4d555d'
    });
});
// banner区左边 商品分类
var goodsIndex=0;
$('.banner-item-title').mouseover(function(event) {
    goodsIndex=$(this).index();
    $(this).css({
        'background-color': '#fff',
        'color': 'red'
    });
    $('.sub-item-box')
        .eq(goodsIndex)
        .show();
});
$('.banner-item-title').mouseout(function(event) {
    $(this).css({
        'background-color': 'red',
        'color': '#fff'
    });
    $('.sub-item-box').hide();
});
$('.sub-item-box').mouseover(function(event) {
    $('.banner-item-title')
        .eq(goodsIndex)
        .css({
            'background-color': '#fff',
            'color': 'red'
        });
    $(this).show();
});
$('.sub-item-box').mouseout(function(event) {
    $(this).hide();
    $('.banner-item-title')
        .eq(goodsIndex)
        .css({
            'background-color': 'red',
            'color': '#fff'
        });
});
// banner区中间 上一页 下一页 圆点
var bannerIndex=0;
var bannerTimer=null;
var bannerLength=$('.bannerImg').length;

$('.pre-banner-box').click(function(event) {
    if(bannerIndex<0){
        bannerIndex=bannerLength-1;
    }else{
        bannerIndex--;
    }
    changeImg();
});
$('.next-banner-box').click(function(event) {
    if(bannerIndex>=bannerLength-1){
        bannerIndex=0;
    }else{
        bannerIndex++;
    }
    changeImg();
});
$('.dots span').click(function(event) {
    bannerIndex=$(this).index();
    changeImg();
});
// 每2秒切换图片
var autoChange=function(){
    timer=setInterval(function(){
        if(bannerIndex>=bannerLength-1){
            bannerIndex=0;
        }else{
            bannerIndex++
        }
        changeImg();
    },2000);
}
// banner图 鼠标移动事件
$('.banner-center').mouseover(function(event) {
    if(timer){
        clearInterval(timer);
    }
});
$('.banner-center').mouseout(function(event) {
    autoChange();
});
// 切换图片
function changeImg(){
    $('.bannerImg')
        .removeClass('banner-active')
        .eq(bannerIndex)
        .addClass('banner-active');
    $('.dots span')
        .removeClass('dots-active')
        .eq(bannerIndex)
        .addClass("dots-active");
}
autoChange();
// 楼层区 右上角分类切换
var floorIndex=0;
$('.classification').mouseover(function(event) {
    floorIndex=$(this).index();
    if(floorIndex==2){
        floorIndex=1;
    }else if(floorIndex==4){
        floorIndex=2;
    }
    // 改变分类的题目
    $(this)
        .css({'cursor': 'pointer'})
        .addClass('classification1')
        .children('img')
        .show()
        .end()
        .siblings()
        .removeClass('classification1')
        .children('img')
        .hide();
    // 改变分类的内容
    $(this)
        .parent()
        .parent()
        .siblings()
        .eq(floorIndex)
        .addClass('floor-content-active')
        .siblings()
        .removeClass('floor-content-active');
});
// 楼层区  左边楼层导航
$(window).scroll(function(event) {
    var topDistance=$(document).scrollTop();
    // console.log($('#floor-1').scrollTop());
    if(topDistance>=100){
        $('.floor-nav').show();
    }else{
        $('.floor-nav').hide();
    }

    if(topDistance<=709){
        $('.floor-nav-text1')
            .text('服装')
            .css({'color': 'red'});
        $('.floor-nav-text2')
            .text('2F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text3')
            .text('3F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text4')
            .text('4F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text5')
            .text('5F')
            .css({'color': '#4d555d'});
    }
    else if(topDistance>709 &&topDistance<=1109){
        $('.floor-nav-text1')
            .text('1F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text2')
            .text('美妆')
            .css({'color': 'red'});
        $('.floor-nav-text3')
            .text('3F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text4')
            .text('4F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text5')
            .text('5F')
            .css({'color': '#4d555d'});
    }else if(topDistance>1109 && topDistance<=1509){
        $('.floor-nav-text1')
            .text('1F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text2')
            .text('2F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text3')
            .text('手机')
            .css({'color': 'red'});
        $('.floor-nav-text4')
            .text('4F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text5')
            .text('5F')
            .css({'color': '#4d555d'});
    }else if(topDistance>1509 && topDistance<=1909){
        $('.floor-nav-text1')
            .text('1F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text2')
            .text('2F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text3')
            .text('3F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text4')
            .text('电器')
            .css({'color': 'red'});
        $('.floor-nav-text5')
            .text('5F')
            .css({'color': '#4d555d'});
    }else if(topDistance>1909){
        $('.floor-nav-text1')
            .text('1F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text2')
            .text('2F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text3')
            .text('3F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text4')
            .text('4F')
            .css({'color': '#4d555d'});
        $('.floor-nav-text5')
            .text('数码')
            .css({'color': 'red'});
    }
});
$('.floor-nav-text').click(function(event) {
    var floorNavIndex=$(this).index()+1;
    location.href="#floor-"+floorNavIndex;
});
// 右侧导航
$('.right-nav').mouseover(function(event) {
    $(this)
        .css({'background': '#71777d'})
        .children('div')
        .show();
});
$('.right-nav').mouseout(function(event) {
    $(this)
        .css({'background': '#b7bbbf'})
        .children('div')
        .hide();
});
$('.return-top').click(function(event) {
    $(window).scrollTop('0');
});




