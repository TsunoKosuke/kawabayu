function openLine(){
    window.open("https://lin.ee/7b7Ip2r");
}

function openTwitter(){
    window.open("https://twitter.com/kawabayu")
}

function openInstagram(){
    window.open("https://www.instagram.com/kawabayu/")
}

function openBlog(){
    window.open("http://kawabayu.asablo.jp/blog/")
}

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
       // スクロールの速度
       var speed = 350; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

$(function(){
    /**
     * スライドショー
     */
    $('#slideContents').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        dots: true,
        pauseOnHover: false,
        paiseOnFocus: false,
        fade: true,
    });
});
// $(function () {
//     $(window).scroll(function () {
//         const wHeight = $(window).height();
//         const scrollAmount = $(window).scrollTop();
//         $('.scrollanime').each(function () {
//             const targetPosition = $(this).offset().top;
//             if(scrollAmount > targetPosition - wHeight + 60) {
//                 $(this).addClass("fadeInDown");
//             }
//         });
//     });
// });